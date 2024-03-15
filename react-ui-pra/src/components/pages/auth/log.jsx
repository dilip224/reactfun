import { Box,TextField,Button,Alert } from '@mui/material'
import { useNavigate,NavLink } from 'react-router-dom'
import { useState } from 'react'
const Log = () => {
  const [error,setError]=useState({
    state:false,
    msg:"",
    type:""
  })
  const nevigate=useNavigate()
  const handelClick = (e,index) => {
    e.preventDefault()
    console.log(e.currentTarget)
    const allData=new FormData(e.currentTarget)

    const actualData={
      email:allData.get("email"),
      pass:allData.get("password")
    }   
    console.log(actualData.email,actualData.pass) 

    if(actualData.email&&actualData.pass){
      document.getElementById("Form_control").reset()
      setError({state:true,msg:"Login Successfully",type:"success"})
      nevigate("/")

    }else{
      setError({state:true,msg:"invalid email or password",type:"error" })

    }
    
  }
  
  return (
    <>
    <Box component='form' sx={{mt:1}} noValidate id='Form_control' onSubmit={handelClick}>
      <TextField label='Email Address' required id='email' name='email' fullWidth margin='normal'></TextField>
      <TextField label='Password' required fullWidth type='password' id='password' name='password'></TextField>
      <Box >
        <Button margin='normal' sx={{mt:2,mb:2,px:5}} type='submit' variant='contained'>Login </Button>
      </Box>
      <NavLink to="/forgot" sx={{ml:2}}> Forgot password</NavLink>
      {error.state?(<Alert severity={error.type} >{error.msg}</Alert>):""}

    </Box>
    
    
    </>
  )
}

export default Log