import React from 'react';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Button, Container } from '@mui/material';

const bannerBg={
    background:`url(${bg})`,
    
    
}
const verticalCenter={
    display:'flex',
    alignItems:'center',
    height:250,

}
const Banner = () => {
    return (
    //    <Container>
    //         <Container  style={bannerBg} sx={{ flexGrow: 1 }}>
    //   <Grid style={{...verticalCenter, textAlign:'left'}} container spacing={2}>
    //     <Grid item xs={12} md={6}>
    //    <Box>
    //    <Typography variant="h2" style={{ fontWeight:500}}>
    //        Your New Smile Starts Here
    //     </Typography>
    //     <Typography variant="h6" style={{ fontWeight:500, fontSize:15,color:'gray'}}>
    //        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, sint minima quaerat natus sapiente facere odio labore asperiores repellat animi.
    //     </Typography>
    //     <Button variant='contained' style={{backgroundColor:"#5CE7ED"}}>Get Appointment</Button>
    //    </Box>
    //     </Grid>
    //     <Grid style={verticalCenter} item xs={12} md={6}>
    //        <img
    //        style={{width:'390px'}}
    //         src={chair} alt="" />
    //     </Grid>
       
    //   </Grid>
    // </Container>

    // start

    <Container>
    <Box style={bannerBg} sx={{ flexGrow: 1 }} sx={{ flexGrow: 1 }}>
<Grid style={{textAlign:'left', padding:"3%"}} container spacing={2}>
  <Grid item xs={12} md={6}>
  <Box>
       <Typography variant="h2" style={{ fontWeight:500}}>
           Your New Smile Starts Here
        </Typography>
        <Typography variant="h6" style={{ fontWeight:500, fontSize:15,color:'gray'}}>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, sint minima quaerat natus sapiente facere odio labore asperiores repellat animi.
        </Typography>
        <Button variant='contained' style={{backgroundColor:"#5CE7ED"}}>Get Appointment</Button>
       </Box>
  </Grid>
  <Grid  style={verticalCenter} item xs={12} md={6}>
    {/* <img style={{width:"100%"}} src={chair} alt="" /> */}
    <img
           style={{width:'410px'}}
            src={chair} alt="" />
  </Grid>
 
</Grid>
</Box>
</Container>




    // end 
       
    );
};

export default Banner;