import { Box,TextField,Button,Alert,Card, Grid } from '@mui/material'



import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Forget_password = () => {
    const navigate=useNavigate()
    const [error,setError]=useState({
        state:false,
        msg:"",
        type:""
    })
    const handelForm=(e)=>{
        e.preventDefault()



        const row_data=new FormData(e.currentTarget)
        // console.log(row_data) 

        const actual_data={
            email:row_data.get("email")
        }
        console.log(actual_data.email)
        if(actual_data.email){
            document.getElementById("formbox").reset()
            setError({state:true,msg:"Send Successfully",type:"success"})
            setTimeout(() => {
                navigate("/")
            }, 500);
        }else{
            setError({state:true,msg:"user not found",type:"error"})

        }
    }

  return (
    <>
        <Grid container>
        <Grid item lg={7}>
            <Card>
            <Box component='form' id='formbox' onSubmit={handelForm}>
            <TextField label='Email' fullWidth name='email' id='email' type='email' margin='normal'></TextField>
            <Box>
                <Button type='submit' variant='contained' sx={{margin:2}}>Submit</Button>
            </Box>
            {error.state?(<Alert severity={error.type}>{error.msg}</Alert>):""}
        </Box>
            </Card>
        </Grid>
        </Grid>
    </>
  )
}

export default Forget_password