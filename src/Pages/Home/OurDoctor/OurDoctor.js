import { Card, CardActions, CardContent, CardMedia, Grid, Paper, Typography,Container } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './OurDoctor.css'
const OurDoctor = () => {
    return (
        <div>

<Container>
<h2 style={{fontSize:"2.8em", fontWeight:"700", textAlign:"center", marginTop:"100px", color: "#7E2231"}}>Our Doctor</h2>
        <hr className='' style={{  width: '15%', height: '5px', backgroundColor: 'black', display:"inline-block", border:0}} />
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

      {/* 4rd card  */}

      <Grid item xs={2} sm={4} md={4}>
<Paper sx={{py:2}} elevation={5}>
             <Card sx={{ minWidth: 275, border: 0, boxShadow: 0  }}>
            
             <CardMedia
        component="img"
        style={{width:'150px', height:'140px', margin:'0 auto'}}
        height="140"
        image='https://img.freepik.com/free-photo/attractive-young-male-nutriologist-lab-coat-smiling-against-white-background_662251-2960.jpg'
        alt="green iguana"
      />
      <CardContent>
        
        <Typography sx={{fontWeight:700}} variant="h5">
        Prof. Dr. M.A. Rahim
        </Typography>
      
        
        
      </CardContent>
    
    </Card>
    </Paper>
       
      </Grid>

      {/* 5th  */}

      <Grid item xs={2} sm={4} md={4}>
<Paper sx={{py:2}} elevation={5}>
             <Card sx={{ minWidth: 275, border: 0, boxShadow: 0  }}>
            
             <CardMedia
        component="img"
        style={{width:'150px', height:'140px', margin:'0 auto'}}
        height="140"
        image='https://pngimg.com/uploads/doctor/doctor_PNG16004.png'
        alt="green iguana"
      />
      <CardContent>
        
        <Typography sx={{fontWeight:700}} variant="h5">
        Prof. Dr. M.A. Jamal
        </Typography>
      
        
        
      </CardContent>
    
    </Card>
    </Paper>
       
      </Grid>

      {/* 6th  */}

      <Grid item xs={2} sm={4} md={4}>
<Paper sx={{py:2}} elevation={5} className=''>
             <Card sx={{ minWidth: 275, border: 0, boxShadow: 0  }} className=''>
            
             <CardMedia
        component="img"
        
        style={{width:'150px', height:'140px', margin:'0 auto', background:""}}
        height="140"
        image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3icwVz064vy5N7FcSCHlDn6wdBLe3hPYeCg&usqp=CAU'
       
        alt="green iguana"
      />
      <CardContent>
        
        <Typography sx={{fontWeight:700}} variant="h5">
        Prof. Dr. M.A. Moon
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