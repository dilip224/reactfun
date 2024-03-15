import { Box,TextField,Button,Alert } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Reg = () => {
  const nevigate=useNavigate()
  const [error,setError]=useState({
    state:false,
    msg:"",
    type:""
  })
  const handelForm=(e)=>{
    e.preventDefault()
    const regData=new FormData(e.currentTarget)
    const actualdata={
      name:regData.get('name'),
      email:regData.get('email'),
      password:regData.get('password'),
      re_password:regData.get('re_password'),
    }
    if(actualdata.name&&actualdata.email&&actualdata.password&&actualdata.re_password){

      if(actualdata.password===actualdata.re_password){
        document.getElementById("form_C").reset()
        setError({state:true,msg:"Successfully created",type:"success"})
        console.log(actualdata)
        nevigate("/")


      }else{
        setError({state:true,msg:"password not match",type:"error"})

      }
    }else{
      setError({state:true,msg:"Invalid Form",type:"error"})

    }
  }
  return (
    <>
      <Box sx={{mt:1}} component='form' id='form_C' onSubmit={handelForm}>
        <TextField  label="Name" id='name' name='name' required fullWidth></TextField>
        <TextField  sx={{mt:1}} label='Email' id='email' type='email' required fullWidth name='email' ></TextField>
        <TextField sx={{mt:1}} label="Password" type='password' id='password' required fullWidth name='password'></TextField>
        <TextField sx={{mt:1}} label="Confirm Password" type='password' id='re_password' required fullWidth name='re_password'></TextField>
        <Box>
          <Button type='submit' sx={{mt:2,mb:2,ml:2}} variant='contained'>Create</Button>
        </Box>
          { error.state? (<Alert severity={error.type} >{error.msg} </Alert>):"" }
      </Box>
    </>
  )
}

export default Reg