
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
import AddDoctors from './Pages/Dashboard/Dashboard/AddDoctors/AddDoctors';
import DisplayShowMedicin from './Pages/Dashboard/DashboardHome/AdminDashboard/ShowMedicin/DisplayShowMedicin';
import CartContextProvider from './Contextcart/CartContext';
import OrderReviewPage from './Pages/OrderReviewPage/OrderReviewPage';
import PaymentMedicin from './Pages/OrderReviewPage/PaymentMedicin/PaymentMedicin';
import SuccessOrder from './Pages/OrderReviewPage/SuccessOrder/SuccessOrder';
import MedicinProductShow from './Pages/Home/MedicinProduct/MedicinProductShow';
import AmbulancePartUpload from './Pages/Dashboard/AmbulanceService/AmbulancePartUpload';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import ShowProductValue from './Pages/Dashboard/DashboardHome/ShowProductValue/ShowProductValue';
import AmbulanceServiceShow from './Pages/Dashboard/AmbulanceService/AmbulanceServiceShow/AmbulanceServiceShow';
import ShowView from './Pages/Dashboard/AmbulanceService/ShowView';
import VideoSession from './Pages/Appointments/VideoSession/VideoSession';
import RoomPage from './Pages/Appointments/VideoSession/RoomPage/RoomPage';
import IcuSupport from './Pages/Dashboard/Dashboard/IcuSupport/IcuSupport';
import IcuBookingSystem from './Pages/Appointments/IcuBooking/IcuBookingSystem';
import UpdateBookingAdmin from './Pages/Appointments/IcuBooking/UpdateBookingAdmin';

import UserSeeBook from './Pages/Appointments/IcuBooking/UserSeeBook';
import AddBlood from './Pages/Dashboard/UserBlood/AddBlood';
import BloodDonate from './Pages/Dashboard/UserBlood/BloodDonate';
import ManageBlood from './Pages/Dashboard/UserBlood/ManageBlood';
import ShowBlood from './Pages/Dashboard/UserBlood/ShowBlood';
import AddNurse from './Pages/Dashboard/UserNurse/AddNurse';
import SeeAddNurse from './Pages/Dashboard/UserNurse/SeeAddNurse';
import ManageNurse from './Pages/Dashboard/UserNurse/ManageNurse';
import ShowNurse from './Pages/Dashboard/UserNurse/ShowNurse';
import AddOrgan from './Pages/Dashboard/UsersOrgan/AddOrgan';
import OrganDonate from './Pages/Dashboard/UsersOrgan/OrganDonate';
import ManageOrgan from './Pages/Dashboard/UsersOrgan/ManageOrgan';
import ShowOrgan from './Pages/Dashboard/UsersOrgan/ShowOrgan';
import DetailsAppointment from './Pages/DetailsAppointment/DetailsAppointment';
import MedicineDetails from './Pages/DetailsAppointment/MedicineDetails/MedicineDetails';
import EquipmentProduct from './Pages/Home/MedicinProduct/EquipmentProduct/EquipmentProduct';
import IcuBookSee from './Pages/Dashboard/UserBlood/IcuBookSee/IcuBookSee';
import MyOrder from './Pages/Dashboard/DashboardHome/MyOrder/MyOrder';
import ApplyVideo from './Pages/Dashboard/DashboardHome/ApplyVideo/ApplyVideo';
import SeeApplyVideo from './Pages/Dashboard/DashboardHome/ApplyVideo/SeeApplyVideo';
import DoctorUpdateVideo from './Pages/Dashboard/DashboardHome/ApplyVideo/DoctorUpdateVideo';
import ProductDataApproved from './Pages/Dashboard/DashboardHome/AdminDashboard/ProductDataApproved/ProductDataApproved';
import DetailsIcu from './Pages/DetailsAppointment/DetailsIcu';
import MedicineUpComming from './Pages/Dashboard/Dashboard/MedicineUpComming/MedicineUpComming';



function App() {
  return (
    <div className="App">
 
   <AuthProvider>
    <CartContextProvider>

    <Router>
  <Switch>
    <Route exact path="/">
      <Homes></Homes>
    </Route>
    <Route path="/services">
      <Services></Services>
    </Route>
    <Route path="/icudata">
      <IcuBookingSystem></IcuBookingSystem>
    </Route>
    <Route path="/updateicu">
      <UpdateBookingAdmin></UpdateBookingAdmin>
    </Route>
    <Route path="/userSeeBook">
      <UserSeeBook></UserSeeBook>
    </Route>
    <Route path="/addDoctors">
      <AddDoctors></AddDoctors>
    </Route>
    <Route path="/addBlood">
      <AddBlood></AddBlood>
    </Route>
    <Route path="/addNurses">
      <AddNurse></AddNurse>
    </Route>
    <Route path="/blooddonates">
      <BloodDonate></BloodDonate>
    </Route>
    <Route path="/seeaddNursess">
      <SeeAddNurse></SeeAddNurse>
    </Route>
    <Route path="/manageBloods">
      <ManageBlood></ManageBlood>
    </Route>
    <Route path="/manageNurses">
      <ManageNurse></ManageNurse>
    </Route>
    <Route path="/showBlood">
      <ShowBlood></ShowBlood>
    </Route>
    <Route path="/icubooksees">
      <IcuBookSee></IcuBookSee>
    </Route>
    <Route path="/showNurse">
      <ShowNurse></ShowNurse>
    </Route>
    <Route path="/addOrgan">
      <AddOrgan></AddOrgan>
    </Route>
    <Route path="/organDonate">
      <OrganDonate></OrganDonate>
    </Route>
    <Route path="/manageOrgans">
      <ManageOrgan></ManageOrgan>
    </Route>
    <Route path="/showOrgans">
      <ShowOrgan></ShowOrgan>
    </Route>
    <Route path="/icu">
      <IcuSupport></IcuSupport>
    </Route>
    <Route path="/commingMedicine">
      <MedicineUpComming></MedicineUpComming>
    </Route>
    <Route path="/myOrders">
      <MyOrder></MyOrder>
    </Route>
    <Route path="/applyVideos">
      <ApplyVideo></ApplyVideo>
    </Route>
    <Route path="/seeApplyVideo">
      <SeeApplyVideo></SeeApplyVideo>
    </Route>
    <Route path="/doctorUpdateVideo">
      <DoctorUpdateVideo></DoctorUpdateVideo>
    </Route>
    <Route path="/approvedProduct">
      <ProductDataApproved></ProductDataApproved>
    </Route>
    <Route path="/video">
      <VideoSession></VideoSession>
    </Route>
    <Route path="/room/:roomId">
      <RoomPage></RoomPage>
    </Route>
    {/* <Route path="/room/:roomId" element={<RoomPage />} /> */}
    <Route path="/success/:id">
      <SuccessBikash></SuccessBikash>
    </Route>
    <Route path='/serviceDetails/:id'>
        <ProductDetails></ProductDetails>
      </Route>
    <Route path='/Details/:id'>
        <DetailsAppointment></DetailsAppointment>
      </Route>
    <Route path='/IcuDetails/:id'>
        <DetailsIcu></DetailsIcu>
      </Route>
    <Route path='/producDetails/:id'>
        <MedicineDetails></MedicineDetails>
      </Route>
      {/* <Route path="Details/:id" element={<DetailsAppointment />}/> */}
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
    <Route  path="/successs/:id">
      <SuccessOrder></SuccessOrder>
    </Route>
    <Route  path="/OrderReview">
      <OrderReviewPage></OrderReviewPage>
    </Route>
    <Route  path="/ambulancePart">
      <AmbulancePartUpload></AmbulancePartUpload>
    </Route>
    <Route  path="/medicindata">
      <MedicinProductShow></MedicinProductShow>
    </Route>
    <Route  path="/equipment">
      <EquipmentProduct></EquipmentProduct>
    </Route>
    <Route  path="/payment">
      <PaymentMedicin></PaymentMedicin>
    </Route>
    <Route  path="/about">
      <About></About>
    </Route>
    
    <Route  path="/contact">
      <Contact></Contact>
    </Route>
    <Route  path='/bookDetails/:id'>
      <ShowView></ShowView>
    </Route>
   
    <Route  path="/showambulance">
      <AmbulanceServiceShow></AmbulanceServiceShow>
    </Route>
    <Route  path="/adminproductshow">
      <ShowProductValue></ShowProductValue>
    </Route>
    <Route  path="/showMedicin">
      <DisplayShowMedicin></DisplayShowMedicin>
    </Route>
      
      </Switch>
  </Router>

    </CartContextProvider>

   </AuthProvider>
   
    </div>
  );
}

export default App;
