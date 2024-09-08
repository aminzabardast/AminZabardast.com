from fastapi import APIRouter
import os
import requests
from redis import Redis
import json
import logging

UNSPLASH_API_KEY = os.environ['UNSPLASH_API_KEY']
UNSPLASH_USER = 'aminzabardast'
UNSPLASH_RANDOM_API_URL = f'https://api.unsplash.com/photos/random?username={UNSPLASH_USER}&count=30'
UNSPLASH_POPULAR_API_URL = f'https://api.unsplash.com/users/{UNSPLASH_USER}/photos?per_page=50&order_by=popular&stats=true'
RANDOM_VALIDITY = 300
POPULAR_VALIDITY = 1800
IS_DEVELOPMENT = os.environ['PRODUCTION'] == 'false'

logging.basicConfig(format='%(levelname)s:=======>   %(message)s', level=logging.DEBUG if IS_DEVELOPMENT else logging.INFO)
redis = Redis(host='cache', port=6379, decode_responses=True)

# Unsplash Fetcher
def get_from_unsplash(url):
    headers = {
    'Authorization': f'Client-ID {UNSPLASH_API_KEY}'
    }

    return requests.request("GET", url, headers=headers, data={})

# RANDOM
def get_random_cache():
    random = redis.get('random')
    if not random:
        return random
    return json.loads(random)

def get_random_cache_ttl():
    return redis.ttl('random')

def set_random_cache(json_object):
    redis.set('random', json.dumps(json_object), ex=RANDOM_VALIDITY)

def get_random():
    cached = get_random_cache()
    if cached:
        logging.info(f'Random cache is VALID for another {get_random_cache_ttl()} seconds!')
        return cached

    response = get_from_unsplash(UNSPLASH_RANDOM_API_URL)

    if response.status_code == 200:
        set_random_cache(json_object=response.json())
        return response.json()
    raise ValueError('Could not get the data!')

# POPULAR
def get_popular_cache():
    popular = redis.get('popular')
    if not popular:
        return popular
    return json.loads(popular)

def get_popular_cache_ttl():
    return redis.ttl('popular')

def set_popular_cache(json_object):
    redis.set('popular', json.dumps(json_object), ex=POPULAR_VALIDITY)

def get_popular():
    cached = get_popular_cache()
    if cached:
        logging.info(f'Popular cache is VALID for another {get_popular_cache_ttl()} seconds!')
        return cached

    response = get_from_unsplash(UNSPLASH_POPULAR_API_URL)

    if response.status_code == 200:
        set_popular_cache(json_object=response.json())
        return response.json()
    raise ValueError('Could not get the data!')

# FastAPI Things
router = APIRouter(
    prefix='/unsplash'
)

@router.get('/')
async def get_home():
    return {}

@router.get('/popular')
async def get_home():
    return get_popular()

@router.get('/random')
async def get_home():
    return get_random()
