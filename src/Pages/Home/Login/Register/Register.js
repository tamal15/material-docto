// import { Container } from '@mui/material';
import React,{useState} from 'react';
import { Button, Container, Grid,  Typography , CircularProgress, Alert} from '@mui/material';

import login from '../../../../images/login.png'
import TextField from '@mui/material/TextField'
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';


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
        registerUser(loginData.email, loginData.password,loginData.name,history)
        e.preventDefault()
    }
    return (
      <Container>
            <Grid container spacing={2}>
  <Grid sx={{mt:8}} item xs={12} md={6}>

  <Typography variant="body1" gutterBottom>
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
           style={{width:'70%'}}
            src={login} alt="" />
  </Grid>
 
</Grid>
      </Container>
    );
};

export default Register;