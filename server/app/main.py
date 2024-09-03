from fastapi import FastAPI, Request
from fastapi.staticfiles import StaticFiles
from fastapi.responses import HTMLResponse
from fastapi.exception_handlers import http_exception_handler
from starlette.exceptions import HTTPException as StarletteHTTPException
from .routers import medium, unsplash

# Medium Data Server
api_app_v1 = FastAPI()
api_app_v1.include_router(medium.router)
api_app_v1.include_router(unsplash.router)


app = FastAPI()

app.mount('/api/v1', api_app_v1)
app.mount('/', StaticFiles(directory='dist', html=True), name='app')

# Any files that does not exist should load the `index.html`
@app.exception_handler(StarletteHTTPException)
async def there_is_no_server_side_404(request: Request, exc: StarletteHTTPException):
    return HTMLResponse(content=open('dist/index.html').read(), status_code=200)
