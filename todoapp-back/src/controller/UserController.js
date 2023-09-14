const UserService = require('../services/UserServices');

class UserController {
    
    static async getAllUsers(req, res) {
        try {
            const users = await UserService.getAllUsers();
            if (!users) {
                return res.status(404).json({ error: 'No users found.' });
            }
            res.json(users);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: err.message });
        }
    }

    static async getUserById (req, res) {
        const { user_id } = req.params;
        try{
            console.log(`Fetching user with ID: ${user_id}`);
            const user = await UserService.getUserById(user_id);
            if(!user){
                return res.status(404).json({ error: `User with ID ${user_id} not found.` });
            }
            res.status(200).json(user);
        }catch(err){
            console.error(err);
            res.status(500).json({error: err.message});
            throw err;
        }

    }

    static async createUser (req, res) {
        const user_info = req.body;
        console.log(user_info);
        try{
            const newUser = await UserService.createUser(user_info);
            res.status(201).json(newUser);
        }catch(err){  
            console.error(err);
            res.status(500).json({error: err.message});
            throw err;
        }
    }

    static async updateUser(req, res) {
        const { user_id } = req.params;
        const user_info = req.body;
        try{
            const updatedUser = await UserService.updateUser(user_id, user_info);
            res.status(200).json(updatedUser);
        }catch(err){
            console.error(err);
            res.status(500).json({error: err.message});
            throw err;
        }
    }

    static async deleteUser(req, res) {
        const { user_id } = req.params;
        try{
            const deletedUser = await UserService.deleteUser(user_id);
            res.status(204).json({message: `User with id ${user_id} deleted.`});
        }catch(err){
            console.error(err);
            res.status(500).json({error: err.message});
            throw err;
        }
    }
}

module.exports = UserController;
