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
redis = Redis(host='cache', port=6379, decode_responses=True)

def get_medium_cache():
    medium = redis.get('medium')
    if not medium:
        return medium
    return json.loads(medium)

def get_medium_feed():
    return requests.get(MEDIUM_FEED_URL)

def get_cache_ttl():
    return redis.ttl('medium')

def set_cache(json_object):
    redis.set('medium', json.dumps(json_object), ex=VALIDITY)

router = APIRouter(
    prefix='/medium'
)

@router.get('/')
async def get_dimensions():
    cached = get_medium_cache()
    if cached:
        logging.info(f'Medium cache is VALID for another {get_cache_ttl()} seconds!')
        return cached
    
    response = get_medium_feed()

    if response.status_code == 200:
        posts = response.text
        feed = feedparser.parse(posts)
        set_cache(json_object=feed)
        return feed
    else:
        return fastapi_response({
            error: 'Feed could not be fetched'
        })
