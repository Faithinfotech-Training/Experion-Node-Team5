
import AdminHomePage from './Components/Admin/AdminHome';
import AddStaff from './Components/Admin/StaffList/AddStaff';
import StaffDetails from './Components/Admin/StaffList/StaffDetails';
import StaffFetch from './Components/Admin/StaffList/StaffFetch';

import './App.css';
import LabTechHome from './Components/Lab Technician/LabTechHome';
import UploadTest from './Components/Lab Technician/UploadTest';
import DaywiseList from './Components/Lab Technician/DaywiseList';

import { Navbar, Container, Nav, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Login from "./Components/Login";
import NoMatch from "./Components/NoMatch";
import DrDash from "./Components/Doctor/DrDash";
import Appointments from "./Components/Doctor/Appointments";
import AppointmentDetails from "./Components/Doctor/AppointmentDetails";
import AddNotes from "./Components/Doctor/AddNotes";
import LabResults from "./Components/Doctor/LabResults";
import MedicalHistory from "./Components/Doctor/MedicalHistory";
import PatientDetails from "./Components/Doctor/PatientDetails";
import TestList from './Components/Lab Technician/TestList';

function App() {
  return (
    <div className="App">
      <MyRouter />
    </div>
  );
}

function MyRouter() {
  var layLow = {
    position: "fixed",
    bottom: 0,
    textAlign: "center",
    width: "100%",
    padding: 20,
    color: "rgb(218, 153, 79)",
  };
  return (
    <>

      <Router>
        <h1>
          <div
            style={{
              marginTop: 40,
              padding: 10,
              backgroundColor: "#5f0000",
              color: "rgb(218, 153, 79)",
            }}
          >
            {" "}
            Health360
          </div>
        </h1>
        <h6 style={({ marginTop: 30 }, { color: "rgb(218, 153, 79)" })}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.{" "}
        </h6>
        <Navbar className="color-nav" variant="dark" style={{ marginTop: 60 }}>
          <Container style={{ marginLeft: 0 }}>
            <Navbar.Brand href="/">Health360</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About Us</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/lab">Laboratory</Nav.Link>
              <Nav.Link href="/doctor">Doctor</Nav.Link>
              <Nav.Link href="/admin">Admin</Nav.Link>
            </Nav>

          </Container>
        </Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/lab" element={<LabTechHome />} />
          <Route path="/uploadtest" element={<UploadTest />} />
          <Route path="/daywiselist" element={<DaywiseList />} />
          <Route path="*" element={<NoMatch />} />
            
         <Route path='/admin' element={<AdminHomePage/>}/>
        <Route path='/addstaff' element={<AddStaff/>} />
        <Route path='/staffs' element={<StaffFetch/>} />
        <Route path='/staffs/:id' element={<StaffDetails/>} />
        
          <Route path="/doctor" element={<DrDash />} />
          <Route path="/appointment/:id" element={<Appointments />} />
          <Route
            path="/appointmentdetails/:id"
            element={<AppointmentDetails />}
          />
          <Route path="/addnotes/:id" element={<AddNotes />} />
          <Route path="//labresults/:id" element={<LabResults />} />
          <Route path="//medicalhistory/:id" element={<MedicalHistory />} />
          <Route path="//patientdtails/:id" element={<PatientDetails />} />
          <Route path="testdetails" element={<TestList/>}/>

        </Routes>
        <br />
        <br />
        <br />
        <br />
        <br /> <br />
        <footer>
          <p style={layLow}>Copyright - All Rights Reserved</p>
        </footer>
      </Router>
    </>
  );
}

export default App;
