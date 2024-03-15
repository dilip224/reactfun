import express from "express"
import { router } from "./routes/routes.js"
import dotenv from 'dotenv'
import ConnectDB from "./db/database.js"
import cors from "cors"
dotenv.config()
const app=express()
app.use(cors())
const URL=process.env.url
const port=process.env.PORT || 8000
ConnectDB(URL)



app.use('/',router)
app.use(express.urlencoded({extended:true}))
app.use(express.json())
// app.set("views",'./views')
// app.set("view engine",'ejs')



app.listen(port,()=>{
    console.log(`Server connected at port:${port}`)
})
