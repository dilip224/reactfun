import mongoose from "mongoose";

const option={
    dbName:"MERN_stake"
}

const ConnectDB= async (URL)=>{
    try {
        mongoose.connect(URL,option).then(()=>{
            console.log("Database Connected")
        })
    } catch (error) {
        console.log(error)
        
    }



}
export default ConnectDB