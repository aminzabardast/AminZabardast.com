from fastapi import APIRouter

MEDIUM_API_KEY = ''
MEDIUM_USER = ''

router = APIRouter(
    prefix='/medium'
)

@router.get('/')
async def get_dimensions():
    return 'Medium End Point'
