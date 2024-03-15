import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { pink, red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box,Grid,Button,Checkbox,Switch } from '@mui/material'
import pic from './public/images/ali.jpg'
import pic1 from './public/images/pic2.jpg'
import pic2 from './public/images/pic1.jpg'
// import pic from './public/images/ali.jpg'
import valine from './public/images/valine.png'
import Favorite from '@mui/icons-material/Favorite'
import FavoriteBorder  from '@mui/icons-material/FavoriteBorder'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.slowest,
  }),
  // width: theme.spacing(7) + 1,
  '&:hover': {
    transform: 'scale(1.1)',
  },
}));
// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.slowest,
//   }),
//   // width: theme.spacing(7) + 1,
//   '&:hover': {
//     transform: 'scale(1.1)',
//   },
// }));
// const useStyles = makeStyles((theme) => ({
//   container: {
//     backgroundImage: `url(${valine})`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     height: '100vh',
//   },
// }));
export default function RecipeReviewCard() {
  // const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  var i=0
  var j=0
  var bool=true
  const [count, setCount] = React.useState(0);
  const [boole, setBool] = React.useState(false);
  const handleCKClick = (e) => {
    const value=e.target.value
    console.log(value)
   if(value){
    const intervalId=setInterval(()=>{
      // console.log(i)
      if(i<10&&bool){
        i++
        setCount(i)
        console.log('+')

      }else{
      //  setBool(false)
       bool=false
       i--
        setCount(i)
        console.log('-')
        if(i==-10){
          // setBool(true)
          bool=true
          // i=0
        }
       
       
      }
j++
console.log(i)
if (j === 1000) {
  clearInterval(intervalId);
}
},80)
   }
};
      
const Android12Switch = styled(Switch)(({ theme }) => ({
  padding: 8,
  '& .MuiSwitch-track': {
    borderRadius: 22 / 2,
    '&::before, &::after': {
      content: '""',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      width: 16,
      height: 16,
    },
    '&::before': {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main),
      )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
      left: 12,
    },
    '&::after': {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main),
      )}" d="M19,13H5V11H19V13Z" /></svg>')`,
      right: 12,
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: 'none',
    width: 16,
    height: 16,
    margin: 2,
  },
}));

  return (
    <Grid container  sx={{backgroundImage: `url(${valine})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat:'no-repeat',
    minHeight:"100vh"}} >

    <Grid item lg={4} sm={4} xs={4} width='70%'>

      {
        boole?<Card  sx={{ Width: '60%',height:"79vh",ml:'20%',pl:'4%',mt:5,pt:3 ,boxShadow:"#264653 0px 0px 35px",backgroundColor:"#fefae0",transform:count?`rotate(${count}deg)`:"",transitionDuration:1000}}>
        <CardMedia
          component="img"
          // height="250px"
          // width="200px"
          src={pic1}
          alt="Paella dish"
          sx={{width :"95%",maxHeight:'67vh'}}
        />
        <CardContent>
          <Typography variant='h5'>April 05,2023</Typography>
        </CardContent>
        </Card>:""
      }
      
    </Grid>


    <Grid item lg={4} sm={4} xs={4}>

    <Box sx={{ mt:5,ml:10,width:"90%",justifyContent:"center"}}>
    <Card  sx={{ maxWidth:400,boxShadow:"#264653 0px 0px 35px"}}  >
      <CardHeader

        title="Specially For ❤️"
        subheader="Feb 14, 2024"
      />
      <CardMedia
        component="img"
        height="250"
        src={pic}
        alt="Paella dish"
        sx={{height :"65vh"}}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Valentine, a day of love and affection. Hearts flutter, roses bloom, and sweet whispers fill the air. 🌹❤️
        </Typography>
      </CardContent>
      <CardActions disableSpacing  >
        {/* <Button disableElevation disableFocusRipple disableRipple > */}
          {/* <IconButton aria-label="add to favorites"   >
          <FavoriteIcon  />
        </IconButton> */}
        <Checkbox value='checked'  sx={{
          color: pink[800],
          '&.Mui-checked': {
            color: pink[600],
          },
        }} icon={<FavoriteBorder />} checkedIcon={<Favorite />} onChange={(e)=>{setBool(true)}}  />
        {/* <Switch value='switch'  /> */}
      
      <FormGroup   >
        <FormControlLabel 
        control={<Android12Switch onChange={(e)=>{handleCKClick(e)}} />}
        // label="Android 12"
        />

      </FormGroup>



        {/* </Button> */}
        {/* <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>"My Dearest ❤️",</Typography>
          <Typography paragraph>
          On this special day, I want to express my love for you in every beat of my heart. You are my confidante, my partner in laughter, and my rock during storms. Your smile brightens my world, and your touch ignites a fire within me.
          </Typography>
          <Typography paragraph>
          Happy Valentine’s Day, my love! May our days be filled with shared dreams, cozy moments, and endless love. Let’s dance under the moonlight, whisper secrets, and create memories that will last a lifetime.
          </Typography>
          
          <Typography>
          With all my love, ❤️"
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </Box>

    </Grid>
    <Grid item lg={4} sm={4} xs={4} width='70%'>
      {
        boole?<Card  sx={{ Width: '60%',height:"79vh",mr:'20%',pl:'4%',mt:5,pt:3 ,boxShadow:"#264653 0px 0px 35px",backgroundColor:"#fefae0",transform:count?`rotate(${count}deg)`:"",transitionDuration:1000}}>
        <CardMedia
          component="img"
          // height="250px"
          // width="200px"
          src={pic2}
          alt="Paella dish"
          sx={{width :"95%",maxHeight:'67vh'}}
        />
        <CardContent>
          <Typography variant='h5'>March 30,2023</Typography>
        </CardContent>
        </Card>:""
      }
    </Grid>
    </Grid>
  );
}