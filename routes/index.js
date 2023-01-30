const express = require('express');

const router = express.Router();
const homeController = require('../controller/homeController');

router.get('/', homeController.home); //routing to home page
router.post('/create-todo', homeController.addtask);//routing to create todo task
router.get('/delete-todo', homeController.deleteTask);//routing to delete todo 

// console.log('router loaded');
module.exports = router;