import User from "../models/User.js"

export const createUser = async (req, reply) => {
  try {
    if (!req.body.cpf || !req.body.username || !req.body.password || !req.body.email || !req.body.role) {
      return reply.status(400).send({ error: 'Dados obrigatórios faltando!' })
    }
    const user = await User.create(req.body)
    return reply.status(201).send(user)
  } catch (error) {
    return reply.status(500).send({ error: error.message })
  }
}

export const getUsers = async (req, reply) => {
  try {
    const users = await User.findAll()
    return reply.status(200).send(users)
  } catch (error) {
    return reply.status(500).send({ error: error.message })
  }
}

export const getUserByUsername = async (req, reply) => {
    try {
        const { username } = req.params
        const user = await User.findOne({ where: { username: username } })
        if (user) {
            return reply.status(200).send(user)
        }
        return reply.status(404).send({ error: 'Usuário não encontrado!' })
    } catch (error) {
        return reply.status(500).send({ error: error.message })
    }
}

export const updateUser = async (req, reply) => {
    try {
        const { id } = req.params
        const [updated] = await User.update(req.body, {
            where: { id: id }
        })
        if (updated) {
            const updatedUser = await User.findOne({ where: { id: id } })
            return reply.status(200).send(updatedUser)
        }
        return reply.status(404).send({ error: 'Usuário não encontrado!' })
    }
    catch (error) {
        return reply.status(500).send({ error: error.message })
    }
}

export const deleteUser = async (req, reply) => {
    try {
        const { id } = req.params
        const deleted = await User.destroy({ where: { id: id } })
        if (deleted) {
            return reply.status(204).send({ message: 'Usuário deletado com sucesso!' })
        }
        return reply.status(404).send({ error: 'Usuário não encontrado!' })
    } catch (error) {
        return reply.status(500).send({ error: error.message })
    }
}
