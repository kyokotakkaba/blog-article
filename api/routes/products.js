const express = require('express');
const router = express.Router();

router.get('/', (req,res,next)=>{
    res.status(200).json({
        message:'get!'
    });
});

router.post('/', (req,res,next)=>{
    res.status(200).json({
        message:'post!'
    });
});

router.get('/:productId', (req,res,next)=>{
    const id = req.params.productId;
    if(id === 'perfect'){
        res.status(200).json({
            message: 'perffect!',
            id : id
        })
    }else{
        res.status(200).json({
            message:'not Prefect!',
            id : id
        })
    }
    
})

router.patch('/',(req,res,next)=>{
    res.status(200).json({
        message:'product Updated!'
    })
})


router.delete('/',(req,res,next)=>{
    res.status(200).json({
        message:'product Deleted!'
    })
})
module.exports=router;