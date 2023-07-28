import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button} from '@mui/material';
import './Dashboard.css'
import { FaThLarge, FaUser, FaBookmark, FaCommentDots, FaSignOutAlt, FaTasks, FaUserShield, FaSchool } from 'react-icons/fa'
import { Link, NavLink, Outlet } from 'react-router-dom';
// import Calender from '../../Shared/Calender/Calender';
// import DeshboardAppointment from '../DeshboardAppointment/DeshboardAppointment';
// import { Link } from 'react-router-dom';
import DashboardHome from '../DashboardHome/DashboardHome';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import MakeAdmin from '../MakeAdmin/MakeAdmin';
// import AddDoctor from '../AddDoctor/AddDoctor';
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../Home/Login/AdminRoute/AdminRoute';
import Payment from './Payment/Payment';
import BikashSuccess from './Payment/BikashSuccess';
import AddProduct from '../../Admin/AddProduct/AddProduct';
import ProductPage from './ProductPage/ProductPage';
import PatientAppointment from './PatientAppointment/PatientAppointment';
import Patient from './Patient/Patient';
import AddDoctor from '../AddDoctor/AddDoctor';
import AppoinrmentToken from './AppoinrmentToken/AppoinrmentToken';
import MedicinUpload from '../DashboardHome/AdminDashboard/AdminUploadProduct/MedicinUpload';
import Ambulance from '../AmbulanceService/Ambulance';
import AmbulanceShow from '../AmbulanceService/AmbulanceShow';
import AmbulancePartUpload from '../AmbulanceService/AmbulancePartUpload';
import AddDoctors from './AddDoctors/AddDoctors';
import IcuSupport from './IcuSupport/IcuSupport';
import AddBlood from '../UserBlood/AddBlood';
import BloodDonate from '../UserBlood/BloodDonate';
import ManageBlood from '../UserBlood/ManageBlood';
import AddNurse from '../UserNurse/AddNurse';
import SeeAddNurse from '../UserNurse/SeeAddNurse';
import ManageNurse from '../UserNurse/ManageNurse';
import AddOrgan from '../UsersOrgan/AddOrgan';
import OrganDonate from '../UsersOrgan/OrganDonate';
import ManageOrgan from '../UsersOrgan/ManageOrgan';
import UpdateBookingAdmin from '../../Appointments/IcuBooking/UpdateBookingAdmin';
import IcuBookSee from '../UserBlood/IcuBookSee/IcuBookSee';
import MyOrder from '../DashboardHome/MyOrder/MyOrder';
import ApplyVideo from '../DashboardHome/ApplyVideo/ApplyVideo';
import SeeApplyVideo from '../DashboardHome/ApplyVideo/SeeApplyVideo';
import DoctorUpdateVideo from '../DashboardHome/ApplyVideo/DoctorUpdateVideo';
import ProductDataApproved from '../DashboardHome/AdminDashboard/ProductDataApproved/ProductDataApproved';
import MedicineUpComming from './MedicineUpComming/MedicineUpComming';

const drawerWidth = 280;

function Dashboard(props) {
  const { window } = props;
  const {admin,doctor,hospital}=useAuth()
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const {user}=useAuth()
  let { path, url } = useRouteMatch();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="desh dashboard-menu">
      {/* <Toolbar sx={{background:"#1f2833"}}  /> */}
      <Toolbar className="" sx={{background:"#1f2833", color:"white"}}><h3 className='tools'>{user.displayName}</h3></Toolbar>
      <Divider sx={{background:"gray"}} />
      {/* <Link className='ms-3'  style={{textDecoration:'none',color:'#45a29e',fontSize:""}} to='/appointment'>
            <Button className='mt-5' style={{fontSize:"23px"}}  color="inherit">Appointment</Button>
            </Link> */}
          <Box className='dashboard-menu'>
        <ul>
        <li>
                                  <NavLink className="des ms-4" to={`/appointment`} style={({ isActive }) => ({
                                      color: isActive ? "#CCCCCC" : "#CCCCCC",
                                  })}><FaTasks className='me-1' /> Appointment</NavLink>
                              </li>
     <div className='mt-4'>
     {/* <Link className='ms-3'  style={{textDecoration:'none',color:'#45a29e'}} to='/'>
            <Button className='mt-5' style={{fontSize:"23px"}} color="inherit">Home</Button>
            </Link> */}

            <li>
                                  <NavLink className="des ms-4" to={`/`} style={({ isActive }) => ({
                                      color: isActive ? "#CCCCCC" : "#CCCCCC",
                                  })}><FaTasks className='me-1' /> Home</NavLink>
                              </li>
     </div>

    
    
          <div className='mt-4'>
          <li>
                                  <NavLink className="des ms-4" to={`${url}`} style={({ isActive }) => ({
                                      color: isActive ? "#CCCCCC" : "#CCCCCC",
                                  })}><FaTasks className='me-1' /> Deshboard</NavLink>
                              </li>
          </div>

         

         
      
     {
        admin && 
        <Box>
           {/* <Link style={{textDecoration:'none',color:'#45a29e'}} to={`${url}/makeAdmin`}>
            <Button className='mt-5' style={{fontSize:"23px"}} color="inherit">User Admin</Button>
            </Link> */}

<div className='mt-4'>
            <li>
                                  <NavLink className="des ms-4" to={`${url}/makeAdmin`} style={({ isActive }) => ({
                                      color: isActive ? "#CCCCCC" : "#CCCCCC",
                                  })}><FaTasks className='me-1' /> UserAdmin</NavLink>
                              </li>
            </div>
           
           
        
           {/* <Link style={{textDecoration:'none',color:'#45a29e'}} to={`${url}/adminupload`}>
            <Button className='mt-5' style={{fontSize:"23px"}} color="inherit">Admin Medicin</Button>
            </Link> */}
              <div className='mt-4'>
          <li>
                                  <NavLink className="des ms-4" to={`${url}/adminupload`} style={({ isActive }) => ({
                                      color: isActive ? "#CCCCCC" : "#CCCCCC",
                                  })}><FaTasks className='me-1' /> Admin Medicin</NavLink>
                              </li>
          </div>

              <div className='mt-4'>
          <li>
                                  <NavLink className="des ms-4" to={`${url}/ambulance`} style={({ isActive }) => ({
                                      color: isActive ? "#CCCCCC" : "#CCCCCC",
                                  })}><FaTasks className='me-1' /> Ambulance</NavLink>
                              </li>
          </div>
          
              <div className='mt-4'>
          <li>
                                  <NavLink className="des ms-4" to={`${url}/ambulanceShow`} style={({ isActive }) => ({
                                      color: isActive ? "#CCCCCC" : "#CCCCCC",
                                  })}><FaTasks className='me-1' /> Ambulance Show</NavLink>
                              </li>
          </div>
              <div className='mt-4'>
          <li>
                                  <NavLink className="des ms-4" to={`${url}/approvedProduct`} style={({ isActive }) => ({
                                      color: isActive ? "#CCCCCC" : "#CCCCCC",
                                  })}><FaTasks className='me-1' /> Product Approved</NavLink>
                              </li>
          </div>
              <div className='mt-4'>
          <li>
                                  <NavLink className="des ms-4" to={`${url}/commingMedicine`} style={({ isActive }) => ({
                                      color: isActive ? "#CCCCCC" : "#CCCCCC",
                                  })}><FaTasks className='me-1' /> CommingMedicine </NavLink>
                              </li>
          </div>
             
              <div className='mt-4'>
          <li>
                                  <NavLink className="des ms-4" to={`${url}/icu`} style={({ isActive }) => ({
                                      color: isActive ? "#CCCCCC" : "#CCCCCC",
                                  })}><FaTasks className='me-1' /> Add Icu</NavLink>
                              </li>
          </div>
              <div className='mt-4'>
          <li>
                                  <NavLink className="des ms-4" to={`${url}/updateicu`} style={({ isActive }) => ({
                                      color: isActive ? "#CCCCCC" : "#CCCCCC",
                                  })}><FaTasks className='me-1' /> Update Icu</NavLink>
                              </li>
          </div>
             
          
     
    

            {/* <div className='mt-4'>
            <li>
                                  <NavLink className="des ms-4" to={`${url}/addProduct`} style={({ isActive }) => ({
                                      color: isActive ? "#CCCCCC" : "#CCCCCC",
                                  })}><FaTasks className='me-1' /> Add Product</NavLink>
                              </li>
            </div> */}

            <div className='mt-4'>
            <li>
                                  <NavLink className="des ms-4" to={`${url}/addDoctors`} style={({ isActive }) => ({
                                      color: isActive ? "#CCCCCC" : "#CCCCCC",
                                  })}><FaTasks className='me-1' /> Add Doctor</NavLink>
                              </li>
            </div>


            <div className='mt-4'>
            <li>
                                  <NavLink className="des ms-4" to={`${url}/addBlood`} style={({ isActive }) => ({
                                      color: isActive ? "#CCCCCC" : "#CCCCCC",
                                  })}><FaTasks className='me-1' /> Add Blood</NavLink>
                              </li>
            </div>

           

            <div className='mt-4'>
            <li>
                                  <NavLink className="des ms-4" to={`${url}/manageBloods`} style={({ isActive }) => ({
                                      color: isActive ? "#CCCCCC" : "#CCCCCC",
                                  })}><FaTasks className='me-1' /> Manage Blood</NavLink>
                              </li>
            </div>

            <div className='mt-4'>
            <li>
                                  <NavLink className="des ms-4" to={`${url}/newNurse`} style={({ isActive }) => ({
                                      color: isActive ? "#CCCCCC" : "#CCCCCC",
                                  })}><FaTasks className='me-1' /> Add Nurse</NavLink>
                              </li>
            </div>

            <div className='mt-4'>
            <li>
                                  <NavLink className="des ms-4" to={`${url}/manageNurses`} style={({ isActive }) => ({
                                      color: isActive ? "#CCCCCC" : "#CCCCCC",
                                  })}><FaTasks className='me-1' /> Manage Nurse</NavLink>
                              </li>
            </div>

            <div className='mt-4'>
            <li>
                                  <NavLink className="des ms-4" to={`${url}/addOrgan`} style={({ isActive }) => ({
                                      color: isActive ? "#CCCCCC" : "#CCCCCC",
                                  })}><FaTasks className='me-1' /> Add Organ</NavLink>
                              </li>
            </div>

            <div className='mt-4'>
            <li>
                                  <NavLink className="des ms-4" to={`${url}/manageOrgans`} style={({ isActive }) => ({
                                      color: isActive ? "#CCCCCC" : "#CCCCCC",
                                  })}><FaTasks className='me-1' /> Manage Organ</NavLink>
                              </li>
            </div>
        </Box>
     }

<Box>
{


!admin &&  !doctor &&
<div>

<div className='mt-4'>
            <li>
                                  <NavLink className="des ms-4" to={`${url}/blooddonates`} style={({ isActive }) => ({
                                      color: isActive ? "#CCCCCC" : "#CCCCCC",
                                  })}><FaTasks className='me-1' /> Blood Donate</NavLink>
                              </li>
            </div>

            {/* <div className='mt-4'>
            <li>
                                  <NavLink className="des ms-4" to={`${url}/ken`} style={({ isActive }) => ({
                                      color: isActive ? "#CCCCCC" : "#CCCCCC",
                                  })}><FaTasks className='me-1' /> Serial Number</NavLink>
                              </li>
            </div> */}

            <div className='mt-4'>
            <li>
                                  <NavLink className="des ms-4" to={`${url}/seeaddNursess`} style={({ isActive }) => ({
                                      color: isActive ? "#CCCCCC" : "#CCCCCC",
                                  })}><FaTasks className='me-1' /> See AddNurse</NavLink>
                              </li>
            </div>
            <div className='mt-4'>
            <li>
                                  <NavLink className="des ms-4" to={`${url}/icubooksees`} style={({ isActive }) => ({
                                      color: isActive ? "#CCCCCC" : "#CCCCCC",
                                  })}><FaTasks className='me-1' /> Icu Booking</NavLink>
                              </li>
            </div>

            <div className='mt-4'>
            <li>
                                  <NavLink className="des ms-4" to={`${url}/addOrgan`} style={({ isActive }) => ({
                                      color: isActive ? "#CCCCCC" : "#CCCCCC",
                                  })}><FaTasks className='me-1' /> Add Organ</NavLink>
                              </li>
            </div>

            <div className='mt-4'>
            <li>
                                  <NavLink className="des ms-4" to={`${url}/organDonate`} style={({ isActive }) => ({
                                      color: isActive ? "#CCCCCC" : "#CCCCCC",
                                  })}><FaTasks className='me-1' /> Organ Donate</NavLink>
                              </li>
            </div>
            <div className='mt-4'>
            <li>
                                  <NavLink className="des ms-4" to={`${url}/myOrders`} style={({ isActive }) => ({
                                      color: isActive ? "#CCCCCC" : "#CCCCCC",
                                  })}><FaTasks className='me-1' /> Product Order</NavLink>
                              </li>
            </div>
            <div className='mt-4'>
            <li>
                                  <NavLink className="des ms-4" to={`${url}/applyVideos`} style={({ isActive }) => ({
                                      color: isActive ? "#CCCCCC" : "#CCCCCC",
                                  })}><FaTasks className='me-1' /> Apply Video</NavLink>
                              </li>
            </div>
            <div className='mt-4'>
            <li>
                                  <NavLink className="des ms-4" to={`${url}/seeApplyVideo`} style={({ isActive }) => ({
                                      color: isActive ? "#CCCCCC" : "#CCCCCC",
                                  })}><FaTasks className='me-1' /> See ApplyVideo</NavLink>
                              </li>
            </div>

            <div className='mt-4'>
            <li>
                                  <NavLink className="des ms-4" to={`${url}/newNurse`} style={({ isActive }) => ({
                                      color: isActive ? "#CCCCCC" : "#CCCCCC",
                                  })}><FaTasks className='me-1' /> Add Nurse</NavLink>
                              </li>
            </div>

            <div className='mt-4'>
            <li>
                                  <NavLink className="des ms-4" to={`${url}/addBlood`} style={({ isActive }) => ({
                                      color: isActive ? "#CCCCCC" : "#CCCCCC",
                                  })}><FaTasks className='me-1' /> Add Blood</NavLink>
                              </li>
            </div>
            
           
            

</div>
}

{/* <Box> */}

  {
    hospital &&

    <Box>
       <div className='mt-4'>
    <li>
                            <NavLink className="des ms-4" to={`${url}/updateicu`} style={({ isActive }) => ({
                                color: isActive ? "#CCCCCC" : "#CCCCCC",
                            })}><FaTasks className='me-1' /> Update Icu</NavLink>
                        </li>
    </div>
    </Box>

   
  }
{/* </Box> */}


<Box>

  {

    doctor && 

    <div>
      <div className='mt-4'>
    <li>
                          <NavLink className="des ms-4" to={`${url}/doctorUpdateVideo`} style={({ isActive }) => ({
                              color: isActive ? "#CCCCCC" : "#CCCCCC",
                          })}><FaTasks className='me-1' /> Upadet Video</NavLink>
                      </li>
    </div>

    <div className='mt-4'>
            <li>
                                  <NavLink className="des ms-4" to={`${url}/addBlood`} style={({ isActive }) => ({
                                      color: isActive ? "#CCCCCC" : "#CCCCCC",
                                  })}><FaTasks className='me-1' /> Add Blood</NavLink>
                              </li>
            </div>

            <div className='mt-4'>
            <li>
                                  <NavLink className="des ms-4" to={`${url}/myOrders`} style={({ isActive }) => ({
                                      color: isActive ? "#CCCCCC" : "#CCCCCC",
                                  })}><FaTasks className='me-1' /> Product Order</NavLink>
                              </li>
            </div>

            <div className='mt-4'>
            <li>
                                  <NavLink className="des ms-4" to={`${url}/addOrgan`} style={({ isActive }) => ({
                                      color: isActive ? "#CCCCCC" : "#CCCCCC",
                                  })}><FaTasks className='me-1' /> Add Organ</NavLink>
                              </li>
            </div>
    </div>

    
  }
</Box>

         

            
</Box>
<Box>

            
           
         
          
          
           
         
          
            
</Box>
{/* <Link style={{textDecoration:'none',color:'#45a29e'}} to={`${url}/medicin`}>
            <Button className='mt-5' style={{fontSize:"23px"}} color="inherit">Medicin</Button>
            </Link> */}
            {/* <div className='mt-4'>
            <li>
                                  <NavLink className="des ms-4" to={`${url}/medicin`} style={({ isActive }) => ({
                                      color: isActive ? "#CCCCCC" : "#CCCCCC",
                                  })}><FaTasks className='me-1' /> Medicin</NavLink>
                              </li>
            </div> */}
<Box>

            <div className='mt-4'>
            <li>
                                  <NavLink className="des ms-4" to={`${url}/patient`} style={({ isActive }) => ({
                                      color: isActive ? "#CCCCCC" : "#CCCCCC",
                                  })}><FaTasks className='me-1' /> All Patient</NavLink>
                              </li>
            </div>
          </Box>
        </ul>
</Box>

{/* jjjjjj */}
      {/* <List></List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
      
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          bgcolor: '#032831',
          height:"70px",
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" style={{fontSize:"23px"}}>
            Dashboard Bangladesh Hospital Helpline
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
       
        <Switch>
        <Route exact path={path}>
         <DashboardHome></DashboardHome>
      
        </Route>
        <Route  path={`${path}/payment/:appointmentId`}>
         <Payment></Payment>
      
        </Route>
        <Route  path={`${path}/success`}>
         <BikashSuccess></BikashSuccess>
      
        </Route>
        {/* <Route  path={`${path}/medicin`}>
         <ProductPage></ProductPage>
      
        </Route> */}
        <Route  path={`${path}/addDoctors`}>

        <AddDoctors></AddDoctors>
      
        </Route>
        <Route  path={`${path}/applyVideos`}>

        <ApplyVideo></ApplyVideo>
      
        </Route>
        <Route  path={`${path}/approvedProduct`}>

        <ProductDataApproved></ProductDataApproved>
      
        </Route>
        <Route  path={`${path}/myOrders`}>

        <MyOrder></MyOrder>
      
        </Route>
        <Route  path={`${path}/seeApplyVideo`}>

        <SeeApplyVideo></SeeApplyVideo>
      
        </Route>
        <Route  path={`${path}/commingMedicine`}>

        <MedicineUpComming></MedicineUpComming>
      
        </Route>
        <Route  path={`${path}/doctorUpdateVideo`}>

        <DoctorUpdateVideo></DoctorUpdateVideo>
      
        </Route>
        <Route  path={`${path}/newNurse`}>

        <AddNurse></AddNurse>
      
        </Route>
        <Route  path={`${path}/seeaddNursess`}>

        <SeeAddNurse></SeeAddNurse>
      
        </Route>
        <Route  path={`${path}/updateicu`}>

        <UpdateBookingAdmin></UpdateBookingAdmin>
      
        </Route>
        <Route  path={`${path}/manageNurses`}>

        <ManageNurse></ManageNurse>
      
        </Route>
        <Route  path={`${path}/manageBloods`}>

        <ManageBlood></ManageBlood>
      
        </Route>
        <Route  path={`${path}/addBlood`}>

        <AddBlood></AddBlood>
      
        </Route>
        <Route  path={`${path}/blooddonates`}>

        <BloodDonate></BloodDonate>
      
        </Route>
        <Route  path={`${path}/addOrgan`}>

        <AddOrgan></AddOrgan>
      
        </Route>
        <Route  path={`${path}/organDonate`}>

        <OrganDonate></OrganDonate>
      
        </Route>
        <Route  path={`${path}/icubooksees`}>

        <IcuBookSee></IcuBookSee>
      
        </Route>
        <Route  path={`${path}/manageOrgans`}>

        <ManageOrgan></ManageOrgan>
      
        </Route>
        <Route  path={`${path}/icu`}>

        <IcuSupport></IcuSupport>
      
        </Route>
        {/* <Route  path={`${path}/ken`}>

        <AppoinrmentToken></AppoinrmentToken>
      
        </Route> */}
        <Route  path={`${path}/patient`}>
         {/* <PatientAppointment></PatientAppointment> */}
         <Patient></Patient>
      
        </Route>
        <AdminRoute path={`${path}/makeAdmin`}>
          <MakeAdmin></MakeAdmin>
        </AdminRoute>
        <AdminRoute path={`${path}/addDoctors`}>
          <AddDoctors></AddDoctors>
        </AdminRoute>
        <AdminRoute path={`${path}/icu`}>
          <IcuSupport></IcuSupport>
        </AdminRoute>
        <AdminRoute path={`${path}/adminupload`}>
          <MedicinUpload></MedicinUpload>
        </AdminRoute>
        <AdminRoute path={`${path}/ambulanceShow`}>
          <AmbulanceShow></AmbulanceShow>
        </AdminRoute>
        <AdminRoute path={`${path}/ambulancePart`}>
          <AmbulancePartUpload></AmbulancePartUpload>
        </AdminRoute>
        <AdminRoute path={`${path}/ambulance`}>
          <Ambulance></Ambulance>
        </AdminRoute>
        <AdminRoute path={`${path}/addProduct`}>
          <AddProduct></AddProduct>
        </AdminRoute>
      </Switch>
       
      
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
