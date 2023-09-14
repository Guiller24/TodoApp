const TaskService = require('../services/TaskService');

class TaskController {
    static async getAllTasks(req, res){
        try{
            const tasks = await TaskService.getAllTask();
            if(!tasks){
                return res.status(404).json({error: 'No task found'});
            }
            res.json(tasks);
        }catch(err){
            console.error(err);
            res.status(500).json({ error: err.message });
            throw err;
        }
    }

    static async getTaskByUId(req, res){
        const { user_id, date } = req.params;
        try{
            const tasks = await TaskService.getTasksByUId(user_id, date);
            if(!tasks){
                return res.status(404).json({message: 'There are no Task for this date'});
            }
            res.status(200).json(tasks);
        }catch(err){
            console.error(err);
        }
    }

    static async createTask(req, res) {
        const task_info = req.body;
        try{
            const newTask = await TaskService.createTask(task_info);
            res.status(201).json(newTask);
        }catch(err){
            console.error(err);
            res.status(500).json({error: err.message});
            throw err;
        }
    }

    static async updateTask(req, res) {
        const { task_id } = req.params;
        const task_info = req.body;
        try {
            const updatedTask = await TaskService.updateTask(task_id, task_info);
            res.status(200).json(updatedTask);
        } catch (err) {
            console.error(err);
            res.status(500).json({error: err.message});
            throw err;
        }
    }

    static async deleteTask(req, res) {
        const { task_id } = req.params;
        try{
            const deletedTask = await TaskService.deleteTask(task_id);
            res.status(204).json({message: `Task Deleted`});
        }catch(err){
            console.error(err);
            res.status(500).json({error: err.message});
            throw err;
        }
    }
}

module.exports = TaskController;