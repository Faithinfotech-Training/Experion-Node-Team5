import './App.css';

import { Navbar, Container, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";


import Home from './Components/Home';
import About from './Components/About';
import Login from './Components/Login';
import NoMatch from './Components/NoMatch';
import AdminHomePage from './Components/Admin/AdminHome';
import AddStaff from './Components/Admin/StaffList/AddStaff';
import StaffDetails from './Components/Admin/StaffList/StaffDetails';
import StaffFetch from './Components/Admin/StaffList/StaffFetch';





function App() {
  return (
    <div className="App">
      <MyRouter />
    </div>
  );
}


function MyRouter() {
  var layLow = {
    position : 'fixed',
    bottom : 0,
    textAlign : 'center',
    width : '100%',
    padding : 20,
    color: 'rgb(218, 153, 79)'
  }
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
      
      {/* <h1>
      <div style={{
            marginTop: 40, 
            padding : 10,
            backgroundColor : '#5f0000',
            color : 'rgb(218, 153, 79)'
          }}> Health360
          </div></h1>
      <h6 style={{marginTop:30},{color:'rgb(218, 153, 79)'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </h6> */}

     
      <Navbar className='color-nav' variant='dark' style={{marginTop:10,width:250}}>
        <Container style={{marginLeft:0}}>
          <Nav className='flex-column'>
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/about'>About Us</Nav.Link>
            <Nav.Link href='/login'>Login</Nav.Link>
            </Nav>
        </Container>
      </Navbar>
     
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='*' element={<NoMatch/>} />
        <Route path='/admin' element={<AdminHomePage/>}/>
        <Route path='/addstaff' element={<AddStaff/>} />
        <Route path='/staffs' element={<StaffFetch/>} />
        <Route path='/staffs/:id' element={<StaffDetails/>} />
        

        {/* <Route path='*' element={<NoMatch/>} /> */}
      </Routes>
      

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



export default App;
