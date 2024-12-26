# Construir a imagem Docker
```bash
docker build -t api-gateway .
```
# Executar o container
```bash
docker run -p 3000:3000 --env-file .env api-gateway
```
