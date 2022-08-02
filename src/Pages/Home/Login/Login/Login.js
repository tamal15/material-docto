import { Alert, Button, CircularProgress, Container, Grid,  Typography } from '@mui/material';
import React, { useState } from 'react';
import login from '../../../../images/login.png'
import TextField from '@mui/material/TextField'
import { NavLink, useHistory,useLocation} from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';

const Login = () => {
    const {registerUser,user,isLoading,authError,loginUser,signInGoogle}=useAuth()
   const [loginData,setLoginData]=useState({})
   const history=useHistory()
   const location=useLocation()
    const handleOnChange=e=>{
        const field=e.target.name;
        const value=e.target.value
        console.log(field,value)
        const newLoginData={...loginData}
        newLoginData[field]=value;
        setLoginData(newLoginData)
    }

    const handleSubmit=e=>{
       alert('submit')
       loginUser(loginData.email, loginData.password,location,history)
        e.preventDefault()
    }

    const handleGoogle=()=>{
        signInGoogle(history,location)
    }
    return (
      
           <Container>
                 <Grid container spacing={2}>
  <Grid sx={{mt:8}} item xs={12} md={6}>

  <Typography variant="body1" gutterBottom>
         Login
      </Typography>

      <form onSubmit={handleSubmit}>
      <TextField 
      id="standard-basic" 
      sx={{width:'75%',m:1}}
      label="Your Email" 
      name="email"
      type="email"
      onChange={handleOnChange}
      variant="standard" />

      <TextField 
      id="standard-basic" 
      sx={{width:'75%',m:1}}
      label="password" 
      type="password"
      onChange={handleOnChange}
      name="password"
      variant="standard" />
      
     
      <Button type="submit"  sx={{width:'75%',m:1}} variant="contained">Login</Button>

      <NavLink style={{textDecoration:"none"}} to='/register'>
          <Button variant="text">New User? please register</Button>
      </NavLink>
     {/* <Button variant="contained"  sx={{m:1}} style={{backgroundColor:"#5CE7ED"}}>Submit</Button> */}

     {
         isLoading && <CircularProgress />
     }
     {
         user?.email &&
         <Alert severity="success">This is a success alert — check it out!</Alert>
     }
     {
         authError && 
         <Alert severity="error">{authError}</Alert>
     }

     {/* <p>----------------------</p>
     <Button onClick={handleGoogle} variant="contained">Google Sign In</Button> */}
      </form>
   
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

export default Login;