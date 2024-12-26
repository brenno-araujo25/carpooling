from pydantic_settings import BaseSettings
from dotenv import load_dotenv
import os

class Settings(BaseSettings):
    secret_key: str
    algorithm: str

    class Config:
        env_file = "../../../.env"

load_dotenv()

settings = Settings(
    secret_key=os.getenv("SECRET_KEY"),
    algorithm=os.getenv("ALGORITHM"),
)
