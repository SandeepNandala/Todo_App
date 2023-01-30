const mongoose = require('mongoose');

//  we are creating the schema for our todolist

const todoSchema = new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    dueDate:{
        type:String,
        required:true
    },
});


const Todo = mongoose.model('Todo',todoSchema);

module.exports=Todo;