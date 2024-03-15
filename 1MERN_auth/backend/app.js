import express from 'express'
import dotenv from 'dotenv'
import router from './routes/routes.js'
import { join } from 'path'
import cors from 'cors'
import connectDB from './db/database.js'
dotenv.config()
const app= express()
app.use(cors())
const port= process.env.PORT||8000
const url= process.env.URL


connectDB(url)
app.use(express.json())
// app.use(express.urlencoded({extended:true}))
app.use("/", router)
app.use(express.static(join(process.cwd(),"public")))



app.listen(port,()=>{
    console.log(`server started at port:${port}`)
})

