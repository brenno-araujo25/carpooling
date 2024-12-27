import dotenv from 'dotenv'
import path from 'path'
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

// carrega as variáveis de ambiente quando rodando localmente
if (process.env.NODE_ENV !== 'production') {
    const __dirname = dirname(fileURLToPath(import.meta.url))
    dotenv.config({ path: path.resolve(__dirname, '../../../.env') })
}

if (!process.env.GATEWAY_PORT || !process.env.USER_SERVICE_URL || 
    !process.env.AUTH_SERVICE_URL || !process.env.RIDE_SERVICE_URL) {
    console.error('Variáveis de ambiente não configuradas')
    process.exit(1)
}

export const config = {
    GATEWAY_PORT: process.env.GATEWAY_PORT,
    USER_SERVICE_URL: process.env.USER_SERVICE_URL,
    AUTH_SERVICE_URL: process.env.AUTH_SERVICE_URL,
    RIDE_SERVICE_URL: process.env.RIDE_SERVICE_URL,
}
