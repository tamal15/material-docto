import React from 'react';
import Navigation from '../../Shared/Navigation'
import AppointmentsHeader from '../AppointmentsHeader/AppointmentsHeader';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';

const Appointments = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Navigation></Navigation>
            <AppointmentsHeader date={date} setDate={setDate}></AppointmentsHeader>
            <AvailableAppointment date={date}></AvailableAppointment>
        </div>
    );
};

export default Appointments;