import { useState } from 'react'
import { Grid,Card,Typography,Tabs, Tab, Box } from "@mui/material"

const Panel=(props)=>{
  const{value,index,children}=props
  return(
    <div role='panel' hidden={value!==index}>
      {
        value===index&&(<Box>{children}</Box>)
      }
    </div>
  )

}


const App=()=>{
  const[value,setvalue]=useState(0)
  const handelC=(e,index)=>{
    setvalue(index)

  }
  return(
    <>
    <Grid container sx={{height:'95vh'}}>
      <Grid item lg={6}>

      </Grid>
      <Grid item lg={6}>
        <Card sx={{height:"100%",width:"100%"}}>
          <Box >
            <Box sx={{borderBottom:1,borderColor:"divider"}}>
              <Tabs value={value} onChange={handelC}>
                <Tab label='home'></Tab>
                <Tab label='about'></Tab>
                <Tab label='Contact'></Tab>
                <Tab label='Register'></Tab>
              </Tabs>
            </Box>
              <Panel value={value} index={3}>reg</Panel>
              <Panel value={value} index={1}>log</Panel>
            </Box>
   

        </Card>
      </Grid>
    </Grid>
    
    </>
  )
}

export default App
