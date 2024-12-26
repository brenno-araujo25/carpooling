import User from "../models/User.js"

export const createUser = async (req, res) => {
  try {
    if (!req.body.cpf || !req.body.username || !req.body.password || !req.body.email || !req.body.role) {
      return res.status(400).json({ error: 'Informe todos os campos obrigatórios!' })
    }
    const user = await User.create(req.body)
    return res.status(201).json(user)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

export const getUsers = async (req, res) => {
  try {
    const users = await User.findAll()
    return res.status(200).json(users)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

export const getUserByUsername = async (req, res) => {
    try {
        const { username } = req.params
        const user = await User.findOne({ where: { username: username } })
        if (user) {
            return res.status(200).json(user)
        }
        return res.status(404).json({ error: 'Usuário não encontrado!' })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

export const updateUser = async (req, res) => {
    try {
        const { id } = req.params
        const [updated] = await User.update(req.body, {
            where: { id: id }
        })
        if (updated) {
            const updatedUser = await User.findOne({ where: { id: id } })
            return res.status(200).json(updatedUser)
        }
        return res.status(404).json({ error: 'Usuário não encontrado!' })
    }
    catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params
        const deleted = await User.destroy({ where: { id: id } })
        if (deleted) {
            return res.status(204).send()
        }
        return res.status(404).json({ error: 'Usuário não encontrado!' })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}
