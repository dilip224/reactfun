import { Box,Card,Button,Typography,CardContent,CardActionArea,CardMedia,CardActions } from '@mui/material'
import Pic from "../../assets/images/img1.png";
import { removetoken } from '../../services/localsession';
import { useNavigate } from "react-router-dom";
import Nav from '../nav';
import { useEffect, useState } from 'react';

const Dashboard = () => {

  const navigate=useNavigate()
    const handelClick=()=>{
      

      removetoken()
      setTimeout(()=>{
        
        navigate("/logreg")
        
    },500)

  }
  return (
    <Card sx={{ maxWidth: 345,position:"static", mt:5}}>
    <CardActionArea>
      <CardMedia
        component="img"
       
       
        image={Pic}
        alt="green iguana"
        sx={{borderRadius:"50%", width:"140px", height:"140px",ml:"auto",mr:"30%",mt:2}}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary"   > 
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" variant='contained'onClick={handelClick}>
        Logout
      </Button>
    </CardActions>
  </Card>
  )
}

export default Dashboard