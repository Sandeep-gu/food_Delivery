const express= require('express');
const router = express.Router();
const User = require('../models/User');
const {body,validationResult} = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const jwtSecrete = 'dsfdg322gh4ddfgfg2gr5t433ge2r3t4f'



//createuser 
router.post('/createuser',
[
    body('email').isEmail(),
    body('password').isLength({min:5}),
    body('name').isLength({min:5})
],



async(req,res)=>{
    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({errors:error.array()});
    }
    const salt = await bcrypt.genSalt(10);
    const set_password = await bcrypt.hash(req.body.password,salt);

    try{
        await User.create({
            name:req.body.name,
            password:set_password,
            email:req.body.email,
            
            location:req.body.location,
        })
        res.json({success:true})
    }catch(err){
        console.log(err);
        res.json({success:false})
    }
});

//login user data
router.post(
    '/loginuser',
    [
      body('email').isEmail(),
      body('password').isLength({ min: 5 }),
    ],
    async (req, res) => {
      const errors = validationResult(req);
  
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      try {
        const email = req.body.email;
        const data = await User.findOne({ email });
  
        if (!data) {
          res.json({ success: false });
        } else {
          // Check if the password matches
          const pwdCompare = await bcrypt.compare(req.body.password,data.password);
          console.log(pwdCompare);
          if (!pwdCompare) {
            return res.status(400).json({error:"Try with correct credentials"});
          } else {
            const id_data = {
                user:{
                    id:data.id
                }
            }
            const authToken = jwt.sign(id_data,jwtSecrete)
            
            res.json({ success: true,authToken });
          }
        }
      } catch (err) {
        res.json({ success: false,err:err.message });
      }
    }
  );
  
  
  
  
  
  
  
module.exports = router;
