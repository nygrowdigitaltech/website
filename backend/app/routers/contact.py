from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
import os
import httpx
from .. import crud, database, schemas
from ..utils.email import send_email, EMAIL_RECEIVER

router = APIRouter()

RECAPTCHA_SECRET_KEY = os.getenv("RECAPTCHA_SECRET_KEY")
RECAPTCHA_VERIFY_URL = "https://www.google.com/recaptcha/api/siteverify"

async def verify_recaptcha(token: str) -> bool:
    """Verify reCAPTCHA token with Google's API."""
    if not RECAPTCHA_SECRET_KEY:
        print("reCAPTCHA secret key not configured")
        return False
    
    if not token:
        return False
    
    try:
        async with httpx.AsyncClient() as client:
            response = await client.post(
                RECAPTCHA_VERIFY_URL,
                data={
                    "secret": RECAPTCHA_SECRET_KEY,
                    "response": token,
                },
                timeout=10.0,
            )
            result = response.json()
            # 👇 Log the full response for debugging
            print("Google reCAPTCHA result:", result)

        if not result.get("success", False):
            print(f"reCAPTCHA verification failed: {result.get('error-codes', [])}")
            return False
        
        # reCAPTCHA v3 returns a score (0.0 - 1.0); v2 does not
        score = result.get("score")
        if score is not None and score < 0.5:
            print(f"reCAPTCHA score too low: {score}")
            return False
        
        return True
    except Exception as e:
        print(f"reCAPTCHA verification error: {e}")
        return False

def get_db():
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()

# CREATE
@router.post("/contact/")
def create_contact(contact: schemas.ContactCreate, db: Session = Depends(get_db)):
    new_contact = crud.create_contact(db, contact)

    # Notify the team by email — failure here should not break the save
    if EMAIL_RECEIVER:
        subject = f"New contact form submission from {contact.name}"
        body = (
            f"Name: {contact.name}\n"
            f"Email: {contact.email}\n"
            f"Company: {contact.company}\n"
            f"Service: {contact.service}\n"
            f"Budget: {contact.budget}\n\n"
            f"Message:\n{contact.message}"
        )
        send_email(EMAIL_RECEIVER, subject, body)

    return new_contact

# READ all
@router.get("/contacts/")
def read_contacts(db: Session = Depends(get_db)):
    return crud.get_contacts(db)

# READ one
@router.get("/contacts/{contact_id}")
def read_contact(contact_id: int, db: Session = Depends(get_db)):
    contact = crud.get_contact(db, contact_id)
    if not contact:
        raise HTTPException(status_code=404, detail="Contact not found")
    return contact

# UPDATE
@router.put("/contacts/{contact_id}")
def update_contact(contact_id: int, contact: schemas.ContactCreate, db: Session = Depends(get_db)):
    updated = crud.update_contact(db, contact_id, contact)
    if not updated:
        raise HTTPException(status_code=404, detail="Contact not found")
    return updated

# DELETE
@router.delete("/contacts/{contact_id}")
def delete_contact(contact_id: int, db: Session = Depends(get_db)):
    deleted = crud.delete_contact(db, contact_id)
    if not deleted:
        raise HTTPException(status_code=404, detail="Contact not found")
    return {"detail": "Contact deleted"}
