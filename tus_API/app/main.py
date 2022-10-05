from fastapi import FastAPI

from . import config

settings = config.get_settings()

app = FastAPI()

@app.get("/")
def read_index():
    return {"welcome": "to my event", "the_name": settings.name}