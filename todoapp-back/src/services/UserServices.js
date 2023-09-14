const Users = require('../models/users'); 
const bcrypt = require('bcrypt');
const saltRounds = 10;

// Service
class UserService {

    static async getAllUsers(){
        try{
            const users = await Users.findAll();
            return users;
        }catch(err){
            console.error(err);
        }
    }
    static async getUserById (user_id) {
        try{
            const user = await Users.findByPk(user_id);
            return user;
        }catch(err){
            console.error(err);
        }
    }

    static async createUser (user_info) {
        console.log(user_info);
        const { password } = user_info;

        try{    
            const hashedPassword = await bcrypt.hash(password, saltRounds);
            user_info.password = hashedPassword;
            console.log(user_info);
            await Users.create(user_info);
        }catch(err){
            console.error(err);
        }
    } 

    static async updateUser (user_id, user_info) {
        try{
            await Users.update(user_info,{
                where:{user_id:user_id},
                returning: true,
            });
        }catch(err){
            console.error(err);
            throw err;
        }
    };

    static async deleteUser(user_id) {
        try{
            await Users.destroy({
                where: {
                    user_id: user_id,
                }
            })
        }catch(err){
            console.error(err);
        }
    };
}

module.exports = UserService;