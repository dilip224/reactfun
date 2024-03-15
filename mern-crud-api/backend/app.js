import express from "express"
import dotenv from "dotenv"
import router from "./routes/routes.js"
import {join} from 'path'
dotenv.config()
const app=express()

const port=process.env.PORT || 8000
const url= process.env.URL


app.use('/',router)

app.set(express.urlencoded({extended:true}))
app.set(express.json())
app.use(express.static(join(process.cwd(),'public')))


app.listen(port,()=>{
    console.log(`server started at port:${port}`)
})