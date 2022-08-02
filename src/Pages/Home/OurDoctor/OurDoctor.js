import { Card, CardActions, CardContent, CardMedia, Grid, Paper, Typography,Container } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const OurDoctor = () => {
    return (
        <div>

<Container>
    <h1>Our Doctor</h1>
<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
{/* 1st doctr  */}
<Grid item xs={2} sm={4} md={4}>
<Paper sx={{py:2}} elevation={5}>
             <Card sx={{ minWidth: 275, border: 0, boxShadow: 0  }}>
            
             <CardMedia
        component="img"
        style={{width:'150px', height:'140px', margin:'0 auto'}}
        height="140"
        image='https://media.istockphoto.com/photos/happy-healthcare-practitioner-picture-id138205019?k=20&m=138205019&s=612x612&w=0&h=KpsSMVsplkOqTnAJmOye4y6DcciVYIBe5dYDgYXLVW4='
        alt="green iguana"
      />
      <CardContent>
        
        <Typography sx={{fontWeight:700}} variant="h5">
        Dr. Md. Kabir Hasan
        </Typography>
       
        
        
      </CardContent>
     
    </Card>
    </Paper>
       
      </Grid>


      {/* 2nd  */}

      <Grid item xs={2} sm={4} md={4}>
<Paper sx={{py:2}} elevation={5}>
             <Card sx={{ minWidth: 275, border: 0, boxShadow: 0  }}>
            
             <CardMedia
        component="img"
        style={{width:'150px', height:'140px', margin:'0 auto'}}
        height="140"
        image='https://images.freeimages.com/images/premium/previews/2155/21558344-portrait-of-positive-young-doctor-woman.jpg'
        alt="green iguana"
      />
      <CardContent>
        
        <Typography sx={{fontWeight:700}} variant="h5">
        Dr. Lubna Khondker
        </Typography>
       
        
        
      </CardContent>
    
    </Card>
    </Paper>
       
      </Grid>

      {/* 3rd doctr  */}

      <Grid item xs={2} sm={4} md={4}>
<Paper sx={{py:2}} elevation={5}>
             <Card sx={{ minWidth: 275, border: 0, boxShadow: 0  }}>
            
             <CardMedia
        component="img"
        style={{width:'150px', height:'140px', margin:'0 auto'}}
        height="140"
        image='https://i.ibb.co/FnJdgnf/doctor.png'
        alt="green iguana"
      />
      <CardContent>
        
        <Typography sx={{fontWeight:700}} variant="h5">
        Prof. Dr. M.A. Muqueet
        </Typography>
      
        
        
      </CardContent>
    
    </Card>
    </Paper>
       
      </Grid>

</Grid>
</Container>

            
        </div>
    );
};

export default OurDoctor;