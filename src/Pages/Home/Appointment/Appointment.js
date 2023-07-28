import React from 'react';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png'
import Typography from '@mui/material/Typography';
import { Button, Container } from '@mui/material';
import './Appointment.css'

const appointmentBg={
    background:`url(${bg})`,
    marginTop:150,
    backgroundColor:'rgba(45,58,74,0.9)',
    // backgroundColor:'',
    backgroundBlendMode:'darken, luminosity'

  }

const Appointment = () => {
    return (
      <Container>
            <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
            <img 
              style={{width:400,marginTop:-110}}
               src={doctor} alt="" />
         
        </Grid>
        <Grid item xs={12} md={6} sx={{
            display:"flex",
            justifyContent:'flex-start',
            alignItems:"center",
            textAlign:"left"
        }}>
          <Box className="doc">
          <Typography variant="h6" sx={{mb:3}} style={{color:"#5CE7ED", fontWeight:"500"}}>
           Appointment
        </Typography>
        <Typography variant="h3" style={{color:"white", fontWeight:500}}>
           Make an Appointment Today
        </Typography>
        <Typography variant="h6" style={{color:"white", fontSize:15, fontWeight:300}}>
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit reiciendis vel magni autem quisquam temporibus possimus eos tenetur, nesciunt dicta.
        </Typography>
        <Button variant="contained" sx={{mt:2}} style={{backgroundColor:"#5CE7ED"}}>Learn More</Button>
          </Box>
         
        </Grid>
        
        
      </Grid>
    </Box>
      </Container>
    );
};

export default Appointment;