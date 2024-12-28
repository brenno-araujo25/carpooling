import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    SECRET_KEY = os.getenv('SECRET_KEY', 'chave_secreta')
    ALGORITHM = os.getenv('ALGORITHM', 'HS256')
    USER_SERVICE_URL = os.getenv('USER_SERVICE_URL', 'http://localhost:4000')
    ACCESS_TOKEN_EXPIRE_MINUTES = os.getenv('ACESS_TOKEN_EXPIRE_MINUTES', 30)

config = Config()
