"""Common FastAPI dependencies for the KanoonDrishti backend.

Foundation-level dependencies only. Authentication and case-access
dependencies will be introduced in their respective milestones.
"""

from typing import Annotated

from fastapi import Depends, Request

from backend.core.config import Settings, get_settings


def get_request_id(request: Request) -> str:
    """Return the request/correlation ID attached to the current request."""
    return getattr(request.state, "request_id", "") or request.headers.get(
        "X-Request-ID", ""
    )


SettingsDep = Annotated[Settings, Depends(get_settings)]
RequestIdDep = Annotated[str, Depends(get_request_id)]

__all__ = ["RequestIdDep", "SettingsDep", "get_request_id"]
