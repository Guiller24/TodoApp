import http from './ApiConfig';
import jwtDecode from 'jwt-decode';

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
        const token = localStorage.getItem('token');
        const userInfo = token ? jwtDecode(token) : null;
        return userInfo;
    }

}

export default Authenticate;