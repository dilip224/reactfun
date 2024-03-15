import {Box,Toolbar,AppBar,Button,Typography} from "@mui/material"
import { NavLink } from "react-router-dom"
export const Nav = () => {
  return (
    <>
    <Box >
        <AppBar position="static"  color="primary">
            <Toolbar>
                <Typography variant="h5" component='div' sx={{flexGrow:5}} >Cheyan</Typography>
                <Button component={NavLink} sx={{color:"white" , textTransform:"none"} } style={({isActive})=>{return{background: isActive?"#0356AA":""}}} to='/' >Home</Button>
                <Button component={NavLink} sx={{color:"white" , textTransform:"none"} } style={({isActive})=>{return{background: isActive?"#0356AA":""}}} to='/contact' >Contact</Button>
                <Button component={NavLink} sx={{color:"white" , textTransform:"none"} } style={({isActive})=>{return{background: isActive?"#0356AA":""}}} to='/logreg' >Login/Register</Button>
            </Toolbar>
        </AppBar>
    </Box>
    </>
  )
}
