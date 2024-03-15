import modell from "../model/model.js"
import jwt from 'jsonwebtoken'


class Controller{

    static getALL=async(req,res,next)=>{
        try {
            const data =await modell.find()
        res.send(data)
        } catch (error) {
            console.log(error);
            
        }

    }
    static postregALL=async(req,res,next)=>{
        const data1=req.body
        const userdata=await  modell.findOne({email:data1.email})
        if(userdata){
            
            return res.status(409).json('Email already exists')
        }else {
            try {
                if(data1.name&&data1.email&&data1.password){
                    console.log(data1)
                    const final= await modell(data1)
                    final.save().then(()=>{
                        console.log("added")
                        const token=jwt.sign({userID:userdata._id},process.env.SECRET,{expiresIn:"30d"})
                        res.status(200).json({'status':'success','msg':"Data added successfully","token":token})
                        }).catch((err)=>console.log(err))
                    }
                
            } catch (error) {
                
                }
            }
        

    }
    static postlogALL=async(req,res,next)=>{
        const data1=req.body
        // var token = jwt.sign({ foo: 'bar' }, privateKey, { algorithm: 'RS256' });
        let data=await  modell.findOne({email:data1.email})
        // console.log(data)
        
        if(data!==null){
            const {email,password}=data
            const token=jwt.sign({userID:data._id},process.env.SECRET,{expiresIn:"30d"})
                        res.status(200).send({'status':'success','msg':"login successfully","token":token,"email":email,"password":password})
            // return res.status(409).json('Email already exists')
        }else {
            res.status(200).json({'status':'failed','msg':"login failed"})
        // if(data1.email&&data1.password){
        //     console.log(data1)
        //     // const final= await modell(data1)
        //     // final.save()
        // }
        }

    }

    static gputALL=async(req,res,next)=>{
        let data=req.body
        // console.log(data.email)
       try {
        await modell.findOne({email:data.email}).then((data)=>{
            // console.log(data)
            res.send(data)
        })
       } catch (error) {
        console.log(error)
        
       }

    }
    static putALL=async(req,res,next)=>{
        // console.log(req.body)
        await modell.findByIdAndUpdate(req.body.id,{password:req.body.password}).then((data)=>{
            console.log(data)
        })

    }
    static delALL=(req,res,next)=>{

    }
}
export default Controller