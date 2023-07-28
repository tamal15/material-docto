import { Alert, Button, CircularProgress, Container, Grid,  Typography } from '@mui/material';
import React, { useState } from 'react';
import login from '../../../../images/login.png'
import TextField from '@mui/material/TextField'
import { NavLink, useHistory,useLocation} from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import Header from '../../Header/Header';
import Footer from '../../../Shared/Footer/Footer';

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
    //    alert('submit')
       loginUser(loginData.email, loginData.password,location,history)
        e.preventDefault()
    }

    const handleGoogle=()=>{
        signInGoogle(history,location)
    }
    return (
      
         <div>
            <Header></Header>

            <Container>
                 <Grid container spacing={2}>
  <Grid sx={{mt:8,background:"honeydew"}} item xs={12} md={6}>

  <Typography style={{fontWeight:"700",fontSize:"28px"}} variant="body1" gutterBottom>
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
            src="https://i.ibb.co/yhxXpcP/login.png" alt="" />
  </Grid>
 
</Grid>
           </Container>


            <Footer></Footer>
         </div>
       
    );
};

export default Login;