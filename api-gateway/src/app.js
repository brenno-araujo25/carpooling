import { createGateway } from './gateway.js'
import { config } from './config/config.js'

// inicia o servidor
const start = async () => {
    const gateway = createGateway()

    try {
        const port = config.GATEWAY_PORT
        gateway.listen({
            port,
            host: '0.0.0.0'
        })
        console.log(`API Gateway rodando na porta ${port}`)
    } catch (error) {
        console.error(`Erro ao iniciar o servidor: ${error}`)
        gateway.log.error(error)
        process.exit(1)
    }
}

start()
