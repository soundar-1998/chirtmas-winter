const express =require('express');
const app=express();
const mongoose=require('mongoose');
const cors= require('cors');
const routerurl=require('./router/router')
app.use(express.json());
app.use(cors())
app.use("/app",routerurl);
//final25 is a database name
if(mongoose.connect('mongodb+srv://soundar123:soundar123@cluster0.17hrs.mongodb.net/Register-form?retryWrites=true&w=majority&appName=Cluster0'))

{
    console.log('database is connected ');

}   


app.listen(4000,()=>{
    console.log('server is running on port  4000');
})