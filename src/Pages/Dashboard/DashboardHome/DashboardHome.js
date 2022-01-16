import * as React from 'react';
import { Grid } from '@mui/material';
// import { Box } from '@mui/system';

import Calender from '../../Shared/Calender/Calender';
import DeshboardAppointment from '../DeshboardAppointment/DeshboardAppointment';

const DashboardHome = () => {
    const [date,setDate]=React.useState(new Date())
    return (
        // <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
            <Calender
            date={date}
            setDate={setDate}
            >

            </Calender>
        </Grid>
        <Grid item xs={12} md={6}>
           <DeshboardAppointment
           
           date={date}
           >

           </DeshboardAppointment>
        </Grid>
       
      </Grid>
    // </Box>
    );
};

export default DashboardHome;