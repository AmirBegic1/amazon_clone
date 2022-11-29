const express = require('express');
const User = require('../models/user');

const authRouter = express.Router();

authRouter.post('/api/signup', async (req, res)=>{
    const {name, email, password} = req.body;

  const existingUser =  User.findOne({email});
  if(existingUser){
    return res.json({msg: "user with same email already existis!"});
  }

    //post data in database
    //return that data to user

});


module.exports = authRouter;