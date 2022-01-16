
import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Grid, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
const AddDoctor = () => {
   
    return (
        <div>
            <h2>This is Doctor Details</h2>

            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>

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
        <Typography sx={{fontWeight:700}} color="text.secondary" variant="p">
        Mental Diseases, Drug Addiction Specialist
        </Typography>
        <Typography sx={{fontWeight:700}} color="text.secondary" variant="h6">
        Mymensingh Medical College & Hospital
        </Typography>
        <Link to={`/serviceDetails`}> <button className="button">Details</button></Link>
        
        
      </CardContent>
      <CardActions>
      
      
      </CardActions>
    </Card>
    </Paper>
       
      </Grid>



      {/* 2nd doctor  */}
      <Grid item xs={2} sm={4} md={4}>
<Paper sx={{py:2}} elevation={5}>
             <Card sx={{ minWidth: 275, border: 0, boxShadow: 0  }}>
            
             <CardMedia
        component="img"
        style={{width:'150px', height:'140px', margin:'0 auto'}}
        height="140"
        image='https://image.freepik.com/free-photo/portrait-hansome-young-male-doctor-man_171337-5068.jpg'
        alt="green iguana"
      />
      <CardContent sx={{}}>
        
        <Typography sx={{fontWeight:700}} variant="h5">
        Dr. Md. Shahidul Islam
        </Typography>
        <Typography sx={{fontWeight:700}} color="text.secondary" variant="p">
        General, Laparoscopic & Hernia Surgery Specialist
        </Typography>
        <Typography sx={{fontWeight:700}} color="text.secondary" variant="h6">
        Upazila Health Complex, Lalmonirhat
        </Typography>
        <Link to={`/serviceDetails`}> <button className="button">Details</button></Link>
        
        
      </CardContent>
      <CardActions>
      
      
      </CardActions>
    </Card>
    </Paper>
       
      </Grid>



{/* 3rd doctor  */}

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
        Dr. Happy Hasan
        </Typography>
        <Typography sx={{fontWeight:700}} color="text.secondary" variant="p">
        ENT (Ear, Nose, Throat) & Cancer Specialist
        </Typography>
        <Typography sx={{fontWeight:700}} color="text.secondary" variant="h6">
        Dhaka Medical College & Hospital
        </Typography>
        <Link to={`/serviceDetails`}> <button className="button">Details</button></Link>
        
        
      </CardContent>
      <CardActions>
      
      
      </CardActions>
    </Card>
    </Paper>
       
      </Grid>


{/* 4th doctor  */}

<Grid item xs={2} sm={4} md={4}>
<Paper sx={{py:2}} elevation={5}>
             <Card sx={{ minWidth: 275, border: 0, boxShadow: 0  }}>
            
             <CardMedia
        component="img"
        style={{width:'150px', height:'140px', margin:'0 auto'}}
        height="140"
        image='https://thumbs.dreamstime.com/b/beautiful-young-female-doctor-9182291.jpg'
        alt="green iguana"
      />
      <CardContent>
        
        <Typography sx={{fontWeight:700}} variant="h5">
        Dr. Lubna Khondker
        </Typography>
        <Typography sx={{fontWeight:700}} color="text.secondary" variant="p">
        Skin, Hair, Nail, STDs & Laser Treatment Specialist
        </Typography>
        <Typography sx={{fontWeight:700}} color="text.secondary" variant="h6">
        Rangpur Medical College & Hospital
        </Typography>
        <Link to={`/serviceDetails`}> <button className="button">Details</button></Link>
        
        
      </CardContent>
      <CardActions>
      
      
      </CardActions>
    </Card>
    </Paper>
       
      </Grid>


      {/* 5th doctr  */}

      <Grid item xs={2} sm={4} md={4}>
<Paper sx={{py:2}} elevation={5}>
             <Card sx={{ minWidth: 275, border: 0, boxShadow: 0  }}>
            
             <CardMedia
        component="img"
        style={{width:'150px', height:'140px', margin:'0 auto'}}
        height="140"
        image='https://thumbs.dreamstime.com/b/male-doctor-portrait-isolated-white-background-56744085.jpg'
        alt="green iguana"
      />
      <CardContent>
        
        <Typography sx={{fontWeight:700}} variant="h5">
        Prof. Dr. M.A. Muqueet
        </Typography>
        <Typography sx={{fontWeight:700}} color="text.secondary" variant="p">
        Medicine & Cardiology & Head Neck Surgeon Specialist
        </Typography>
        <Typography sx={{fontWeight:700}} color="text.secondary" variant="h6">
        Khulna Medical College & Hospital
        </Typography>
        <Link to={`/serviceDetails`}> <button className="button">Details</button></Link>
        
        
      </CardContent>
      <CardActions>
      
      
      </CardActions>
    </Card>
    </Paper>
       
      </Grid>


      {/* 6th doctr  */}

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
        Prof. Dr. Shamima Jahan
        </Typography>
        <Typography sx={{fontWeight:700}} color="text.secondary" variant="p">
        General, Laparoscopic, Breast & Colorectal Surgeon
        </Typography>
        <Typography sx={{fontWeight:700}} color="text.secondary" variant="h6">
        Bogura Medical College & Hospital
        </Typography>
        <Link to={`/serviceDetails`}> <button className="button">Details</button></Link>
        
        
      </CardContent>
      <CardActions>
      
      
      </CardActions>
    </Card>
    </Paper>
       
      </Grid>

            </Grid>

         
        </div>
    );
};

export default AddDoctor;