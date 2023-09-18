import http from './ApiConfig';

class ListService {
    static async getListByUId(userId) {
        try{
            return http.get(`api/lists/${userId}`);
        }catch(err){
            console.error(err);
        }
    }

    static async getListById(listId) {
        try {
            return http.get(`api/lists/${listId}`);
        } catch (err) {
            console.error(err);
        }
    }
    static async createList(listInfo) {
        try {
            return http.post('api/lists/', listInfo);
        } catch (err) {
            console.error(err);
        }
    }
    static async deleteList(listId) {
        try {
            return http.delete(`api/lists/${listId}`);
        } catch (err) {
            console.error(err);
        }
    }
}

export default ListService;