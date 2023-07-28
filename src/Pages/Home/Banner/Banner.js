import React from 'react';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import './Banner.css'
import { Button, Container } from '@mui/material';
import { Card, CardActions, CardContent, CardMedia,  Paper} from '@mui/material';

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

    <Container className="stand-bg">
    <Box style={bannerBg} sx={{ flexGrow: 1 }} sx={{ flexGrow: 1 }}>
<Grid style={{textAlign:'left', padding:"3%", paddingLeft:"4%"}} container spacing={2}>
  <Grid item xs={12} md={6}>
  <Box>
       <Typography variant="h2" style={{ fontWeight:500}}>
           24 Hours Service This Website
        </Typography>
        <Typography variant="h6" style={{ fontWeight:500, fontSize:15,color:'gray'}}>
        A hospital is a healthcare institution providing patient treatment with specialized health science.
        </Typography>
        <Button variant='contained' style={{backgroundColor:"#5CE7ED"}}>Get Appointment</Button>
       </Box>
  </Grid>
  <Grid  style={verticalCenter} style={{paddingLeft:"8%"}} item xs={12} md={6}>
    {/* <img style={{width:"100%"}} src={chair} alt="" /> */}
    <img
           style={{width:'300px',paddingLeft:"10px"}}
            src='https://revcycleintelligence.com/images/sized/hospital,_green-53edb5851454f1f8ce487b515aa1a1dd.jpg' alt="" />
  </Grid>
 
</Grid>
</Box>


<Container>
<Container>
<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>



      
      <Grid item xs={4} sm={4} md={4}>
<Paper className="keys dell" sx={{}} elevation={5}>
             <Card className="keys dell" sx={{  border: 0, boxShadow: 0  }}>
            
             
      <CardContent className="dell"  sx={{}}>
          
        <Box className="mouses">
        <Typography className="icons" sx={{fontWeight:700}} variant="h5">
        {/* <i class="fas fa-map-marker-alt"></i> */}
        <i class="far fa-clock"></i>
        </Typography>
        <Typography className="dones" sx={{fontWeight:700, color:"white"}} color="white" variant="p">
        Opening Hours
        This Service any time.
        </Typography>

        </Box>
      
       
        
      </CardContent>
     
    </Card>
    </Paper>
       
      </Grid>

{/* 2nd step  */}
<Grid item xs={4} sm={4} md={4}>
<Paper className="keys dell" sx={{}} elevation={5}>
             <Card className="keys dells" sx={{  border: 0, boxShadow: 0  }}>
            
             
      <CardContent className="dells"  sx={{}}>
          
        <Box className="mouses">
        <Typography className="icons" sx={{fontWeight:700}} variant="h5">
        <i class="fas fa-map-marker-alt"></i>
        </Typography>
        <Typography className="dones" sx={{fontWeight:700, color:"white"}} color="white" variant="p">
        Visit Our Location
        Dhaka Bangladesh
        </Typography>

        </Box>
      
       
        
      </CardContent>
     
    </Card>
    </Paper>
       
      </Grid>


      {/* 3rd step  */}

      <Grid item xs={4} sm={4} md={4}>
<Paper className="keys" sx={{}} elevation={5}>
             <Card className="keys" sx={{ border: 0, boxShadow: 0  }}>
            
             
      <CardContent className="dell"  sx={{}}>
          
        <Box className="mouses">
        <Typography sx={{fontWeight:700}} variant="h5">
        <i class="fas fa-phone-alt"></i>
        </Typography>
        <Typography sx={{fontWeight:700}} color="white" variant="p">
        Contact us now for service
        01774644555
        </Typography>

        </Box>
      
       
        
      </CardContent>
     
    </Card>
    </Paper>
       
      </Grid>

</Grid>
</Container>
</Container>
       
</Container>




    // end 


    );
};

export default Banner;