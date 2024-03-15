import { Box,Toolbar,AppBar,Button,Typography } from '@mui/material'


import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { gettoken } from '../services/localsession'

const Nav = () => {

  // const [valuse,setState]= useState({
  //   'bool':true
  //  })
  //  if(valuse.bool){
  //   console.log("state")
  //   setState({bool:false})
  //  }
// window.location.reload(false);

  const token=gettoken("token")
  const handelChange=()=>{
    console.log(1)

  }

  
  console.log(token)
  
  return (
    <>
        <Box sx={{margin:0,padding:0}} onChange={handelChange} >
            <AppBar position='static'  >
                <Toolbar>
                 
                    <Typography to="/" sx={{flexGrow:1}} component={"div"} variant='h5'>Cheyan</Typography>
                    <Button component={NavLink}  key='1' sx={{color:'white',textTransform:"none"}} style={({isActive})=>{return{background: isActive ? "#3C8DDE" :""}}} to="/contact" >Contact</Button>
                    <Button component={NavLink}  key='2' sx={{color:'white',textTransform:"none"}} style={({isActive})=>{return{background: isActive ? "#3C8DDE" :""}}} to="/" >Home</Button>
               {
                    token? (
                      <Button  component={NavLink} key='3' sx={{color:'white',textTransform:"none"}} style={({isActive})=>{return{background: isActive ? "#3C8DDE" :""}}} to="/dashboard" >Dashboard</Button>
                    ):<Button component={NavLink} sx={{color:'white',textTransform:"none"}} style={({isActive})=>{return{background: isActive ? "#3C8DDE" :""}}} to="/logreg" >Login/Register</Button>}
                   

                </Toolbar>
            </AppBar>
        </Box>
    </>
  )
}
export default Nav