from bcrypt import hashpw, gensalt, checkpw

def hash_password(password: str) -> str:
    hashed_password = hashpw(password.encode(), gensalt())
    if hashed_password:
        return hashed_password.decode()
    return None

def check_password(password: str, hashed_password: str) -> bool:
    return checkpw(password.encode(), hashed_password.encode())
