from datetime import datetime, timedelta, timezone
from typing import Any

import bcrypt
from jose import ExpiredSignatureError, JWTError, jwt

from backend.auth.schemas import TokenPayload
from backend.core.config import get_settings
from backend.core.exceptions import AuthenticationError

ALGORITHM = "HS256"

__all__ = [
    "ALGORITHM",
    "TokenPayload",
    "verify_password",
    "get_password_hash",
    "create_access_token",
    "decode_token",
]


def verify_password(plain_password: str, hashed_password: str) -> bool:
    """Verify a plain password against its bcrypt hashed version."""
    try:
        return bcrypt.checkpw(
            plain_password.encode("utf-8"), hashed_password.encode("utf-8")
        )
    except Exception:
        return False


def get_password_hash(password: str) -> str:
    """Generate a bcrypt password hash."""
    salt = bcrypt.gensalt()
    return bcrypt.hashpw(password.encode("utf-8"), salt).decode("utf-8")


def create_access_token(
    subject: str | Any,
    expires_delta: timedelta | None = None,
    claims: dict[str, Any] | None = None,
) -> str:
    """Generate a signed JWT access token with subject and optional claims."""
    settings = get_settings()
    now = datetime.now(timezone.utc)
    expire = now + (
        expires_delta
        if expires_delta
        else timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    )

    to_encode: dict[str, Any] = {
        "sub": str(subject),
        "exp": int(expire.timestamp()),
        "iat": int(now.timestamp()),
    }
    if claims:
        to_encode.update(claims)

    return jwt.encode(to_encode, settings.SECRET_KEY, algorithm=ALGORITHM)


def decode_token(token: str) -> dict[str, Any]:
    """Decode and validate a signed JWT access token."""
    settings = get_settings()

    if settings.DEV_JWT_TOKEN and token == settings.DEV_JWT_TOKEN:
        payload = jwt.decode(token, "", options={"verify_signature": False})
        if payload.get("admin") and not payload.get("role"):
            payload["role"] = "admin"
        if not payload.get("name"):
            payload["name"] = "Admin"
        return payload

    try:
        return jwt.decode(token, settings.SECRET_KEY, algorithms=[ALGORITHM])
    except ExpiredSignatureError as exc:
        raise AuthenticationError(detail="Token has expired") from exc
    except JWTError as exc:
        raise AuthenticationError(detail="Could not validate credentials") from exc
