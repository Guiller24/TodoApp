const Lists = require('../models/lists');

class ListService {
    static async getAllListByUId(user_id){
        try{
            const lists = await Lists.findAll({
                where: {
                    user_id: user_id
                }
            });
            return lists; 
        }catch(err){
            console.error(err);
        }
    }

    static async getListById(list_id){
        try{
            const list = await Lists.findByPk(list_id);
            return list || null;
        }catch(err){
            console.error(err);
        }
    }

    static async createList(list_info){
        try{
            const newList = await Lists.create(list_info);
            return newList;
        }catch(err){
            console.error(err);
        }
    }

    static async deleteList(list_id){
        try{
            const deletedList = await Lists.destroy(list_id);
            return deletedList;
        }catch(err){
            console.error(err);
        }
    }
}

module.exports = ListService;