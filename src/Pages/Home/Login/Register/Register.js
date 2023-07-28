// import { Container } from '@mui/material';
import React,{useState} from 'react';
import { Button, Container, Grid,  Typography , CircularProgress, Alert} from '@mui/material';

import login from '../../../../images/login.png'
import TextField from '@mui/material/TextField'
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import Header from '../../Header/Header';
import Footer from '../../../Shared/Footer/Footer';


const Register = () => {
    
    const {registerUser,isLoading,user,authError}=useAuth()
    const [loginData, setLoginData]=useState({})
    const history =useHistory()
    const handleonBlur=e=>{
        const field=e.target.name;
        const value=e.target.value;
        const newLoginData={...loginData}
        newLoginData[field]=value;
        console.log(newLoginData)
        setLoginData(newLoginData)
    }

    const handleSubmit=e=>{
        if(loginData.password !== loginData.password2){
            alert('password did not matched')
            return;
        }
        registerUser(loginData.email, loginData.password,loginData.name,loginData.role,history)
        e.preventDefault()
    }
    return (
     <div>
        <Header></Header>

        <Container>
            <Grid container spacing={2}>
  <Grid sx={{mt:8,background:"honeydew"}} item xs={12} md={6}>

  <Typography style={{fontWeight:"700",fontSize:"28px"}} variant="body1" gutterBottom>
         Register
      </Typography>

     {!isLoading && <form onSubmit={handleSubmit}>
      <TextField 
      id="standard-basic" 
      sx={{width:'75%',m:1}}
      label="Your Name" 
      type="Name"
      name="name"
      onBlur={handleonBlur}
      variant="standard" />
      <TextField 
      id="standard-basic" 
      sx={{width:'75%',m:1}}
      label="Your Email" 
      type="email"
      name="email"
      onBlur={handleonBlur}
      variant="standard" />

      <TextField 
      id="standard-basic" 
      sx={{width:'75%',m:1}}
      label="password" 
      type="password"
      onBlur={handleonBlur}
      name="password"
      variant="standard" />

      <TextField 
      id="standard-basic" 
      sx={{width:'75%',m:1}}
      label="ReType Your Password" 
      type="password"
      onBlur={handleonBlur}
      name="password2"
      variant="standard" />

      <TextField 
      id="standard-basic" 
      sx={{width:'75%',m:1}}
      label="user/doctor/hospital" 
      type="text"
      onBlur={handleonBlur}
      name="role"
      variant="standard" />



      
     
      <Button type="submit"  sx={{width:'75%',m:1}} variant="contained">Register</Button>

      <NavLink style={{textDecoration:"none"}} to='/login'>
          <Button variant="text">Already Register? please Login</Button>
      </NavLink>
     {/* <Button variant="contained"  sx={{m:1}} style={{backgroundColor:"#5CE7ED"}}>Submit</Button> */}
      </form> }

      {isLoading && <CircularProgress />}
      {user?.email && 
      <Alert severity="success">This is a success alert — check it out!</Alert>
      }
      {
          authError && 
          <Alert severity="error">{authError}</Alert>
      }
   
  </Grid>
  <Grid item xs={12} md={6}>
  <img
           style={{width:'80%'}}
            src="https://i.ibb.co/3rsn1Bz/sign.png" alt="" />
  </Grid>
 
</Grid>
      </Container>

        <Footer></Footer>
     </div>
    );
};

export default Register;