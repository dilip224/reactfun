import mongoose from "mongoose"


const Schemaa=new mongoose.Schema({
    name:{type:String,required:true,trim:true},
    email:{type:String,required:true,trim:true},
    password:{type:String,required:true,trim:true},
    join:{type:Date,default:Date.now()}

})


const modell=mongoose.model('mern-crud-api',Schemaa)


export default modell