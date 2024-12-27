import Fastify from 'fastify'
import proxy from '@fastify/http-proxy'
import cors from '@fastify/cors'
import { config } from './config/config.js'

export function createGateway() {
    const fastify = Fastify()

    // permite requisições de qualquer origem
    fastify.register(cors)

    const { USER_SERVICE_URL, AUTH_SERVICE_URL, RIDE_SERVICE_URL } = config

    // serviço de usuários
    fastify.register(proxy, {
        upstream: USER_SERVICE_URL,
        prefix: '/api/users',
        rewritePrefix: '/',
    })

    // serviço de autenticação
    fastify.register(proxy, {
        upstream: AUTH_SERVICE_URL,
        prefix: '/api/auth',
        rewritePrefix: '/',
    })

    // serviço de caronas
    fastify.register(proxy, {
        upstream: RIDE_SERVICE_URL,
        prefix: '/api/rides',
        rewritePrefix: '/',
    })

    // rota de saúde
    fastify.get('/health', async (request, reply) => {
        return { status: 'ok' }
    })
    return fastify
}
