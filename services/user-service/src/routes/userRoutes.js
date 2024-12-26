import { createUser, getUsers, getUserByUsername, updateUser, deleteUser } from '../controllers/userController.js'

export default (fastify) => {
    fastify.post('/users', createUser)
    fastify.get('/users', getUsers)
    fastify.get('/users/:username', getUserByUsername)
    fastify.put('/users/:id', updateUser)
    fastify.delete('/users/:id', deleteUser)
}
