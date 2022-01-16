import { Button, Grid } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import BookingModal from '../BookingModal/BookingModal';
import {  Container } from '@mui/material';

const Booking = ({booking,date}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const {name,time,space ,price}=booking
    return (
       <>
        <Grid item xs={12} sm={6} md={4}>
          <Paper sx={{py:5}} elevation={3}>
          <Typography sx={{color:'info.main', fontWeight:600}} variant="h5" gutterBottom component="div">
           {name}
        </Typography>
          <Typography variant="h6" gutterBottom component="div">
           {time}
        </Typography>
          <Typography variant="h6" gutterBottom component="div">
           ${price}
        </Typography>
          <Typography variant="caption" gutterBottom component="div">
           {space} SPACES AVAILABLE
        </Typography>
        <Button onClick={handleOpen} variant="contained">Book Appointment</Button>
        </Paper>
        </Grid>

        {/* <Container> */}
      <div className="container">
      <BookingModal
        booking={booking}
        date={date}
        handleClose={handleClose} open={open}></BookingModal>
      </div>

        {/* </Container> */}

        {/* <BookingModal
        booking={booking}
        date={date}
        handleClose={handleClose} open={open}></BookingModal> */}
       </>
      
    );
};

export default Booking;