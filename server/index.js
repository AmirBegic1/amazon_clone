//ovaj dio ima sve importe paketa 
const express = require('express');
const mongoose = require('mongoose');

//importovanje iz drugih fajlova js-a

const authRouter = require('./routes/auth');

//inicjalizacije
const PORT = 3000;

const app = express();
const DB = "mongodb+srv://amir:amir123@cluster0.dzyr1kw.mongodb.net/?retryWrites=true&w=majority";

//middleware
//CLIENT - SERVER- CLIENT 
app.use(authRouter);




//GET PUT POST DELETE UPDATE -> CRUD

//conections
mongoose.connect(DB).then(()=>{
    console.log('Connection successful');
}).catch((e)=>{
    console.log(e);
});


app.listen(PORT, ()=> {
    console.log('connected at port ' +PORT );
});
