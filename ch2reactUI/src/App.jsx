import { useEffect, useState } from "react";
import { usePostAllUserDataMutation,useGetUserDataQuery } from "./services/userData";
import {
  Box,
  AppBar,
  Typography,
  TextField,
  Tabs,
  Tab,
  Card,
  Grid,
  Button,
  Checkbox,
  Toolbar,
  FormControl,
  FormGroup,
  FormLabel,
  FormControlLabel,
  IconButton,
  RadioGroup,
  Radio,
  Stack,
  Avatar
} from "@mui/material";

import TableBody from "@mui/material/TableBody";
import { styled } from "@mui/material/styles";
import TableRow from "@mui/material/TableRow";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import Table from "@mui/material/Table";
import Paper from "@mui/material/Paper";

// style mui
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
    fontSize:15

    

  },
 
  [`&.${tableCellClasses.body}`]: {
    fontSize: 15,
  },
}));

const Input = styled("input")({
  display: "none",
});
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));


function App() {
  const [postAllUserData, data1] = usePostAllUserDataMutation();
  const {data,isSuccess}=useGetUserDataQuery()

  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [checkbox, setcheckb] = useState([]);
  const [images, setphoto] = useState("");
  const [doc, setdoc] = useState("");
  const [getdata, setData] = useState("");
  

  // console.log(email);
  // console.log(password);
  useEffect(()=>{
    // console.log('hello')
    // console.log(isSuccess)
    if(isSuccess&&data){
      // console.log(data)
      // setData(data)
      data.data.map((data)=>{
        // console.log(data)
      })
    }
  },[data,isSuccess])


const CreateData=(email,gender,age,doc,pic)=>{
return ({email:email,gender:gender,age:age,doc:doc,photo:pic})
}

const row=[]
if(isSuccess){
  data.data.map((map)=>{
    const rowdata=CreateData(map.email,map.gender,map.age,map.doc,map.photo)
    row.push(rowdata)
  })
}

  const resetAll = () => {
    setGender("");
    setemail("");
    setPassword("");
    setcheckb([]);
    setdoc("");
    setphoto("");
    document.getElementById("myForm").reset();
  };

  const cbox = (e) => {
    const data = checkbox;
    data.push(e.target.value);
    setcheckb(data);
  };

  const handelS = async (e) => {
    e.preventDefault();
    // const daata = new FormData(e.currentTarget);
    const daata = new FormData();
    daata.append("email", email);
    daata.append("password", password);
    daata.append("images", images);
    daata.append("doc", doc);
    daata.append("age", checkbox);
    daata.append("gender", gender);
    if (email && password && images && gender && checkbox && doc) {
      await postAllUserData(daata).then((res) => {
        alert(`${res.msg}`);
        window.location.reload();
      });
    } else {
      alert("Please fill all fields!");
    }
  };
  //   }
  // };

  return (
    <>
      <Grid container spacing={2} sx={{ height: "90vh" }}>
        <Grid item lg={6} sm={7}>
          <Card sx={{ height: "100%", width: "100%" }}>
            <Box>
              <AppBar position="static">
                <Toolbar>
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{ flexGrow: 1, textAlign: "center" }}
                  >
                    Hello
                  </Typography>
                </Toolbar>
              </AppBar>
              <Box component="form" noValidate id="myForm" onSubmit={handelS}>
                <TextField
                  label="Email"
                  type="email"
                  id="email"
                  name="email"
                  fullWidth
                  margin="normal"
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                ></TextField>
                <TextField
                  label="Password"
                  type="password"
                  id="password"
                  name="password"
                  fullWidth
                  margin="normal"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                ></TextField>

                <FormControl fullWidth margin="normal">
                  <FormLabel id="gender_ratio">Gender </FormLabel>
                  <RadioGroup
                    aria-labelledby="gender_ratio"
                    name="genderRatio"
                    // value={gender}
                    row
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="female"
                      onChange={(e) => setGender(e.target.value)}
                    />
                    <FormControlLabel
                      label="male"
                      value="male"
                      control={<Radio />}
                      onChange={(e) => setGender(e.target.value)}
                    />
                    <FormControlLabel
                      label="other"
                      value="other"
                      control={<Radio />}
                      onChange={(e) => setGender(e.target.value)}
                    />
                  </RadioGroup>
                </FormControl>

                {/* checkbox */}
                <FormControl component="fieldset" fullWidth margin="normal">
                  <FormLabel id="age" component="legend">
                    Age (18 or older):
                  </FormLabel>
                  <FormGroup>
                    <FormControlLabel
                      value="adult"
                      control={<Checkbox color="primary" />}
                      label="Adult"
                      onClick={(e) => {
                        cbox(e);
                      }}
                    />
                    <FormControlLabel
                      value="teenager"
                      control={<Checkbox color="primary" />}
                      label="Teenager"
                      onClick={(e) => {
                        cbox(e);
                      }}
                    />
                  </FormGroup>
                </FormControl>
                {/* upload file */}
                <Stack>
                  <label htmlFor="profile_photo">
                    <Input
                      accept="image/*"
                      id="profile_photo"
                      type="file"
                      variant="contained"
                      onChange={(e) => {
                        setphoto(e.target.files[0]);
                      }}
                    ></Input>
                    <Button variant="contained" id="upload" component="span">
                      Upload Photo
                    </Button>
                  </label>
                  <label htmlFor="documents">
                    <Input
                      accept="doc/*"
                      id="documents"
                      type="file"
                      variant="contained"
                      onChange={(e) => {
                        setdoc(e.target.files[0]);
                        // console.log(e.target.files[0]);
                      }}
                    ></Input>
                    <Button variant="contained" id="docupload" component="span">
                      Upload Doc
                    </Button>
                  </label>
                  {/* <label htmlFor="downlad">
                    <IconButton aria-label="download" download={""} size="large" color="primary" href="/sampleform.pdf">Download</IconButton>
                  </label> */}
                </Stack>

                <Button type="submit" variant="contained" color="error">
                  Submit
                </Button>
              </Box>
            </Box>
          </Card>
        </Grid>

        {/* this is table */}
        <Grid item lg={6} sm={5}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Email</StyledTableCell>
                  <StyledTableCell align="center">Gender</StyledTableCell>
                  <StyledTableCell align="center">Age</StyledTableCell>
                  <StyledTableCell align="center">
                    Download
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    Avatar
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                  {
                  
                      row.map((row) => (
                        <StyledTableRow key={Math.random(100)*1000}>
                          <StyledTableCell component="th" scope="row">
                            {row.email}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            {row.gender}
                          </StyledTableCell>
                          <StyledTableCell align="center">{row.age}</StyledTableCell>
                          <StyledTableCell align="center">
                    <Button sx={{textDecorationLine:'underline'}} download={row.doc} href={row.doc} >File</Button>
                            
                            
                            </StyledTableCell>
                          <StyledTableCell align="right">
                            <Avatar sx={{ml:"30%",mt:0,mb:0,mr:"auto",height:'60px',width:"60px", border:'2px solid black'}} src={`http://localhost:3000/${row.photo}`}></Avatar>
                          </StyledTableCell>
                        </StyledTableRow>
                      ))
                  
                  }
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
