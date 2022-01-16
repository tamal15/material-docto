import { Container, Typography } from '@mui/material';
import React from 'react';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';

import Booking from '../Booking/Booking';


const bookAppointment=[
    {
    id:1,
    name:'Teeth Orthodonics',
    time:'08.00 AM - 09.00 AM',
    space:10,
    price:50
},
    {
    id:2,
    name:'Cosmetic Dentistry',
    time:'09.00 AM - 10.00 AM',
    space:8,
    price:80
},
    {
    id:3,
    name:'Teeth Cleaning',
    time:'10.00 AM - 11.00 AM',
    space:9,
    price:120
},
    {
    id:4,
    name:'Cavity Protection',
    time:'11.00 AM - 12.00 AM',
    space:5,
    price:100
},
    {
    id:5,
    name:'Pediatric Dental',
    time:'06.00 PM - 07.00 PM',
    space:10,
    price:150
},
    {
    id:6,
    name:'Oral Surgery',
    time:'07.00 PM - 08.00 PM',
    space:10,
    price:200
}
]
const AvailableAppointment = ({date}) => {
    return (
        <div>
            <Typography variant="h4" sx={{color:'info.main', fontWeight:500, m:3}}>Available Appointments {date.toDateString()}</Typography>

            <Container>
            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
         {
             bookAppointment.map(booking=> <Booking
             key={booking.id}
             booking={booking}
             date={date}>

             </Booking>)
         }
      </Grid>
    </Box>
            </Container>
        </div>
    );
};

export default AvailableAppointment;