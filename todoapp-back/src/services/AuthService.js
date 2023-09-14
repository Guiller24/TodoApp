const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Users = require('../models/users');



class AuthService {
    static async authenticate (email, password){
        try{
            const userInstance = await Users.findOne({
                where: { email }
            });
            
            if(!userInstance){
                throw new Error('User not Found');
            }
            
            const isPasswordCorrect = await bcrypt.compare(password, userInstance.password);
            if(!isPasswordCorrect){
                throw new Error('Invalid Password');
            }
            const user = userInstance.dataValues;
            return user;
        }catch(err){
            console.error(err);
            throw err;
        }
    }

    static generateToken (user) {
        const sKey = 'a1b2c3d4e5f6g7';
        return jwt.sign({
            user_id: user.user_id,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email
        }, sKey, { expiresIn: '3h' }, );
    }
}

module.exports = AuthService;