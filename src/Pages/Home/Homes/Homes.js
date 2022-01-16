import React from 'react';
import Navigation from '../../Shared/Navigation';
import Services from '../Services/Services';
import Appointment from '../Appointment/Appointment'
import Banner from '../Banner/Banner';
import OurDoctor from '../OurDoctor/OurDoctor';


const Homes = () => {
    return (
        <div>
            
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
           <Appointment></Appointment>
           <OurDoctor></OurDoctor>
            
        </div>
    );
};

export default Homes;