const Tasks = require('../models/tasks');


class TaskService {
    static async getAllTask(){
        try{
            const tasks = await Tasks.findAll();
            return tasks
        }catch(err){
            console.error(err);
        }
    }

    static async getTasksByUId(user_id, date){
        try{
            const tasks = await Tasks.findAll({
                where:{
                    user_id: user_id,
                    date: date,
                }
            });
            return tasks;
        }catch(err){
            console.error(err);
        }
    }

    static async createTask(task_info){
        try{
            const newTask = await Tasks.create(task_info);
            return newTask;
        }catch(err){
            console.error(err);
        }
    }

    static async updateTask(task_id, task_info){
        try{
            const updatedTask = await Tasks.update(task_info, {
                where: {
                    task_id: task_id,
                }
            });
            return updatedTask;
        }catch(err){
            console.error(err);
        }
    }

    static async deleteTask(task_id){
        try {
            const deletedTask = Tasks.destroy(task_id, {
                where:{
                    task_id: task_id,
                }
            })
            return deletedTask;
        } catch (err) {
            console.error(err);
        }
    }

}

module.exports = TaskService;