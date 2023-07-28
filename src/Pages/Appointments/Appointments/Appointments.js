import React from 'react';
import Header from '../../Home/Header/Header';
import Navigation from '../../Shared/Navigation'
import AppointmentsHeader from '../AppointmentsHeader/AppointmentsHeader';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';
import './Appointment.css'
const Appointments = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div className='backgroundDesign'>
            {/* <Navigation></Navigation> */}
            <Header></Header>
            <AppointmentsHeader date={date} setDate={setDate}></AppointmentsHeader>
            <AvailableAppointment date={date}></AvailableAppointment>
        </div>
    );
};

export default Appointments;