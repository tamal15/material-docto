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
import ServiceProvide from '../ServiceProvide/ServiceProvide';
import Header from '../Header/Header';
import DisplayShowMedicin from '../../Dashboard/DashboardHome/AdminDashboard/ShowMedicin/DisplayShowMedicin';
import UpComming from '../UpCommingProduct/UpComming';
import Bonus from './Bonus/Bonus';
import ShowCommingMedicine from '../../Dashboard/Dashboard/MedicineUpComming/ShowCommingMedicine';



const Homes = () => {
    return (
        <div>
            
            {/* <Navigation></Navigation> */}
            <Header></Header>
            
           <Box className="start-bg">
           <Banner></Banner>
           <Bonus></Bonus>
           {/* <Services></Services> */}
           <ServiceProvide></ServiceProvide>
           <DisplayShowMedicin></DisplayShowMedicin>
           <Appointment></Appointment>
          
           <OurDoctor></OurDoctor>
           <ShowCommingMedicine></ShowCommingMedicine>
           <Contact></Contact>
           <Footer></Footer>
            
           </Box>
        </div>
    );
};

export default Homes;