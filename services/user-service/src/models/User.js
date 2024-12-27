import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    cpf: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.ENUM('driver', 'passenger'),
        allowNull: false,
    },
    preferences: {
        type: DataTypes.JSON,
        allowNull: true,
    },
}, {
    tableName: 'users',
    timestamps: false,
});

// apenas usar o sync em ambiente de desenvolvimento
sequelize.sync()
    .then(() => console.log('Tabela de usuários criada!'))
    .catch(console.error);

export default User;
