import os
import smtplib
import ssl
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from dotenv import load_dotenv

load_dotenv()

SMTP_HOST = os.getenv("SMTP_HOST") or os.getenv("SMTP_SERVER")
SMTP_PORT = int(os.getenv("SMTP_PORT", "587"))
SMTP_USER = os.getenv("SMTP_USER")
# Gmail App Passwords are shown with spaces for readability (e.g. "xxxx xxxx xxxx xxxx"),
# but SMTP login needs them without spaces — strip them in case that's how it got pasted in.
SMTP_PASSWORD = (os.getenv("SMTP_PASSWORD") or "").replace(" ", "")
EMAIL_SENDER = os.getenv("EMAIL_SENDER")
EMAIL_RECEIVER = os.getenv("EMAIL_RECEIVER")


def send_email(to_email: str, subject: str, body: str) -> bool:
    if not SMTP_HOST or not SMTP_USER or not SMTP_PASSWORD:
        print("SMTP not configured")
        return False

    sender_email = EMAIL_SENDER or SMTP_USER

    msg = MIMEMultipart()
    msg["From"] = f"NYGrow Contact Form <{sender_email}>"
    msg["To"] = to_email
    msg["Subject"] = subject
    msg["From"] = EMAIL_SENDER
    msg["To"] = to_email

    try:
        with smtplib.SMTP_SSL(SMTP_SERVER, SMTP_PORT) as server:
            server.login(SMTP_USER, SMTP_PASSWORD)
            server.send_message(msg)
        print("Email sent successfully")
        return True
    except Exception as e:
        print("Email sending failed:", e)
        return False
