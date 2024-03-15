import { Box,Tabs,Tab, Card,Grid } from "@mui/material"
import { useState } from "react"
import Log from "./log"
import Reg from "./reg"



const Panel = (props) => {
    const {children,value,index}= props
  return (
    <div role="panel" hidden={value!==index}>
        {
            value===index&&<Box>{children}</Box>
        }

    </div>
  )
}



const Logreg = () => {
    const [value,setValue]=useState(0)
    const handelc=(e,index)=>{
        setValue(index)

    }
  return (
    <>
    <Grid container sx={{height:"90vh"}}>
        <Grid item lg={7} sm={6} xs={0}>
            {
                // xs ?<h1 >hello</h1>:""
                <h1>hello</h1>
            }
        </Grid>
        <Grid item lg={5} sm={6} xs={12} >
            <Card sx={{width:"100%",height:"100%"}}>
                <Box >
                    <Box sx={{borderBottom:1,borderColor:"divider"}}>
                        <Tabs  value={value} onChange={handelc} >
                            <Tab label="Login" sx={{ textTransform:"none", flexGrow:1 , fontWeight:"bold"}}></Tab>
                            <Tab label="register" sx={{textTransform:"none", flexGrow:1 , fontWeight:"bold" }}></Tab>
                        </Tabs>
                    </Box>
                    <Panel value={value} index={0}>{<Log/>}</Panel>
                    <Panel value={value} index={1}>{<Reg/>}</Panel>
                </Box>
            </Card>

        </Grid>
    </Grid>
    </>
  )
}

export default Logreg