import React from 'react';
// import Header from '../../Home/Header/Header';
// import Navigation from '../../Shared/Navigation'
// import AppointmentsHeader from '../AppointmentsHeader/AppointmentsHeader';
// import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';
// import './Appointment.css'
import Header from '../../Home/Header/Header';
import IcuData from './IcuData';
import Footer from '../../Shared/Footer/Footer';
const IcuBookingSystem = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div className='backgroundDesign'>
            {/* <Navigation></Navigation> */}
            <Header></Header>
            {/* <AppointmentsHeader date={date} setDate={setDate}></AppointmentsHeader> */}
            <IcuData date={date}></IcuData>
            <Footer></Footer>
        </div>
    );
};

export default IcuBookingSystem;