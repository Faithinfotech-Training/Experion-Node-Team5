import './App.css';

import { Navbar, Container, Nav ,Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Components/Home';
import About from './Components/About';
import Login from './Components/FrontOffice/Home';
import NoMatch from './Components/NoMatch';


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
      
      <h1>
      <div style={{
            marginTop: 40, 
            padding : 10,
            backgroundColor : '#5f0000',
            color : 'rgb(218, 153, 79)'
          }}> Health360
          </div></h1>
      <h6 style={{marginTop:30},{color:'rgb(218, 153, 79)'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </h6>

     
      <Navbar className='color-nav' variant='dark' style={{marginTop:60}}>
        <Container style={{marginLeft:0}}>
        <Navbar.Brand  href='/' >Health360</Navbar.Brand>
          <Nav className='me-auto'>
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
      </Routes>
      

      <br /><br /><br />
      <br /><br /> <br />
      <footer >
        <p style={layLow}>Copyright - All Rights Reserved</p>
      </footer>
    </Router>
</>
  )
}



export default App;
