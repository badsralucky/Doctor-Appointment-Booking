
import Home from "../pages/Home"
import Services from"../pages/Services"
import Login from "../pages/Login"
import SignUp from "../pages/SignUp"
import Contact from "../pages/Contact"
import Doctors from "../pages/Doctor/Doctors"
import DoctorsDetails from "../pages/Doctor/DoctorDetails"
import MyAccount from "../Dashboard/user-account/MyAccount"
import Dashboard from "../Dashboard/doctor-account/Dashboard"

import {Routes , Route} from 'react-router-dom';
import ProtectedRoute from "./ProtectedRoute";
const Routers = () => {
  return (<Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/home" element={<Home/>} />
       <Route path="/doctors" element={<Doctors/>} />
       <Route path="/doctors/:id" element={<DoctorsDetails/>} />
       <Route path="/login" element={<Login/>} />
       <Route path="/SignUp" element={<SignUp/>} />
       <Route path="/contact" element={<Contact/>} />
       <Route path="/services" element={<Services/>} />
       <Route path="/users/profile/me" element={<MyAccount/>}/>
       <Route path="/doctors/profile/me" element={<Dashboard/>} />
  </Routes>
  );
};




{<ProtectedRoute allowedRoles = {["patient"]}><MyAccount/><MyAccount/></ProtectedRoute>}

{<ProtectedRoute allowedRoles= {["doctor"]}><Dashboard/></ProtectedRoute>}

export default Routers;
