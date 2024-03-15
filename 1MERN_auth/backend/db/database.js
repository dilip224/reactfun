import { urlencoded } from 'express'
import mongoose from 'mongoose'
import modell from '../model/model.js'

const option={
    dbName:"mern_fullstack"
}

const connectDB=async(props)=>{
    try {
        await mongoose.connect(props,option).then(( )=>{
            console.log("databse connected ")
            // modell({})
        })
    } catch (error) {
        console.log(error)
    }
}


export default connectDB