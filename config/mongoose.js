// require the library
const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://127.0.0.1/todo_list');

// aquire the connection
const db=mongoose.connection;

// error
db.on('error',console.error.bind(console,'error connecting to db'));
// if the connection is up and running print the message
db.once('open',function(){
    console.log('successfully connected to database');
});


