"""Authentication schemas used by backend security primitives.

The full authentication API is implemented in the authentication milestone.
This module provides the token payload type required by the foundation layer.
"""

from pydantic import BaseModel, ConfigDict


class TokenPayload(BaseModel):
    """Validated JWT payload used by the backend security layer."""

    model_config = ConfigDict(extra="allow")

    sub: str | None = None
    exp: int | None = None
    iat: int | None = None
    role: str | None = None
    name: str | None = None
    admin: bool = False


__all__ = ["TokenPayload"]
