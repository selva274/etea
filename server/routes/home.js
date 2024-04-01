const express=require('express');
const Tea=require('../public/javascripts/image_arr');
const router=express.Router();

router.get('/',(req,res)=>[
    res.send(Tea)
]);

module.exports=router;