"""SQLAlchemy declarative base for the backend database."""

from sqlalchemy.orm import DeclarativeBase


class Base(DeclarativeBase):
    """Base class for all SQLAlchemy ORM models."""


__all__ = ["Base"]
