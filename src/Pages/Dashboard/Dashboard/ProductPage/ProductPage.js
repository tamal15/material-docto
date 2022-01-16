import { Card, CardActions, CardContent, CardMedia, Grid, Paper, Typography } from '@mui/material';
import { grid } from '@mui/system';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProductPage.css'

const ProductPage = () => {
    const [medicin, setMedicin] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setMedicin(data))
    }, [])


    return (
        <div className='backs'>
             <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
           

            {
                medicin.map((offers, index) => (

                   
<Grid item xs={2} sm={4} md={4}>
<Paper sx={{py:2}} elevation={5}>
             <Card sx={{ minWidth: 275, border: 0, boxShadow: 0  }}>
            
             <CardMedia
        component="img"
        style={{width:'150px', height:'140px', margin:'0 auto'}}
        height="140"
        image={offers.img}
        alt="green iguana"
      />
      <CardContent>
        
        <Typography sx={{fontWeight:700}} variant="h5">
           {offers.name}
        </Typography>
        <Typography sx={{fontWeight:700}} color="text.secondary" variant="h6">
        Price: {offers.price}
        </Typography>
        <Link to={`/serviceDetails/${offers._id}`}> <button className="button">Buy Now</button></Link>
        
      </CardContent>
      <CardActions>
      
      
      </CardActions>
    </Card>
    </Paper>
       
      </Grid>




                     


                    









                ))
            }
            </Grid>

        </div>




    );
};

export default ProductPage;