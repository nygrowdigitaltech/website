from pydantic import BaseModel
from typing import Optional

class ContactBase(BaseModel):
    name: str
    email: str
    company: str
    phone: str
    service: str
    budget: str
    message: str
    recaptcha_token: Optional[str] = None

class ContactCreate(ContactBase):
    pass

class Contact(ContactBase):
    id: int
    class Config:
        orm_mode = True
