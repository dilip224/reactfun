import { TextField,Button,Box,Alert,Typography } from '@mui/material'
import { useState } from 'react'
import { NavLink,useNavigate } from 'react-router-dom'
import { useLogDataMutation } from '../../../services/pokemon.jsx'
import { settoken } from '../../../services/localsession.jsx'
const Log = () => {
  const [logRTK,restData]=useLogDataMutation()
  const nevigate=useNavigate()
  const [error,setError]=useState({
    state:false,
    msg:"",
    type:""
  })
  const handelSubmit=async(e)=>{
    e.preventDefault()
    const rowdata=new FormData(e.currentTarget)
    const actualData={
      email:rowdata.get("email"),
      password:rowdata.get("password")
    }
    
    if(actualData.email&&actualData.password){
      // console.log(restData.data)
      document.getElementById("log_form").reset()
      await logRTK(actualData).then((data)=>{
        console.log(data.data.status)
        try {
          // console.log(data.data.email)
          if(data.data.email===actualData.email&&data.data.password===actualData.password){
            settoken(data.data.token)
            // localStorage.setItem('token', data.data.token)
            setError({msg:"login successfully",type:"success",state:true})
            setTimeout(()=>{
              nevigate('/dashboard')
            },500)
          }else{
            setError({msg:"email or password not match",type:"error",state:true})
          }
        } catch (error) {
          setError({msg:"User is not reigster",type:"error",state:true})
          
        }

       
      })
    }else{
      

    }
  }
  return (
    <>
    <Box>
      <Typography component='div' variant='h5' sx={{textAlign:"center",mt:2}}>Login</Typography>
      <Box component='form' noValidate id='log_form' onSubmit={handelSubmit} sx={{ml:5,mr:5}}>
      <TextField required type='email' label="Email" id='email' name='email' fullWidth margin='normal'></TextField>
      <TextField required type='password' label="Password" id='password' name='password' fullWidth ></TextField>
      <Box >
        <Button type='submit' variant='contained' sx={{mt:2,mb:1}}>Login</Button>
      </Box>
        <NavLink to='/forgot' >Forgot password</NavLink>
        {error.state?<Alert sx={{mt:1}} severity={error.type}>{error.msg}</Alert>:""}
      </Box>
    </Box>
    </>
  )
}

export default Log