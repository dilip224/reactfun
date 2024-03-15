import { AppBar,Box,Toolbar,Typography,Button } from '@mui/material'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
    <Box sx={{flexGrow:1}}>
        <AppBar position="static" color="secondary">
            <Toolbar>
                <Typography variant='h5' component="div" sx={{flexGrow:1}}>
                    Cheyan dab
                </Typography>
                <Button component={NavLink} to="home"  sx={{color:"white", textTransform:'none'}} style={({isActive})=>{background:isActive?"#6d1b7b":""}}>Home </Button>
                <Button component={NavLink} to="home"  sx={{color:"white", textTransform:'none'}} style={({isActive})=>{background:isActive?"#6d1b7b":""}}>Home </Button>
                <Button component={NavLink} to="home"  sx={{color:"white", textTransform:'none'}} style={({isActive})=>{background:isActive?"#6d1b7b":""}}>Home </Button>
            </Toolbar>

        </AppBar>

    </Box>
    </>
  )
}
