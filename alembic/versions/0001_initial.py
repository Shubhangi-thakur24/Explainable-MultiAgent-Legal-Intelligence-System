"""Initial empty schema migration.

The application foundation has no ORM tables yet. Domain tables are introduced
in later milestones and will generate subsequent migrations.
"""

from alembic import op


revision = "0001_initial"
down_revision = None
branch_labels = None
depends_on = None


def upgrade() -> None:
    """Create the initial schema baseline."""


def downgrade() -> None:
    """Revert the initial schema baseline."""
