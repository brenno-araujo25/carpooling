from fastapi import APIRouter, Depends, HTTPException, Request
from app.services.user_service import get_user_by_username
from app.utils.jwt_handler import create_access_token, decode_access_token
from app.utils.bcrypt_handler import hash_password, check_password
from fastapi.security import OAuth2PasswordRequestForm

router = APIRouter()

@router.post("/login")
async def login(form_data: OAuth2PasswordRequestForm = Depends()):
    user = await get_user_by_username(form_data.username)
    if user and check_password(form_data.password, user["password"]):
        access_token = create_access_token({
            "id": user["id"], 
            "email": user["email"], 
            "username": user["username"],
            "role": user["role"],
            "preferences": user["preferences"],
        })
        return {"access_token": access_token, "token_type": "bearer"}
    raise HTTPException(status_code=401, detail="Username ou senha inválidos")

@router.get("/decode-token")
async def decode_token(request: Request):
    data = await request.json()
    token = data.get("token")
    if not token:
        raise HTTPException(status_code=400, detail="Token inválido")
    
    user_data = decode_access_token(token)
    if not user_data:
        raise HTTPException(status_code=401, detail="Token inválido")
    return user_data

@router.post("/hash-password")
async def hash_password_route(request: Request):
    data = await request.json()
    password = data.get("password")
    if not password:
        raise HTTPException(status_code=400, detail="Senha inválida")
    return hash_password(password)

@router.post("/check-password")
async def check_password_route(request: Request):
    data = await request.json()
    password = data.get("password")
    hashed_password = data.get("hashed_password")
    if not password or not hashed_password:
        raise HTTPException(status_code=400, detail="Senha ou hash inválidos")
    if check_password(password, hashed_password):
        return {"message": "Senha válida"}
    raise HTTPException(status_code=401, detail="Senha inválida")
