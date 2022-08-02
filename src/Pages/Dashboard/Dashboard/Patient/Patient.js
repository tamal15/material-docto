import { Box } from '@mui/system';
import React, { useState } from 'react';
import Calender from '../../../Shared/Calender/Calender';
import PatientAppointment from '../PatientAppointment/PatientAppointment';

const Patient = () => {
    const [date,setDate]=useState(new Date())
    return (
        <div>
            <Box>
               <Calender
                date={date}
                setDate={setDate}>
               </Calender>
            </Box>
            <Box>
               <PatientAppointment
                  date={date}>
                
               </PatientAppointment>
            </Box>
            
        </div>
    );
};

export default Patient;