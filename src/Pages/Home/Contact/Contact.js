import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png'
import { useForm } from "react-hook-form";
import './Contact.css'

const Contact = () => {
  const { register, handleSubmit} = useForm();

  const onSubmit= (data) =>{
    console.log(data)
  
  }

    const appointmentBg={
        background:`url(${bg})`,
        marginTop:150,
        backgroundColor:'rgba(45,58,74,0.9)',
        backgroundBlendMode:'darken, luminosity'
    
      }
    return (
        <div>

<Container>
            <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
      {/* <Grid container spacing={2}> */}
       
      <div className="submits">
      <h1 style={{color:"white", padding:5}}>Contact US</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
 <input {...register("name", { required: true, maxLength: 20 })} placeholder="name" />
 <input type="number" {...register("price")} placeholder="Email" />
 
 <textarea name="" id="" cols="30" rows="10" placeholder='Message'></textarea>


 <input className='subs' type="submit" />
</form>
      </div>
       
      {/* <input type="text" placeholder="name"/>
      <br></br>
      <input type="text" placeholder="Email"/>
      <br>
      </br>
      <textarea name="Message" id="" cols="20" rows="7" placeholder='Message'></textarea> */}
        
      {/* </Grid> */}
    </Box>
      </Container>
            
        </div>
    );
};

export default Contact;