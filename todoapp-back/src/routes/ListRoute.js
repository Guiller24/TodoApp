const express = require('express');
const router = express.Router();
const ListController = require('../controller/ListController');

router.get('/lists/:user_id', ListController.getAllListByUid);
router.get('/lists/:list_id', ListController.getListById);
router.post('/lists', ListController.createList);
router.delete('/lists/:list_id', ListController.deleteList);

module.exports = router;