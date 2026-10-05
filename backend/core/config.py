from functools import lru_cache
from typing import Optional

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        extra="ignore",
    )

    PROJECT_NAME: str = "Explainable Bilingual Legal Intelligence"
    API_V1_STR: str = "/api/v1"
    ENVIRONMENT: str = "development"
    LOG_LEVEL: str = "INFO"

    SECRET_KEY: Optional[str] = None
    JWT_ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 1440
    DEV_JWT_TOKEN: Optional[str] = None

    DATABASE_URL: str = "sqlite+aiosqlite:///./legal_intelligence.db"
    SYNC_DATABASE_URL: str = "sqlite:///./legal_intelligence.db"

    QDRANT_URL: Optional[str] = None
    QDRANT_API_KEY: Optional[str] = None
    QDRANT_HOST: Optional[str] = None
    QDRANT_PORT: int = 6333
    QDRANT_COLLECTION_NAME: str = "legal_chunks"

    NEO4J_URI: str = "bolt://localhost:7687"
    NEO4J_USER: str = "neo4j"
    NEO4J_PASSWORD: Optional[str] = None
    NEO4J_DATABASE: str = "neo4j"

    LLM_PROVIDER: str = "xai"
    XAI_API_KEY: Optional[str] = None
    LLM_MODEL: str = "grok-4.7"

    SARVAM_API_KEY: Optional[str] = None
    SARVAM_TTS_MODEL: str = "bulbul:v2"

    EMBEDDING_MODEL: str = "intfloat/multilingual-e5-base"

    TESSERACT_CMD: Optional[str] = None
    OCR_CONFIDENCE_THRESHOLD: float = 0.60
    OCR_DEFAULT_LANG: str = "hin+eng"

    STORAGE_ROOT: str = "./storage"
    MAX_UPLOAD_SIZE_MB: int = 50

    LEGAL_NER_MODEL_PATH: str = "backend/models/legal_ner/kanoondrishti-xlmr-legal-ner"
    LEGAL_NER_DEVICE: str = "auto"


@lru_cache(maxsize=1)
def get_settings() -> Settings:
    return Settings()
