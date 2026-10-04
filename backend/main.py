"""FastAPI application entry point for KanoonDrishti AI."""

from fastapi import FastAPI

from backend.api.router import api_router
from backend.core.config import get_settings


settings = get_settings()

app = FastAPI(
    title=settings.PROJECT_NAME,
    version="0.1.0",
    description="Explainable bilingual legal intelligence backend.",
)

app.include_router(api_router, prefix=settings.API_V1_STR)


@app.get("/", tags=["system"], summary="Backend root")
async def root() -> dict[str, str]:
    """Return a small service-identification response."""
    return {
        "service": settings.PROJECT_NAME,
        "status": "running",
        "docs": "/docs",
    }


__all__ = ["app"]
