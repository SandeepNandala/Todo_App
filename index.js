const express=require('express');
const app=express();
const port=8000;

app.use(express.urlencoded());
app.use('/',require('./routes'));//for routing

// const db = require('../config/mongoose');
// const Todo=require('../models/todoList');

app.set('view engine','ejs');//view engine setup
app.set('views','./views');//views folder
app.use(express.static('assets'))//for stastic files(css,js,images...etc)



app.listen(port,function(err){
    if(err)
    {
        console.log(`error in loading in port:${port}`);
        return;
    }

    console.log(`server is up and running on port:${port}`);
})
