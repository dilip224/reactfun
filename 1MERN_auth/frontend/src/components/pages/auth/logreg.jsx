import { Box,Card,Tabs,Tab,Grid } from '@mui/material'
import { useState } from 'react'
import Log from './log'
import Reg from './reg'
// import Nav from '../../nav'
import pic1 from '../../../assets/images/shop.png'
const Logreg = () => {
    const [value,setvalue]=useState(0)

    const Panel=(props)=>{
        const {value,index,children}=props
        return(
            <div hidden={index!==value}>
                {index===value&&<Box>{children}</Box>}

        </div>
        )
    }
'use strict'
    const handelChange=(e,index)=>{
        setvalue(index)
    }
  return (
    <>
            <Grid container sx={{height:"90vh"}}>
                <Grid item lg={8} sm={6} xm={0} 
                         sx={{
                            backgroundImage: `url(${pic1})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'fit',
                            backgroundPosition: 'center',
                            display: { xs: 'none', sm: 'block' }
                          }}
                
                >
            

                </Grid>
                <Grid item lg={4} sm={6} xm={12}>
                    <Card sx={{marginTop:1,height:'100%',width:"100%"}} > 
                        <Box>
                            <Box sx={{borderBottom:1,borderColor:"divider"}}>
                            <Tabs value={value} onChange={handelChange} >
                            <Tab sx={{fontWeight:'bold',textTransform:"none"}} label="Login"></Tab>
                            <Tab sx={{fontWeight:'bold',textTransform:"none"}} label="Register"></Tab>
                        </Tabs>
                            </Box>
                            <Panel value={value} index={0} ><Log/></Panel>
                            <Panel value={value} index={1} ><Reg/></Panel>
                        </Box>
                    </Card>
                </Grid>
            </Grid>
     
    </>
  )
}

export default Logreg