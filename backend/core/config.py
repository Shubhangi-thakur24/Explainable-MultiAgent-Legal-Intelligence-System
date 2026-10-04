from functools import lru_cache
from typing import Optional

from pydantic import model_validator
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", extra="ignore")

    PROJECT_NAME: str = "Explainable Bilingual Legal Intelligence"
    API_V1_STR: str = "/api/v1"
    SECRET_KEY: str = "dev-secret-key-change-in-production-32ch!!"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24
    DATABASE_URL: str = "sqlite+aiosqlite:///./legal_intelligence.db"
    SYNC_DATABASE_URL: str = "sqlite:///./legal_intelligence.db"

    QDRANT_HOST: str = ":memory:"
    QDRANT_URL: Optional[str] = None
    QDRANT_API_KEY: Optional[str] = None
    QDRANT_PORT: int = 6333
    QDRANT_COLLECTION_NAME: str = "legal_chunks"

    NEO4J_URI: str = "bolt://localhost:7687"
    NEO4J_USER: str = "neo4j"
    NEO4J_USERNAME: Optional[str] = None
    NEO4J_PASSWORD: str = "password"
    NEO4J_AUTH_TOKEN: Optional[str] = None
    NEO4J_DATABASE: str = "neo4j"

    OPENAI_API_KEY: Optional[str] = None
    GEMINI_API_KEY: Optional[str] = None
    ANTHROPIC_API_KEY: Optional[str] = None
    HUGGINGFACE_API_KEY: Optional[str] = None
    GROQ_API_KEY: Optional[str] = None
    SARVAM_API_KEY: Optional[str] = None
    LLM_MODEL: str = "gpt-4o-mini"
    EMBEDDING_MODEL: str = "BAAI/bge-m3"

    LOG_LEVEL: str = "INFO"
    ENVIRONMENT: str = "development"
    TESSERACT_CMD: Optional[str] = None
    OCR_CONFIDENCE_THRESHOLD: float = 0.60
    OCR_DEFAULT_LANG: str = "hin+eng"
    STORAGE_ROOT: str = "./storage"
    DEV_JWT_TOKEN: Optional[str] = None
    LEGAL_NER_MODEL_PATH: str = "backend/models/legal_ner/kanoondrishti-xlmr-legal-ner"
    LEGAL_NER_DEVICE: str = "auto"

    @model_validator(mode="after")
    def _blank_env_values_fall_back_to_defaults(self) -> "Settings":
        """Treat blank environment values as unset."""
        if not str(self.QDRANT_HOST).strip():
            self.QDRANT_HOST = ":memory:"

        for field_name in (
            "QDRANT_URL",
            "QDRANT_API_KEY",
            "TESSERACT_CMD",
            "DEV_JWT_TOKEN",
        ):
            value = getattr(self, field_name)
            if isinstance(value, str) and not value.strip():
                setattr(self, field_name, None)

        return self


@lru_cache
def get_settings() -> Settings:
    return Settings()
