import uuid
from cassandra.cqlengine.management import sync_table
from numpy import product
from .db import get_session
from .models import Event, EventScrapeEvent

session = get_session()
sync_table(Event)
sync_table(EventScrapeEvent)

def create_entry(data:dict):
    return Event.create(**data)

def create_scrape_entry(data:dict):
    data['uuid'] = uuid.uuid1() #includes a timestamp
    return EventScrapeEvent.create(**data)

def add_scrape_entry(data:dict):
    product = create_entry(data)
    scrape_obj = create_scrape_entry(data)
    return product, scrape_obj