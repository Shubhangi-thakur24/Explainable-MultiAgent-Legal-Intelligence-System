"""Service health endpoints."""

from fastapi import APIRouter, Depends
from sqlalchemy import text
from sqlalchemy.ext.asyncio import AsyncSession

from backend.core.config import Settings
from backend.core.dependencies import SettingsDep
from backend.db.session import get_db


router = APIRouter(prefix="/health", tags=["health"])


@router.get("", summary="Check API and database health")
async def health_check(
    settings: SettingsDep,
    db: AsyncSession = Depends(get_db),
) -> dict[str, str]:
    """Return service status after verifying the database connection."""
    await db.execute(text("SELECT 1"))
    return {
        "status": "ok",
        "service": settings.PROJECT_NAME,
        "database": "ok",
    }


__all__ = ["router"]
