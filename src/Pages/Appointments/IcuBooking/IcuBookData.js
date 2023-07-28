import { Box, Button, Grid } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import BookingModal from '../BookingModal/BookingModal';
import {  Container } from '@mui/material';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import IcuModal from './IcuModal';
// import './Booking.css'
import './IcuBooking.css'
const IcuBookData = ({booking,date}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const {HospitalName,AmbulanceNumber,ProductPrice ,seat ,division ,img,likes,DriverName,_id}=booking

    
    



  
    return (
      
      <>
      

<Grid item xs={12} sm={6} md={4}>
          <Paper className="backgroundDesig" sx={{py:5}} elevation={3}>
          <div className='photo'>
                    <div className='photoShops'>
                      <img height="200" width="280" style={{borderRadius:"10px", marginTop:"-30px"}} src={img}></img>
                   
                    </div>
                   </div>
         <Box style={{textAlign:"left",marginLeft:"20px"}}>
         {/* color:'info.main'  */}
         <Typography sx={{ fontWeight:700, marginTop:"5px",fontSize:"18px"}} variant="h6" gutterBottom component="div">
         HospitalName : {HospitalName}
        </Typography>
          <Typography sx={{ fontWeight:700,fontSize:"18px"}} variant="h6" gutterBottom component="div">
          AmbulanceNumber : {AmbulanceNumber}
        </Typography>
          <Typography variant="h6" sx={{fontWeight:"700",fontSize:"18px"}} gutterBottom component="div">
          DriverName : {DriverName}
        </Typography>
          <Typography variant="h6" sx={{fontWeight:"700",fontSize:"18px"}} gutterBottom component="div">
           TK.{ProductPrice}
        </Typography>
          <Typography variant="h6" sx={{fontWeight:"700",fontSize:"18px"}} gutterBottom component="div">
          Total Seat: {seat}
        </Typography>
          <Typography variant="h6" sx={{fontWeight:"700",fontSize:"18px"}} gutterBottom component="div">
          Empty Seat: {seat  - likes.length}
        </Typography>
        {/* <h1 className='text-sm'>Total: {seat} = Fill up: {seat - 100 + likes.length}</h1> */}
          {/* <Typography variant="caption" sx={{fontWeight:"700"}} gutterBottom component="div">
           {space} SPACES AVAILABLE
        </Typography> */}
          <Typography variant="h6" sx={{fontWeight:"700",fontSize:"18px"}} gutterBottom component="div">
           location : {division} 
        </Typography>
          {/* <Typography variant="caption" sx={{fontWeight:"700",fontSize:"18px"}} gutterBottom component="div">
           {space} SPACES AVAILABLE
        </Typography> */}

        <Box sx={{ display: 'flex', justifyContent: '' }}>
                  <a
                    // to={`/payment`}
                    style={{ textDecoration: "none",textAlign:"left" }}
                  >
                    {/* <Button
                     className='btn-style download-btn '
                     style={{textAlign:"left"}}
                    size="small">
                      Check
                    </Button> */}
                  </a>
                  <a
                    // to={`/bookDetails/${single._id}`}
                    // to={`/bookDetails/${single._id}`}
                    className="mt-1"
                    style={{ textDecoration: "none", marginRight: "5px" }}
                  >
                    <NavLink 
                     to={`/IcuDetails/${_id}`}
                     className='icudetails  ms-1'
                     style={{textAlign:"",marginLeft:"-50px", borderRadius:"5px !important",marginTop:"25px"}}
                    size="small">
                      Details
                    </NavLink>
                  </a>

                  <Button className='btn-style download-btn details-show' onClick={handleOpen} variant="">Appointment</Button>
                 
                </Box>
         </Box>

        
        {/* <Button onClick={handleOpen} variant="contained">Book Appointment</Button> */}
        </Paper>
        </Grid>

        <Box className="">
         <IcuModal
        booking={booking}
        date={date}
        handleClose={handleClose} open={open}></IcuModal>
     
      </Box> 



      

      </>
      
    
   

        
       

       
       

      

       
       
      
    );
};

export default IcuBookData;