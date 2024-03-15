import mongoose from "mongoose";
const option={
    dbName:"mern_crud_api"
}

const ConnectDB=async(params)=>{
    try {
    await mongoose.connect(params,option)
        
    } catch (error) {
        console.log(error)
    }


}


export default ConnectDB