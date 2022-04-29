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
            type: DataTypes.ENUM('admin', 'client', 'worker'),
            allowNull: false
        }
    }, {
        sequelize: database,
        modelName: 'User',
        createdAt: false,
        updatedAt: false
    });
    
    Users.authenticate = async (email, password) => {
        const user = await Users.findOne({ where: { userEmail: email } });
        if (!user) { throw new Error('User not found'); }
        if (user.userPassword == password) {
            const payload = {
                userId: user.userId,
                userName: user.userName,
                userEmail: user.userEmail,
                userRole: user.userRole
            }
            return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
        } else {
            throw new Error('Password is incorrect');
        }
    }
    
}

