import dotenv from 'dotenv';
import path from 'path';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

// carrega as variáveis de ambiente do arquivo .env na raiz do projeto
const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.resolve(__dirname, '../../../../.env') });

if (!process.env.POSTGRES_USER || !process.env.POSTGRES_PASSWORD || !process.env.POSTGRES_DB || !process.env.POSTGRES_HOST || !process.env.POSTGRES_PORT) {
    console.error('Por favor, defina as variáveis de ambiente POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB, POSTGRES_HOST e POSTGRES_PORT');
    process.exit(1);
}

export const config = {
    POSTGRES_USER: process.env.POSTGRES_USER,
    POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
    POSTGRES_DB: process.env.POSTGRES_DB,
    POSTGRES_HOST: process.env.POSTGRES_HOST,
    POSTGRES_PORT: process.env.POSTGRES_PORT,
    // consegue a porta do serviço de usuário a partir da URL
    USER_SERVICE_PORT: process.env.USER_SERVICE_URL.split(':')[2],
};
