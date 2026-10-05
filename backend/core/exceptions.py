class LegalAIException(Exception):
    status_code = 500
    code = "LEGAL_AI_ERROR"
    detail = "An unexpected error occurred."

    def __init__(self, detail: str | None = None):
        self.detail = detail or self.detail
        super().__init__(self.detail)


class AuthenticationError(LegalAIException):
    status_code = 401
    code = "AUTHENTICATION_ERROR"
    detail = "Authentication failed."


class AuthorizationError(LegalAIException):
    status_code = 403
    code = "AUTHORIZATION_ERROR"
    detail = "You are not authorized to perform this action."


class DocumentProcessingError(LegalAIException):
    status_code = 422
    code = "DOCUMENT_PROCESSING_ERROR"
    detail = "Document processing failed."


class EntityAlreadyExistsError(LegalAIException):
    status_code = 409
    code = "ENTITY_ALREADY_EXISTS"
    detail = "The requested entity already exists."


class EntityNotFoundError(LegalAIException):
    status_code = 404
    code = "ENTITY_NOT_FOUND"
    detail = "The requested entity was not found."


class CitationVerificationError(LegalAIException):
    status_code = 422
    code = "CITATION_VERIFICATION_ERROR"
    detail = "Citation verification failed."


class CourtroomSimulationError(LegalAIException):
    status_code = 422
    code = "COURTROOM_SIMULATION_ERROR"
    detail = "Courtroom simulation failed."


__all__ = [
    "LegalAIException",
    "AuthenticationError",
    "AuthorizationError",
    "DocumentProcessingError",
    "EntityAlreadyExistsError",
    "EntityNotFoundError",
    "CitationVerificationError",
    "CourtroomSimulationError",
]
