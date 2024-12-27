FROM node:18-slim

WORKDIR /app

# copia somente os arquivos essenciais para instalar dependências
COPY package.json pnpm-lock.yaml ./

# instala o PNPM e as dependências do projeto
RUN npm install -g pnpm && pnpm install --frozen-lockfile

COPY . .

# expõe a porta do serviço
EXPOSE 4000

CMD ["pnpm", "start"]
