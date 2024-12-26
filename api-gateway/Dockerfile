FROM node:21.7.1

WORKDIR /usr/src/app

COPY package*.json ./
COPY pnpm-lock.yaml ./

# use pnpm
RUN npm install -g pnpm
RUN pnpm install

COPY . .

EXPOSE 3000

CMD ["pnpm", "start"]