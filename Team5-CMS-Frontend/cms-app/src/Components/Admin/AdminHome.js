
import React,{useState} from 'react'
import { Navbar, Container, Nav ,Button} from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import AddStaff from './StaffList/AddStaff';
import Staff from './StaffList/Staffs';



function AdminHomePage() {
   
  return (
    <div >
      <MyRouter />
    </div>
  );
}


function MyRouter() {
    const [staffs,setStaffs] = useState({})
    const [submitted,setSubmitted] = useState(false)
    
    function handleChange(event){
        const name = event.target.name
        const value = event.target.value

        setStaffs(values => ({...values,[name]:value}))
    }

    const handleSubmit = (event) => {
        console.log(staffs)
        event.preventDefault()
        setSubmitted(true)

            // axios   
            //     .post('http://localhost:4000/staffs/',staffs)
            //     .then(response => {
            //         console.log(response)
            //         alert(`${staffs.StaffName} added successfully`)
            //     })
            //     .catch(error => {
            //         console.log(error)
            //     })
    }

    const handleReset = () => {
        console.clear()
        setSubmitted(false)
    }
  return (
    <>
    
      
     
      <Navbar className= "col-md-12 d-none d-md-block bg-light sidebar">
        <Container style={{marginLeft:0}}>
          <Nav className='me-auto'>
            <Nav.Link href='/admin/addstaff'>Add Staff</Nav.Link>
            <Nav.Link href='/admin/stafflist'>Staff List</Nav.Link>
            <Nav.Link href='/admin/doctorlist'>Doctor List</Nav.Link>
            </Nav>
        </Container>
      </Navbar>
     
    

    <div style={{marginRight : 0,padding:20}}>
        <label>Search by Staff ID : </label>
        <input
                        id='Password'
                        type='text'
                        placeholder='EnterPassword'
                        name = 'Password'
                        value = {staffs.Password}
                        onChange = {handleSubmit}
                        required
                    />
    </div>
    </>
  )
}




export default AdminHomePage;
