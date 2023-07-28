import { Container, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router';
import './ProductDetails.css'
const ProductDetails = () => {
    const {id}=useParams();
    const [store , setStore]=useState({})

    useEffect(()=>{
        fetch(`http://localhost:5000/user/${id}`)
        .then(res=>res.json())
        .then(data=>setStore(data))
    },[])
    return (
        <div>
         <h1>This is Medicin  <span className='prices'>{store.name}</span> Details</h1>


         <Container>
    <Box  sx={{ flexGrow: 1 }}>
<Grid style={{textAlign:'left', padding:"3%"}} container spacing={2}>
{/* <Paper sx={{py:2}} elevation={5}> */}
  <Grid item xs={12} md={6}>
 
  <Box>
       <Typography variant="h2" style={{ fontWeight:500}}>
         Name: <span className='prices'> {store.name}</span>
        </Typography>
        <Typography variant="h6" style={{ fontWeight:500, color:'gray'}}>
           {store.description}
        </Typography>
        <Typography variant="h3" style={{ fontWeight:500, color:'gray'}}>
        Price:  <span className='prices'>  {store.price}</span>
        </Typography>
       
       </Box>
  </Grid>
  <Grid item xs={12} md={6}>
    {/* <img style={{width:"100%"}} src={chair} alt="" /> */}
    <img
           style={{width:'400px'}}
            src={store.img} alt="" />
  </Grid>
  {/* </Paper> */}
</Grid>

</Box>
</Container>





            
        </div>
    );
};

export default ProductDetails;