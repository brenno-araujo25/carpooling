import userRoutes from "./routes/userRoutes.js"
import fastify from "fastify"
import { config } from "./config/config.js"

const app = fastify({ logger: true })

app.register(userRoutes)

const start = async () => {
    try {
        await app.listen(config.USER_SERVICE_PORT)
        app.log.info(`servidor rodando na porta ${app.server.address().port}`)
    } catch (err) {
        app.log.error(err)
        process.exit(1)
    }
}

start()
