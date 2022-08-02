import React from 'react';
import Navigation from '../../Shared/Navigation';
import Services from '../Services/Services';
import Appointment from '../Appointment/Appointment'
import Banner from '../Banner/Banner';
import OurDoctor from '../OurDoctor/OurDoctor';
import Footer from '../../Shared/Footer/Footer';
import { Box } from '@mui/material';
import './Homes.css'
import Contact from '../Contact/Contact';


const Homes = () => {
    return (
        <div>
            
            <Navigation></Navigation>
            <Banner></Banner>
           <Box className="start-bg">
           <Services></Services>
           <Appointment></Appointment>
           <OurDoctor></OurDoctor>
           <Contact></Contact>
           <Footer></Footer>
            
           </Box>
        </div>
    );
};

export default Homes;