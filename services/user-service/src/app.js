import userRoutes from "./routes/userRoutes.js"
import fastify from "fastify"
import { config } from "./config/config.js"

const app = fastify({ logger: true })

app.register(userRoutes)

const start = async () => {
    try {
        const port = config.USER_SERVICE_PORT
        await app.listen({ 
            port,
            host: '0.0.0.0'
        })
        app.log.info(`Servidor rodando na porta ${port}`)
    } catch (err) {
        app.log.error(err)
        process.exit(1)
    }
}

start()
