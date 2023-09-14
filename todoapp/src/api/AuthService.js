import http from './ApiConfig';

class Authenticate {
    static async authUser(email, password){
        try {
            const response = await http.post('api/users/login', { email, password });
            const token = response.data.token;
            return token;
        } catch (error) {
            console.error("Authentication Error: ", error);
            throw error;
        }
    }

    static getToken(){
        return localStorage.getItem('token');
    }
}

export default Authenticate;