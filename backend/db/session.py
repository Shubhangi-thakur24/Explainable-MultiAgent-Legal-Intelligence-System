"""Async SQLAlchemy engine and session dependencies."""

from collections.abc import AsyncGenerator

from sqlalchemy.ext.asyncio import AsyncSession, async_sessionmaker, create_async_engine

from backend.core.config import get_settings


settings = get_settings()

engine = create_async_engine(
    settings.DATABASE_URL,
    pool_pre_ping=True,
)

AsyncSessionLocal = async_sessionmaker(
    bind=engine,
    class_=AsyncSession,
    expire_on_commit=False,
)


async def get_db() -> AsyncGenerator[AsyncSession, None]:
    """Yield a database session and close it after the request."""
    async with AsyncSessionLocal() as session:
        yield session


async def close_database() -> None:
    """Dispose of the database connection pool."""
    await engine.dispose()


__all__ = ["AsyncSessionLocal", "close_database", "engine", "get_db"]
