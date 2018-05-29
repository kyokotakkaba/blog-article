const express = require('express');
const router = express.Router();

router.get('/', (req,res,next)=>{
    res.status(200).json({
        message:'get Order!'
    });
});

router.post('/', (req,res,next)=>{
    res.status(201).json({
        message:'post Order!'
    });
});

router.get('/:orderId', (req,res,next)=>{ 
    if(id === 'perfect'){
        res.status(200).json({
            message: 'get Order',
            orderId : req.params.orderId
        })
    }else{
        res.status(200).json({
            message:'not Prefect!',
            orderId : req.params.orderId
        })
    }
})

router.delete('/:orderId',(req,res,next)=>{
    res.status(200).json({
        message:'order was deleted',
        orderId : req.param.orderId
    })
})

module.exports=router;