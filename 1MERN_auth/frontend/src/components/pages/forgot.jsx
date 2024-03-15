import {Box,TextField,Button,Alert,Typography,Grid,Card} from '@mui/material'
import { useState } from 'react'
import { useFindByEmailMutation } from '../../services/pokemon'
import { useNavigate } from 'react-router-dom'
import { incrementByAmount } from '../../components/features/counter/CounterSlice.js'
import { useSelector,useDispatch } from 'react-redux'

const Forgot = () => {
  const neviigate =useNavigate()
  const dispatch=useDispatch()
  const [findEmail,data]=useFindByEmailMutation()
    const  [values, setValues] = useState({
        msg: '',
        type:"",
        state:false   

      })
    
    const handleSubmit = async (event) =>{
        event.preventDefault()
        const rowdata=new FormData(event.currentTarget)
        const actualData={
            email:rowdata.get('email')
        }
        if(actualData.email){
          await findEmail(actualData.email).then((data)=>{
            // !data?.error    The ! (logical NOT) operator negates the result. So, if data?.error is truthy (i.e., error exists), !data?.error will be false. If data?.error is falsy (i.e., error doesn’t exist or data is null/undefined), !data?.error will be true.
            if(data.data){
              // console.log(data.data)
              if(data.data.email===actualData.email){
                setValues({msg:"Send Successfully",type:"success",state:true})
                document.getElementById("email_form").reset()
                dispatch(incrementByAmount(data.data._id))
                setTimeout(()=>{
                  neviigate(`/change/${data.data._id}`)
                },500)
              }

            }
              // if(!data){
              //   console.log("error")
              // }
          })


        }else{
            setValues({msg:"Invalid email",type:"error",state:true})

        }
        } 
        
  return (
    <>
   <Grid
  container
  spacing={0}
  direction="row"
//   alignItems="center"
  justifyContent="center"
  sx={{ minHeight: '100vh' }}
>
  <Grid item lg={3} sm={5} >
  <Box  sx={{width:"100%",mt:20}}> 
        <Card sx={{height:"100%"}}>
            <Box>
            <Typography component='div' variant='h5'  sx={{mt:4,mb:1,textAlign:"center"}}>Find  your account</Typography>
        <Box component='form' id="email_form" onSubmit={handleSubmit}>
        <TextField fullWidth label="Enter your email" type='email' id='email' name='email'></TextField>
        <Box>
        <Button  variant="contained" type="submit"  sx={{mt:1,mb:1}}>Submit</Button>
        </Box>
        {values.state?(<Alert severity={values.type}>{values.msg}</Alert>):""}
        </Box>
            </Box>
        </Card>
    </Box>
  </Grid>
</Grid>
    </>
  )
}

export default Forgot