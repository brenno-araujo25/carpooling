from fastapi import FastAPI, Request, HTTPException
from utils import get_token_from_headers, decode_jwt, generate_jwt

app = FastAPI()

@app.middleware("http")
async def auth_middleware(request: Request, call_next):
    if request.url.path not in ["/login", "/register", "/health"]:
        token = get_token_from_headers(request)
        user_data = decode_jwt(token)
        request.state.user = user_data
    response = await call_next(request)
    return response

@app.get("/health")
def health_check():
    return {"status": "ok"}

@app.get("/protected")
def protected_route(request: Request):
    user = request.state.user
    return {"mesage": f"Olá, {user['username']}"}
