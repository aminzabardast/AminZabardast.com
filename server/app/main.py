from fastapi import FastAPI, Request
from fastapi.staticfiles import StaticFiles
from fastapi.responses import HTMLResponse
from fastapi.exception_handlers import http_exception_handler
from starlette.exceptions import HTTPException as StarletteHTTPException

app = FastAPI()

app.mount("/", StaticFiles(directory="/code/dist", html=True), name="app")

# Any files that does not exist should load the `index.html`
@app.exception_handler(StarletteHTTPException)
async def there_is_no_server_side_404(request: Request, exc: StarletteHTTPException):
    return HTMLResponse(content=open("dist/index.html").read(), status_code=200)
