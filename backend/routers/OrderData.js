const express = require('express');
const router = express.Router();
const OrderType = require('../models/OrderType');

router.post('/orderData',async(req,res)=>{
    let data = req.body.order_data;
    console.log("email is "+data);
    await data.splice(0,0,{Order_date:req.body.order_date})

    //if email not existing in db the create :else:InsertMany()
    let eId = await OrderType.findOne({'email':req.body.email})
    console.log(eId)
    if(eId === null){
        try{
            await OrderType.create({'email':req.body.email, 
            order_data:[data]
        }).then(()=>{
            res.json({success:true})
        })
        }catch(err){
            console.log(err.message)
            res.status(400).send(err.message);
        }
    }
    else{
        try{
            await OrderType.findOneAndUpdate({email:req.body.email},
                {$push:{order_data:data}}).then(()=>{
                    res.json({success:true})
                })
        }catch(err){
            res.send("Server Error",err.message);
        }
    }
})

router.post('/myorderData',async (req,res)=>{
    try{
        let myData = await OrderType.findOne({'email':req.body.email});
        res.json({orderData:myData})

    }
    catch(err){
        res.send("Server Error",err.message);
    }
})
module.exports =router;