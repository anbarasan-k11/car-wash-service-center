import React from "react";

import { BrowserRouter, Route, Routes, Router } from "react-router-dom";
import "./App.css";
import ChildComponent from "./components/customer/customer-signup";
import Employee from "./components/employee/employee";
//import Customer_form from "./components/customer/customer form";
import Homepage from "./components/homepage";
import { ManagerLogin } from "./components/manager/manager_login";
import Service_form from "./components/manager/car service form";
import User from "./components/dashbord/users";
import Dashbord from "./components/dashbord/dashbord";
import Profile from "./components/customer/customer profile";
import Employee_info from "./components/employee/employeeinfo";
import { CustomerLogin } from "./components/customer/customer_login";
import { EmployeeLogin } from "./components/employee/employee login";
import Addemployee from "./components/manager/addemployee";
import Wash_history from "./components/dashbord/wash history";
import { Customerviewprofile } from "./components/customer/customerviewprofile";
function App() {
  return (
    <div style={{ height: 600 }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          {/* <Route path="/signup" element={<ChildComponent />}></Route> */}
          <Route path="/customer_login" element={<CustomerLogin />}></Route>
          <Route path="/Managerlogin" element={<ManagerLogin />}></Route>
          <Route path="/users" element={<User />}></Route>
          <Route path="/dashbord" element={<Dashbord />}></Route>
          <Route path="/car service form" element={<Service_form />}></Route>
          <Route path="/employee_login" element={<EmployeeLogin />}></Route>
          <Route path="/customer-profile" element={<Profile />}></Route>
          {/* <Route path="/customer-form" element={<Customer_form />}></Route> */}
          <Route path="/employe_edetails" element={<Employee />}></Route>
          <Route path="/add_employee" element={<Addemployee />}></Route>
          <Route path="/employee_info" element={<Employee_info />}></Route>
          <Route path="/wah_history" element={<Wash_history />}></Route>
          <Route
            path="/customer_view_profile"
            element={<Customerviewprofile />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
