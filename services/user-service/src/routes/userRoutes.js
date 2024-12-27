import { createUser, getUsers, getUserByUsername, updateUser, deleteUser } from '../controllers/userController.js'

export default (fastify) => {
    fastify.get('/health', async (request, reply) => {
        return reply.send({ status: 'ok' })
    })
    fastify.post('/', createUser)
    fastify.get('/', getUsers)
    fastify.get('/:username', getUserByUsername)
    fastify.put('/:id', updateUser)
    fastify.delete('/:id', deleteUser)
}
