import httpx
from app.config import config

USER_SERVICE_URL = config.USER_SERVICE_URL

async def get_user_by_username(username: str):
    async with httpx.AsyncClient() as client:
        response = await client.get(f"{USER_SERVICE_URL}/{username}")
        if response.status_code == 200:
            return response.json()
        return None