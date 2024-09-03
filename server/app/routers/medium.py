from fastapi import APIRouter
import requests
import feedparser

MEDIUM_USER = 'aminzabardast'
MEDIUM_FEED_URL = f'https://{MEDIUM_USER}.medium.com/feed'

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
