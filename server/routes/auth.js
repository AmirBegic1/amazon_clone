const express = require('express');
const User = require('../models/user');
const bcryptjs = require('bcryptjs');

const authRouter = express.Router();


//SIGN UP ROUTE 
authRouter.post('/api/signup', async (req, res)=>{
  try{
    const {name, email, password} = req.body;

    const existingUser =  await User.findOne({email});
    if(existingUser){
      return res.status(400).json({msg: "user with same email already existis!"});
    }
    const hashedPassword = await bcryptjs.hash(password, 8);
  
    let user = new User({
      email,
      password: hashedPassword,
      name,
    })
    user = await user.save();
    res.json(user);
  } catch(e){
    res.status(500).json({error: e.message});
  }
  
    //post data in database
    //return that data to user

});


module.exports = authRouter;