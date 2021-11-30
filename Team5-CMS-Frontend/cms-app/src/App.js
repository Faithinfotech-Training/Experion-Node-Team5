
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
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";


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




function App() {
  return (
    <div className="App">
      <MyRouter />
    </div>
  );
}

function MyRouter() {
  
  return (
    <>

    <Router>
    <div style={{marginTop:0,marginRight:0}}>
        <Navbar className='color-nav' variant='dark'>
          <Container style={{marginRight:0}}>
          
            <Nav className='ms-auto' >
            <Navbar.Brand  href='/' style={{marginLeft:0}}>Health360</Navbar.Brand>
              <Nav.Link href='/'>Home</Nav.Link>
              <Nav.Link href='/about'>About Us</Nav.Link>
              <Nav.Link href='/login'>Login</Nav.Link>
              <Nav.Link href="tel:91 481 294 1300" style={{color:"red"}}>Emergency  +91 481 294 1300</Nav.Link>
              <Nav.Link href="https://api.whatsapp.com/send?phone=91 90 7272 6270" style={{color:"green"}}>Whatsapp +91 90 7272 6270</Nav.Link>
            </Nav>
        </Container>
      </Navbar>        
      
      </div>
      
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
          </Routes>
            </Nav>

          </Container>
        </Navbar>

     
      

      <br /><br /><br />
      

    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://copyright.gov.in/Documents/CopyrightRules1957.pdf"> Health360ltd.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>

    </Router>


    </>
    
    
  )

}
