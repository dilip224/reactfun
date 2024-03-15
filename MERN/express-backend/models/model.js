import mongoose from "mongoose";



const Schema=new mongoose.Schema({
    name:{type:String,required:true,trim:true},
    email:{type:String,required:true,trim:true},
    password:{type:String,required:true,trim:true},
    join:{type:Date,default:Date.now,required:true}

})

const  Moodel=mongoose.model("MERN_stack",Schema)



export default Moodel


