import { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
// import useAuth from '../../ManyPages/hooks/useAuth';
// import useFirebase from '../../hooks/useFirebase';
// import useAuth from '../../Hooks/useAuth'
// import CartDrawer from '../../Components/CartDrawer'
import './Header.css'
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown'
import useAuth from '../../../hooks/useAuth';
import CartDrawer from '../../../CardComponent/CartDrawer';


const Header = () => {
    const { userLogOut, user, toggle, setToggle, handleClick, admin ,ad} = useAuth()

    console.log(user.photoURL)

    const [isSticky, setSticky] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setSticky(true)
            } else {
                setSticky(false)
            }
        })
    }, []);

    return (

        <div className='header-area'>
            <Navbar expand="lg"  bg="red"  className={(isSticky) ? "navbar  navbar-expand-lg  background-design texts fixed-top" : "navbar  navbar-expand-lg "}>
                <Container>
                {/* onClick={handleClick} */}
                    <NavLink  to="/" className='logo'><span>Hospital Service</span></NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    {/* onClick={handleClick} */}
                        <Nav  className="ms-auto menu d-flex align-items-center">

                          
                            {/* <Nav style={{color:'white'}}> */}
                            <Dropdown>
      <Dropdown.Toggle className='drops' id="dropdown-basic">
        All Catagories
      </Dropdown.Toggle>

      <Dropdown.Menu className='drop-menu'>
        {/* start  */}

        <Dropdown>
      <Dropdown.Toggle className='drops' id="dropdown-basic">
        Products
      </Dropdown.Toggle>

      <Dropdown.Menu className='drops-menu'>
        <Dropdown.Item className='down-color' href="/medicindata">Medicin</Dropdown.Item>
        <Dropdown.Item className='down-color' href="/equipment">Equipment</Dropdown.Item>
        {/* <Dropdown.Item className='down-color' href="/all-categories">All-Categories</Dropdown.Item> */}
        {/* <Dropdown.Item className='down-color' href="halfsilk">Half Silk</Dropdown.Item> */}
       
       
      </Dropdown.Menu>
    </Dropdown>
    <Dropdown.Item className='down-color' href="/showambulance">Ambulance</Dropdown.Item>
    <Dropdown.Item className='down-color' href="/icudata">ICU Support</Dropdown.Item>
   
    <Dropdown.Item className='down-color' href="/showBlood">Show Blood</Dropdown.Item>
    <Dropdown.Item className='down-color' href="/showNurse">Show Nurse</Dropdown.Item>
    <Dropdown.Item className='down-color' href="/showOrgans">Show Organ</Dropdown.Item>

        {/* end  */}


         {/* start  */}
{/* 
         <Dropdown>
      <Dropdown.Toggle className='drops' id="dropdown-basic">
        Shilpo
      </Dropdown.Toggle>

      <Dropdown.Menu className='drops-menu'>
      <Dropdown.Item className='down-color' href="/showambulance">Ambulance</Dropdown.Item>
        
       
      </Dropdown.Menu>
    </Dropdown> */}

        {/* end  */}
     
        {/* <Dropdown.Item className='down-color' href="#/action-3">medicin</Dropdown.Item> */}
      
       
      </Dropdown.Menu>
    </Dropdown>
                            {/* </Nav> */}
                            <Nav.Link as={NavLink} to="/appointment" className='menu-item'>Appointment</Nav.Link>
                            <Nav.Link as={NavLink} to="/video" className='menu-item'>Video</Nav.Link>
                            <Nav.Link as={NavLink} to="/adminproductshow" className='menu-item'>Product</Nav.Link>
                            <Nav.Link as={NavLink} to="/about" className='menu-item'>About</Nav.Link>
                           
                            <Nav.Link as={NavLink} to="/contact" className='menu-item'>Contact</Nav.Link>
                           <CartDrawer/>
                           
                            {ad? <Nav.Link as={NavLink} to="/admin-dashboard/welcome" className='menu-item'>Admin Dashboard</Nav.Link> : ""}
                        </Nav>
                         {!user.email ? <Nav.Link as={NavLink} to="/login" className='menu-item'>
                            Login
                        </Nav.Link>
                            :

                            <>
                              
                                <img onClick={() => setToggle(!toggle)} src={user.photoURL ? user.photoURL : 'https://i.ibb.co/Xsnkx3L/user.png'} alt="user" className="user-image " />
                                
                            </>
                        } 


                        {user.email && <div className={toggle ? "toggle-menu shadow-lg active" : "toggle-menu"}>
                        <Nav.Link as={NavLink} to="/dashboard/welcome" className='menu-item'>Dashboard</Nav.Link>
                            <Link style={{textDecoration:"none"}} to={'/login'}><li onClick={userLogOut}>Log Out</li></Link>
                        </div>}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header; 