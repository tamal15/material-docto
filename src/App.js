
import './App.css';
// import Homes from '../src/Pages/Home/Homes'
import {BrowserRouter as Router,  Switch, Route } from 'react-router-dom';
import Homes from './Pages/Home/Homes/Homes';
import Services from './Pages/Home/Services/Services';
import Appointments from './Pages/Appointments/Appointments/Appointments';
import Login from './Pages/Home/Login/Login/Login';
import Register from './Pages/Home/Login/Register/Register';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import PrivetRouter from './Pages/Home/Login/PrivateRouter/PrivetRouter';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import SuccessBikash from './Pages/Home/SuccessBikash/SuccessBikash';
import ProductDetails from './Pages/Dashboard/Dashboard/ProductDetails/ProductDetails';


function App() {
  return (
    <div className="App">
 
   <AuthProvider>
   <Router>
  <Switch>
    <Route exact path="/">
      <Homes></Homes>
    </Route>
    <Route path="/services">
      <Services></Services>
    </Route>
    <Route path="/success/:id">
      <SuccessBikash></SuccessBikash>
    </Route>
    <Route path='/serviceDetails/:id'>
        <ProductDetails></ProductDetails>
      </Route>
    <PrivetRouter path="/appointment">
      <Appointments></Appointments>
    </PrivetRouter>
    <PrivetRouter  path="/dashboard">
      <Dashboard></Dashboard>
    </PrivetRouter>
    <Route  path="/login">
      <Login></Login>
    </Route>
    <Route  path="/register">
      <Register></Register>
    </Route>
      
      </Switch>
  </Router>
   </AuthProvider>
   
    </div>
  );
}

export default App;
