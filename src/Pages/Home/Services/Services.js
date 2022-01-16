import React from 'react';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import image1 from '../../../images/fluoride.png'
import image2 from '../../../images/cavity.png'
import image3 from '../../../images/whitening.png'
import Service from '../Service/Service';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';


const services=[
    {
        
        name: "Germany",
       
        description: "We have an offer for winter here. At 20% offer you can travel Germany",
        img:image1
        
    },
    {
       
        name: "Irland",
      
        description: "We have an offer for winter here. At 20% offer you can travel Island.",
        img: image2
    },
    {
       
        name: "China",
        description: "We have an offer for winter here. At 20% offer you can travel China.",
        img: image3
    }
]

const Services = () => {

    return (
        <Box sx={{ flexGrow: 1 }}>
         <Container>
         <Typography sx={{ fontWeight: 500 , color: 'success.main', m:1}} variant="h5" component="h5">
           Our Services
        </Typography>
         <Typography sx={{ fontWeight: 600, m:3 }} variant="h5" component="h1">
           Services We Provides
        </Typography>
        
         <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
           {
               services.map(service=> <Service
               key={service.name}
               service={service}
               >

               </Service>)
           }
        </Grid>
         </Container>
      </Box>
    );
};

export default Services;