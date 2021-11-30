import axios from 'axios'
import React,{useState} from 'react'

import {Form,Button} from 'react-bootstrap'


function AddStaff() {
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

            axios   
                 .post('http://localhost:4000/staffs/',staffs)
                 .then(response => {
                     console.log(response)
                     alert(`${staffs.StaffName} added successfully`)
                 })
                 .catch(error => {
                     console.log(error)
                 })
    }

    const handleReset = () => {
        console.clear()
        setSubmitted(false)
    }
    
    return (
        <div>
            <div style={{ 
                    display: 'block', 
                    width: 700, 
                    padding: 30 ,
                    marginLeft : '35%',
                    marginSpecializationp : 50,
                    backgroundColor : 'rgb(85, 205, 255)'
                  }} > 
                <Form onSubmit={handleSubmit}>
                    {submitted?<div>Success!Staff Added</div>:null}
                    <Form.Group className='mb-3' controlId='formStaffName'>
                        <Form.Control
                        className='Form-Control'
                        id= 'StaffName'
                        type= 'text'
                        placeholder='Enter StaffName'
                        name = 'StaffName'
                        value = {staffs.StaffName}
                        onChange = {handleChange}
                        required
                    />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formRoleID'>
                        <Form.Control
                        className='Form-Control'
                        id='RoleID'
                        type='number'
                        placeholder='Enter RoleID'
                        name = 'RoleID'
                        value = {staffs.RoleID}
                        onChange = {handleChange}
                        required
                    />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formDateOfBirth'>
                        <Form.Control
                        className='Form-Control'
                        id='DateOfBirth'
                        type='date'
                        placeholder='Enter DateOfBirth'
                        name = 'DateOfBirth'
                        value = {staffs.DateOfBirth}
                        onChange = {handleChange}
                        required
                    />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formAddress'>
                        <Form.Control
                        className='Form-Control'
                        id='Address'
                        type='text'
                        placeholder='Enter Address'
                        name = 'Address'
                        value = {staffs.Address}
                        onChange = {handleChange}
                        required
                    />
                    </Form.Group>


                    <Form.Group className='mb-3' controlId='formDateOfJoining'>
                        <Form.Control
                        className='Form-Control'
                        id='DateOfJoining'
                        type='date'
                        placeholder='Enter DateofJoining'
                        name = 'DateOfJoining'
                        value = {staffs.dateOfJoining}
                        onChange = {handleChange}
                        required
                    />
                </Form.Group>



                    <Form.Group className='mb-3' controlId='formDateOfResignation'>
                        <Form.Control
                        className='Form-Control'
                        id='DateOfResignation'
                        type='date'
                        placeholder='Enter DateOfResignation'
                        name = 'DateOfResignation'
                        value = {staffs.DateOfResignation}
                        onChange = {handleChange}
        
                    />
                    </Form.Group>
                    

                    <Form.Group className='mb-3' controlId='formRemarks'>
                        <Form.Control
                        className='Form-Control'
                        id='Remarks'
                        type='text'
                        placeholder='Enter Remarks'
                        name = 'Remarks'
                        value = {staffs.Remarks}
                        onChange = {handleChange}
                        
                    />
                    </Form.Group>

                <Button type='submit' variant='primary' style={{backgroundColor:'white',border:'none',color:'rgb(85, 205, 255)'}}>Register</Button>
                <Button type='reset' variant='primary' style={{backgroundColor:'white',border:'none',color:'rgb(85, 205, 255)',marginLeft:20}} onClick={handleReset} >Cancel</Button>
                </Form>
            </div>        
        </div>
    )
}


export default AddStaff