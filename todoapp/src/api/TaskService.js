import http from './ApiConfig';

class TaskService {
    static async getTaskByUId(userId, date){
        try{
            return http.get(`api/tasks/${userId}/${date}`);
        }catch(error){
            console.error(error);
        }
    }

    static async getTaskById(taskId){
        try{
            return http.get(`api/tasks/${taskId}`);
        }catch(err){
            console.error(err);
        }
    }

    static async createTask(taskInfo) {
        try{
            return http.post('api/tasks', taskInfo);
        }catch(error){
            console.error(error);
        }
    }

    static async updateTask(taskId, taskInfo) {
        try{
            return http.put(`api/tasks/${taskId}`, taskInfo);
        }catch(error){
            console.error(error);
        }
    }

    static async deleteTask(taskId){
        try{
            return http.delete(`api/tasks/${taskId}`);
        }catch(error){
            console.error(error);
        }
    }
}

export default TaskService;