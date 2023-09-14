import http from './ApiConfig';

class UserService {
    static getUserById() {
        try{
            console.log('requesting user');
            return http.get('api/users');
        }catch(error){
            console.error(error);
        }
    }

    static createUser(userInfo) {
        try {
            console.log('requisting to create user');
            console.log(userInfo)
            return http.post('api/users', userInfo);
        } catch (error) {
            console.error(error);
        }
    }

    static updateUser(userId, userInfo) {
        try {
            console.log('requesting to update user');
            return http.put(`api/users/${userId}`, userInfo);
        } catch (error) {
            console.error(error);
        }
    }

    static deleteUser(userId) {
        try {
            console.log('requesting to delete user');
            return http.delete(`api/users/${userId}`);
        } catch (error) {
            console.error(error)
        }
    }
};

export default UserService;