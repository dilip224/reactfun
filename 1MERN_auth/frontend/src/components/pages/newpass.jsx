import {Box,TextField,Button,Alert,Typography,Grid,Card} from '@mui/material'
import { useState } from 'react'
// import { useSelector } from 'react-redux'
import { useUpdateDataMutation } from '../../services/pokemon'
import { useParams } from 'react-router-dom'

const Changepass = () => {
  const id=useParams()
  // console.log(id.id)
  const [updateData,data]=useUpdateDataMutation()
  // const id = useSelector(state=> state.setid.id)
  // console.log('ID',id);
    const  [values, setValues] = useState({
        msg: '',
        type:"",
        state:false   

      })
    
    const handleSubmit = (event) =>{
        event.preventDefault()
        const rowdata=new FormData(event.currentTarget)
        const actualData={
            password:rowdata.get('password'),
            repassword:rowdata.get('repassword')
        }
        if(actualData.password&&actualData.repassword){
            if(actualData.password===actualData.repassword){
              const data={
                id:id.id,
                password:actualData.password
              }
              updateData(data)
            setValues({msg:"Changed Successfully",type:"success",state:true})
            document.getElementById("email_form").reset()
            }else{
            setValues({msg:"Password not match!",type:"error",state:true})

            }

        }else{
            setValues({msg:"Invalid Password",type:"error",state:true})

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
  <Grid item lg={3}>
  <Box sx={{height:"90px",width:"100%",mt:20}}>
  <Card >
  <Box > 
        <Typography component='div' variant='h5'  sx={{mt:4,textAlign:"center"}}>Create your new Password</Typography>
        <Box component='form' id="email_form" onSubmit={handleSubmit}>
        <TextField fullWidth label="New Password" sx={{mt:1,mb:1}}type='password' id='password' name='password'></TextField>
        <TextField fullWidth label="Confirm Password" type='password' id='repassword' name='repassword'></TextField>
        <Box>
        <Button  variant="contained" type="submit"  sx={{mt:1,mb:1}}>Change</Button>
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

export default Changepass