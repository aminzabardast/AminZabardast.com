from fastapi import APIRouter

UNSPLASH_API_KEY = ''
UNSPLASH_USER = ''

router = APIRouter(
    prefix='/unsplash'
)

@router.get('/')
async def get_dimensions():
    return 'Unsplash End Point'
