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


// import Calender from '../../Shared/Calender/Calender';
// import DeshboardAppointment from '../DeshboardAppointment/DeshboardAppointment';
// import { Link } from 'react-router-dom';
import DashboardHome from '../DashboardHome/DashboardHome';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
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

const drawerWidth = 200;

function Dashboard(props) {
  const { window } = props;
  const {admin}=useAuth()
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const {user}=useAuth()
  let { path, url } = useRouteMatch();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="desh">
      {/* <Toolbar sx={{background:"#1f2833"}}  /> */}
      <Toolbar className="" sx={{background:"#1f2833", color:"white"}}><h3 className='tools'>{user.displayName}</h3></Toolbar>
      <Divider sx={{background:"gray"}} />
      <Link  style={{textDecoration:'none',color:'#45a29e'}} to='/appointment'>
            <Button  color="inherit">Appointment</Button>
            </Link>
     <div>
     <Link  style={{textDecoration:'none',color:'#45a29e'}} to='/'>
            <Button  color="inherit">Home</Button>
            </Link>
     </div>
      <Link style={{textDecoration:'none',color:'#45a29e'}} to={`${url}`}>
            <Button color="inherit">Deshboard</Button>
            </Link>
      
     {
        admin && 
        <Box>
           <Link style={{textDecoration:'none',color:'#45a29e'}} to={`${url}/makeAdmin`}>
            <Button color="inherit">User Admin</Button>
            </Link>
     
      <Link style={{textDecoration:'none',color:'#45a29e'}} to={`${url}/addProduct`}>
            <Button color="inherit">Add Product</Button>
            </Link>
        </Box>
     }

<Box>
<Link style={{textDecoration:'none',color:'#45a29e'}} to={`${url}/addDoctor`}>
            <Button color="inherit">Add Doctor</Button>
            </Link>
</Box>
<Box>
<Link style={{textDecoration:'none',color:'#45a29e'}} to={`${url}/ken`}>
            <Button color="inherit">Serial Nuber</Button>
            </Link>
</Box>
<Link style={{textDecoration:'none',color:'#45a29e'}} to={`${url}/medicin`}>
            <Button color="inherit">Medicin</Button>
            </Link>
<Box>
<Link style={{textDecoration:'none',color:'#45a29e'}} to={`${url}/patient`}>
            <Button color="inherit">All Patient</Button>
            </Link>
</Box>
      {/* <List>
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
          <Typography variant="h6" noWrap component="div">
            Dashboard
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
        <Route  path={`${path}/medicin`}>
         <ProductPage></ProductPage>
      
        </Route>
        <Route  path={`${path}/addDoctor`}>

        <AddDoctor></AddDoctor>
      
        </Route>
        <Route  path={`${path}/ken`}>

        <AppoinrmentToken></AppoinrmentToken>
      
        </Route>
        <Route  path={`${path}/patient`}>
         {/* <PatientAppointment></PatientAppointment> */}
         <Patient></Patient>
      
        </Route>
        <AdminRoute path={`${path}/makeAdmin`}>
          <MakeAdmin></MakeAdmin>
        </AdminRoute>
        <AdminRoute path={`${path}/addDoctor`}>
          <AddDoctor></AddDoctor>
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
