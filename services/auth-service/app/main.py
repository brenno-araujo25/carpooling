from fastapi import FastAPI
from app.routes import auth

app = FastAPI(title="Serviço de Autenticação e Autorização")

app.include_router(auth.router, tags=["Authenticação", "Autorização"])

@app.get("/health")
async def health():
    return {"status": "ok"}