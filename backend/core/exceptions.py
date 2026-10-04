class LegalAIException(Exception):
    status_code: int = 500
    detail: str = "Internal server error"

    def __init__(self, detail: str | None = None) -> None:
        self.detail = detail or self.detail
        super().__init__(self.detail)


class AuthenticationError(LegalAIException):
    status_code = 401
    detail = "Authentication failed"


class AuthorizationError(LegalAIException):
    status_code = 403
    detail = "Not authorized"


class DocumentProcessingError(LegalAIException):
    status_code = 422
    detail = "Document processing failed"


class EntityNotFoundError(LegalAIException):
    status_code = 404
    detail = "Entity not found"

    def __init__(
        self,
        detail: str | None = None,
        entity: str | None = None,
        entity_id: str | None = None,
    ) -> None:
        if detail is None and entity is not None:
            detail = (
                f"{entity} with ID '{entity_id}' not found"
                if entity_id
                else f"{entity} not found"
            )
        super().__init__(detail=detail)


class CitationVerificationError(LegalAIException):
    status_code = 422
    detail = "Citation verification failed"


class CourtroomSimulationError(LegalAIException):
    status_code = 422
    detail = "Courtroom simulation error"
