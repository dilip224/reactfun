import { TextField,Button,Box,Alert,FormControlLabel,Checkbox } from '@mui/material'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGetPokemonByNameQuery, useRegDataMutation } from '../../../services/pokemon.jsx'

const Reg = () => {
  // const {data,error,isLoading}=useGetPokemonByNameQuery()
  const [postData,data1]=useRegDataMutation()
  // console.log(data1.isSuccess)
  const nevigate=useNavigate()
  
  const [err,setError]=useState({
    state:false,
    msg:"",
    type:""
  })

  const handelSubmit=async(e)=>{
    e.preventDefault()
    const rowdata=new FormData(e.currentTarget)
    const actualData={
      name:rowdata.get("name"),
      email:rowdata.get("email"),
      password:rowdata.get("password"),
      cpassword:rowdata.get("re_password"),
      check:rowdata.get("tc"),
    }
    // {
      //   error? console.log(error):
      //   isLoading? console.log("is loading"):
      //   data? console.log(data):""
      // }
      if(actualData.check){
        if(actualData.email&&actualData.password&&actualData.name&&actualData.cpassword&&actualData.check){
          if(actualData.password&&actualData.cpassword){
          await postData(actualData).then((data)=>{
            // console.log(data)
            setError({state:true,msg:`Registered Successfully`,type:"success"})
            setTimeout(()=>{nevigate("/")},500)
          }).catch((err)=>setError({state:true,msg:`${err.message}`,type:"danger"}))
          
          
          // console.log(actualData)
       
        }else{
        setError({msg:"password not match",type:"error",state:true})
  
        }
      }else{
        setError({msg:"Email or password not defined",type:"error",state:true})
  
      }
    }else{
      setError({msg:"Please check the Box",type:"error",state:true})

    }
    
  }

  return (
    <Box>
      <Box component='form' noValidate id='log_form' onSubmit={handelSubmit} sx={{ml:5,mr:5,mt:2}}>
      <TextField required label="User Name" id='name' name='name' fullWidth sx={{mb:1}}></TextField>
      <TextField required label="Email" id='email' type='email' name='email' fullWidth sx={{mb:1}}></TextField>
      <TextField required label="Password" type='password' id='password' name='password' fullWidth sx={{mb:1}}></TextField>
      <TextField required label="Confirm Password" type='password' id='re_password' name='re_password' sx={{mb:1}} fullWidth ></TextField>
      <FormControlLabel control={<Checkbox value='agree' color='primary' name='tc' id='tc' />} label="I agree to all the terms and condition."/>
      <Box >
        <Button type='submit' variant='contained' sx={{mt:2,mb:1}}>Login</Button>
      </Box>
        {err.state?<Alert sx={{mt:1}} severity={err.type}>{err.msg}</Alert>:""}
      </Box>
    </Box>
  )
}

export default Reg