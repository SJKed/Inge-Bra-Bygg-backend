const { DataTypes, Model } = require('sequelize');

class Users extends Model { }

module.exports = database => {
    Users.init({
        userId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userPassword: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userEmail: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userRole: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        sequelize: database,
        modelName: 'User',
        createdAt: false,
        updatedAt: false
    });
    return Users;
}    
