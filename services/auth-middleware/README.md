# Testando o Serviço
## Inicie o serviço:
```bash
uvicorn app.main:app --host 0.0.0.0 --port 8000
```
## Faça uma requisição protegida:
```bash
curl -H "Authorization: Bearer <JWT_TOKEN>" http://localhost:8000/protected
```
Se o token for válido, retornará a resposta com os dados do usuário. Caso contrário, será retornado um erro de autorização.