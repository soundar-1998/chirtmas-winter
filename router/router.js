const express= require('express');
//router middleware
const router=express.Router();
const signUpTemplateCopy=require('../Model/SignUpModel');


router.post("/signup",(request,response)=>{
    const sam= new signUpTemplateCopy({
        name:request.body.name,//fullname(frontEnd and form name=fullname)
        email:request.body.email,
        contact:request.body.contact,
        age:request.body.age,
        jobRole:request.body.jobRole
    })
    sam.save().then(data=>{
            response.json(data);
            console.log('data added successfully');
    }).catch(error=>{
response.json(error);
    })

    
})
module.exports=router;