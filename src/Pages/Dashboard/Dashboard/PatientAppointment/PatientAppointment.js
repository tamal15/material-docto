import React,{useState,useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Grid } from '@mui/material';
import './PatientAppointment.css'
import useAuth from '../../../../hooks/useAuth';

const PatientAppointment = ({date}) => {
    const {user}=useAuth()
    const [patient,setPatient]=useState([])
    // const {date,email}=patient;

    useEffect(()=>{
        // fetch('http://localhost:5000/patient')
        // .then(res=>res.json())
        // .then(data=>setPatient(data))
        const url=`http://localhost:5000/patient?date=${date.toLocaleDateString()}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setPatient(data));
    },[date])
    return (
        <div>
           <h1>All <span className="cutting">Patient</span> Appointment</h1>

           <h3> All Appointment: {patient.length}</h3>

           <TableContainer component={Paper}>
                <Table sx={{ }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      {/* <TableCell>Serial</TableCell> */}
                      <TableCell>Name</TableCell>
                      <TableCell align="">Time</TableCell>
                      <TableCell align="">Email</TableCell>
                      <TableCell align="">Date</TableCell>
                      {/* <TableCell align="right">Payment</TableCell> */}
                     
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {patient.map((row) => (
                      <TableRow
                        key={row._id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        
                        {/* <TableCell component="th" scope="row">
                          {row.length}
                        </TableCell> */}
                        <TableCell component="th" scope="row">
                          {row.patientName}
                        </TableCell>
                        <TableCell align="">{row.time}</TableCell>
                        <TableCell align="">{row.email}</TableCell>
                        <TableCell align="">{row.date}</TableCell>
                        {/* <TableCell align="right">{row.amount}</TableCell> */}
                        {/* {/* <TableCell align="right">{row.payment ? 'paid' :
                        <Link to={`dashboard/payment/${row._id}`}> <button>Pay</button></Link>}</TableCell> */}
                      
                      </TableRow>
                    ))} 
                  </TableBody>
                </Table>
              </TableContainer>


        
                  





                    


                   



            
        </div>
    );
};

export default PatientAppointment;