from email.policy import default
from cassandra.cqlengine import columns
from cassandra.cqlengine.models import Model
data = {
    "eventbrite_event_id":"12343423233",
    "name": "Retro Party"
}

class Event(Model): #-> table
    __keyspace__ = "api_scrapper_app1"
    eventbrite_event_id = columns.Text(primary_key = True, required=True)
    name = columns.Text()
    price_str=columns.Text(default="-100")

class EventScrapeEvent(Model): #-> table
    __keyspace__ = "api_scrapper_app1"
    uuid = columns.UUID(primary_key = True, )
    eventbrite_event_id = columns.Text(index=True)
    name = columns.Text()
    price_str=columns.Text(default="-100")