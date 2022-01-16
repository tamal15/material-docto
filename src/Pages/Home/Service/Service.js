import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';



const Service = (props) => {
    const {name,img,description}=props.service;
    return (
        
        <Grid item xs={2} sm={4} md={4}>
             <Card sx={{ minWidth: 275, border: 0, boxShadow: 0  }}>

             <CardMedia
        component="img"
        style={{width:'auto', height:'80px', margin:'0 auto'}}
        height="140"
        image={img}
        alt="green iguana"
      />
      <CardContent>
        
        <Typography variant="h5">
           {name}
        </Typography>
        <Typography  color="text.secondary" variant="h6">
         {description}
        </Typography>
        
      </CardContent>
      <CardActions>
      
      </CardActions>
    </Card>
       
      </Grid>
    );
};

export default Service;