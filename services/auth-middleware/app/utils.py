import jwt 
from fastapi import Request, HTTPException
from jwt import PyJWTError
from config import settings

def decode_jwt(token: str):
    try:
        payload = jwt.decode(token, settings.secret_key, algorithms=[settings.algorithm])
        return payload
    except PyJWTError:
        raise HTTPException(status_code=401, detail="Token inválido ou expirado")

def get_token_from_headers(request: Request):
    if "Authorization" not in request.headers or not request.headers["Authorization"].startswith("Bearer "):
        raise HTTPException(status_code=401, detail="Token não encontrado")
    token = request.headers["Authorization"].replace("Bearer ", "")
    return token

def generate_jwt(data: dict):
    return jwt.encode(data, settings.secret_key, algorithm=settings.algorithm)