from datetime import datetime, timedelta, timezone
from typing import Any

import bcrypt
from argon2 import PasswordHasher
from argon2.exceptions import InvalidHashError, VerificationError
from jose import ExpiredSignatureError, JWTError, jwt

from backend.core.config import get_settings
from backend.core.exceptions import AuthenticationError


__all__ = [
    "get_password_hash",
    "verify_password",
    "create_access_token",
    "decode_token",
]


_password_hasher = PasswordHasher()
_BCRYPT_PREFIXES = ("$2a$", "$2b$", "$2x$", "$2y$")


def get_password_hash(password: str) -> str:
    if not password:
        raise ValueError("Password cannot be empty.")
    return _password_hasher.hash(password)


def _verify_argon2(plain_password: str, hashed_password: str) -> bool:
    try:
        return _password_hasher.verify(hashed_password, plain_password)
    except (VerificationError, InvalidHashError):
        return False


def _verify_legacy_bcrypt(plain_password: str, hashed_password: str) -> bool:
    try:
        return bcrypt.checkpw(
            plain_password.encode(),
            hashed_password.encode(),
        )
    except (ValueError, TypeError):
        return False


def verify_password(plain_password: str, hashed_password: str) -> bool:
    if not plain_password or not hashed_password:
        return False

    if hashed_password.startswith(_BCRYPT_PREFIXES):
        return _verify_legacy_bcrypt(plain_password, hashed_password)

    return _verify_argon2(plain_password, hashed_password)


def create_access_token(
    subject: str | Any,
    expires_delta: timedelta | None = None,
    claims: dict[str, Any] | None = None,
) -> str:
    settings = get_settings()

    if not settings.SECRET_KEY:
        raise AuthenticationError(
            detail="SECRET_KEY is not configured; cannot issue access tokens."
        )

    now = datetime.now(timezone.utc)
    expires_delta = expires_delta or timedelta(
        minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES
    )

    payload = {
        "sub": str(subject),
        "exp": int((now + expires_delta).timestamp()),
        "iat": int(now.timestamp()),
    }

    if claims:
        payload.update(claims)

    return jwt.encode(
        payload,
        settings.SECRET_KEY,
        algorithm=settings.JWT_ALGORITHM,
    )


def _decode_development_token(token: str) -> dict[str, Any]:
    payload = dict(
        jwt.decode(
            token,
            "",
            options={"verify_signature": False},
        )
    )

    if payload.get("admin") and not payload.get("role"):
        payload["role"] = "admin"

    payload.setdefault("name", "Admin")

    return payload


def decode_token(token: str) -> dict[str, Any]:
    settings = get_settings()

    if not token:
        raise AuthenticationError(detail="Not authenticated")

    if (
        settings.ENVIRONMENT == "development"
        and settings.DEV_JWT_TOKEN
        and token == settings.DEV_JWT_TOKEN
    ):
        return _decode_development_token(token)

    if not settings.SECRET_KEY:
        raise AuthenticationError(
            detail="SECRET_KEY is not configured; cannot validate credentials."
        )

    try:
        return jwt.decode(
            token,
            settings.SECRET_KEY,
            algorithms=[settings.JWT_ALGORITHM],
        )
    except ExpiredSignatureError as exc:
        raise AuthenticationError(detail="Token has expired") from exc
    except JWTError as exc:
        raise AuthenticationError(
            detail="Could not validate credentials"
        ) from exc
