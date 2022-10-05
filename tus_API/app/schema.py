from uuid import UUID
from typing import Optional
from pydantic import BaseModel

class EventSchema(BaseModel):
    eventbrite_event_id: str
    name: Optional[str]

class EventScrapeEventSchema(BaseModel):
    uuid: UUID
    eventbrite_event_id: str
    name: Optional[str]