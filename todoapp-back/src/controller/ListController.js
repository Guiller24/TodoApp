const ListService = require('../services/ListService');

class ListController {
    static async getAllListByUid(req, res){
        const { user_id } = req.params
        try{
           const lists = await ListService.getAllListByUId(user_id);
           if(!lists){
                res.status(404).json({error: "No lists found"})
           }
           res.json(lists);
        }catch(err){
            console.error(err);
            res.status(500).json({error: err.message})
            throw err;
        }
    }

    static async getListById(req, res){
        const { list_id } = req.params;
        try{
           const list = await ListService.getListById(list_id);
            if(!list){
                res.status(404).json({error: "No lists found"})
            }
            res.json(list);
        }catch(err){
            console.error(err);
            res.status(500).json({error: err.message})
            throw err;
        }
    }

    static async createList(req, res){
        const list_info = req.body;
        try{
            const newList = await ListService.createList(list_info);
            console.log(newList)
            res.json(newList);
        }catch(err){
            console.error(err);
            res.status(500).json({error: err.message})
            throw err;
        }
    }

    static async deleteList(req, res){
        const { list_id } = req.params;
        try{
            const deletedList = await ListService.deleteList(list_id);
            res.status(204).json({message: 'Task Deleted'});
        }catch(err){
            console.error(err);
            res.status(500).json({error: err.message})
            throw err;
        }
    }
}

module.exports = ListController;