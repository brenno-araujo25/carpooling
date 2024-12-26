import Fastify from 'fastify'
import proxy from '@fastify/http-proxy'
import cors from '@fastify/cors'
import dotenv from 'dotenv'
import path from 'path'
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

// carrega as variáveis de ambiente do arquivo .env na raiz do projeto
const __dirname = dirname(fileURLToPath(import.meta.url))
dotenv.config({ path: path.resolve(__dirname, '../../.env') })

export function createGateway() {
    if (!process.env.USER_SERVICE_URL || !process.env.AUTH_SERVICE_URL || !process.env.RIDE_SERVICE_URL) {
        console.error('Por favor, defina as variáveis de ambiente USER_SERVICE_URL, AUTH_SERVICE_URL e RIDE_SERVICE_URL')
        process.exit(1)
    }

    const fastify = Fastify()

    // permite requisições de qualquer origem
    fastify.register(cors)

    // serviço de usuários
    fastify.register(proxy, {
        upstream: process.env.USER_SERVICE_URL,
        prefix: '/api/users',
        rewritePrefix: '/users',
    })

    // serviço de autenticação
    fastify.register(proxy, {
        upstream: process.env.AUTH_SERVICE_URL,
        prefix: '/api/auth',
        rewritePrefix: '/auth',
    })

    // serviço de caronas
    fastify.register(proxy, {
        upstream: process.env.RIDE_SERVICE_URL,
        prefix: '/api/rides',
        rewritePrefix: '/rides',
    })

    return fastify
}
