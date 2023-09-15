const Tasks = require('../models/tasks');
const { Op } = require('sequelize');

class TaskService {
    static async getAllTask(){
        try{
            const tasks = await Tasks.findAll();
            return tasks
        }catch(err){
            console.error(err);
        }
    }

    static async getTaskById(task_id){
        console.log(task_id)
        try{
            const task = await Tasks.findByPk(task_id);
            return task || null;
        }catch(err){
            console.error(err);
        }
    }

    static async getTasksByUId(user_id, date = null){
        const dates = new Date();
        dates.setUTCHours(0, 0, 0, 0);
        const today = dates.toISOString();
        try{
            const tasks = await Tasks.findAll({
                where: {
                    user_id: user_id,
                    due_date: {
                        [Op.between]: [new Date(today), new Date(date)],
                    },
                },
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