const AuthService = require('../services/AuthService');

class AuthController {

    static async signin (req, res) {
        const { email, password } = req.body;
        console.log(email, password);
        try{
            const user = await AuthService.authenticate(email, password);
            if (!user){
                res.status(401).json({error: 'Invalid Information'});
            }
            const token = AuthService.generateToken(user);
            console.log(token);
            res.status(201).json({ token });
        }catch(err){
            console.error(err);
            res.status(401).json({error: err.message});
        }
    };
    
};

module.exports = AuthController;