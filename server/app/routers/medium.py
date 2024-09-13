from fastapi import APIRouter
import requests
import feedparser
from redis import Redis
import json
import logging
import os

MEDIUM_USER = 'aminzabardast'
MEDIUM_FEED_URL = f'https://{MEDIUM_USER}.medium.com/feed'
VALIDITY = 600
IS_DEVELOPMENT = os.environ['PRODUCTION'] == 'false'

logging.basicConfig(format='%(levelname)s:=======>   %(message)s', level=logging.DEBUG if IS_DEVELOPMENT else logging.INFO)

router = APIRouter(
    prefix='/medium'
)

@router.get('/')
async def get_dimensions():
    response = requests.get(MEDIUM_FEED_URL)

    if response.status_code == 200:
        posts = response.text
        feed = feedparser.parse(posts)
        return feed
    else:
        return fastapi_response({
            error: 'Feed could not be fetched'
        })
