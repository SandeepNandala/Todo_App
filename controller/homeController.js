const db = require('../config/mongoose');
const Todo=require('../models/todoList');

// home page controller
module.exports.home=function(req,res){

   Todo.find({},function(err,todoTask){
      if(err)
      {
         console.log("error in fetching data from database");
         return;
      }

      return res.render('home',{
         title:'TODO App',
         todo_list:todoTask
     });

   })
   
 };

//  adding the new todo task 

 module.exports.addtask=function(req,res){

   Todo.create({
      description:req.body.description,
      category:req.body.category,
      dueDate:req.body.dueDate,
   },function(err,newTodo){
      if(err)
      {
         console.log("error in adding task to database");
         return;
      }

      // console.log('********',newTodo);
      return res.redirect('back');
   })

 };

//  deleting the todo task

 module.exports.deleteTask=function(req,res){
   let id=req.query.id;
   Todo.findByIdAndDelete(id,function(err){
      if(err)
      {
         console.log("unable to delete todo",id);
         return;
      }

      return res.redirect('back');
   })
 };

