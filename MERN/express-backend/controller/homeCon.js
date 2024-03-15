import Moodel from "../models/model.js"


const homeC=async(req,res,next)=>{
    const data=await Moodel.find()
    res.send(data)

}
export default homeC


