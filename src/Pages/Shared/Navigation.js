import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import {makeStyles } from '@mui/styles'
import {useTheme} from '@mui/material';
import './Navigation.css'
// drawer start 
// import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
// import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const Navigation = () => {
  const {user,logout}=useAuth()
  const theme=useTheme()
  const useStyle=makeStyles({
    navIcon:{
      [theme.breakpoints.up('sm')]: {
        display:'none !important'
      }
    },
    nevItemContainer:{
      [theme.breakpoints.down('sm')]: {
        display:'none !important'
      }

      },
      navLogo:{
        [theme.breakpoints.down('sm')]: {
          textAlign:'right !important'
        }

      }
  })
  const {navIcon,nevItemContainer,navLogo}=useStyle()

  // drawer start 
  const [state, setState] = React.useState(false);

  // const toggleDrawer = (anchor, open) => (event) => {
  //   if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
  //     return;
  //   }

  //   setState({ ...state, [anchor]: open });
  // };


  const list =  (
    <Box
      sx={{ width: 300, }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
       
          <ListItem button>
          
            <ListItemText>
            <Box>
          <Link style={{textDecoration:'none',color:''}} to='/appointment'>
            <Button color="inherit">Appointment</Button>
            </Link>
          </Box>

            </ListItemText>
          </ListItem>

          <ListItem button>
          
            <ListItemText>

            {
            user.email ?
            <Box>
               <NavLink style={{textDecoration:'none',color:''}} to='/dashboard'>
            <Button color="inherit">Dashboard</Button>
            </NavLink>

            <Button onClick={logout} color="inherit">Logout</Button>
            </Box>
          
            :
           <Box>
              <NavLink style={{textDecoration:'none',color:''}} to='/login'>
            <Button color="inherit">Login</Button>
            </NavLink>
           </Box>
          
          }
          

            </ListItemText>
          </ListItem>
      
      </List>
      <Divider />
     
    </Box>
  );

  // drawer end 
  
    return (
      <>
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              className={navIcon}
              onClick={()=>setState(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography className={navLogo} variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Hospital HelpLine
            </Typography>
           {/* <div> */}
          <Box className={nevItemContainer}>
          <Link className="intotals" style={{textDecoration:'none',color:'white'}} to='/appointment'>
            <Button color="inherit">Appointment</Button>
            </Link>
          </Box>
          {
            user.email ?
            <Box className={nevItemContainer} className="intotals">
               <NavLink style={{textDecoration:'none',color:'white'}} to='/dashboard'>
            <Button color="inherit">Dashboard</Button>
            </NavLink>

            <Button  onClick={logout} color="inherit">Logout</Button>
            </Box>
          
            :
           <Box className={nevItemContainer}>
              <NavLink style={{textDecoration:'none',color:'white'}} to='/login'>
            <Button color="inherit">Login</Button>
            </NavLink>
           </Box>
          
          }

           {/* </div> */}
          </Toolbar>
        </AppBar>
      </Box>

    

      <div>
    
        <React.Fragment>
          <Button></Button>
          <Drawer
          
            open={state}
            onClose={()=>setState(false)}
          >
            {list}
          </Drawer>
        </React.Fragment>
      {/* )) */}
    </div>

      </>
      // drawer end 
    );
};

export default Navigation;