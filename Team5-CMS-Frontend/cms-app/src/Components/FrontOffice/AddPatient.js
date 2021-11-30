import axios from 'axios'
import React,{useState} from 'react'

import {Form,Button} from 'react-bootstrap'


function AddPatient() {
    const [patients,setPatient] = useState({})
    const [submitted,setSubmitted] = useState(false)
    
    function handleChange(event){
        const name = event.target.name
        const value = event.target.value

        setPatient(values => ({...values,[name]:value}))
    }

    const handleSubmit = (event) => {
        console.log(patients)
        event.preventDefault()
        setSubmitted(true)

            axios   
                 .post('http://localhost:4000/patients/',patients)
                 .then(response => {
                     console.log(response)
                     alert(`${patients.PatientName} added successfully`)
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
                    {submitted?<div>Success!Patient Added</div>:null}
                    <Form.Group className='mb-3' controlId='formPatientID'>
                        <Form.Control
                        className='Form-Control'
                        id= 'PatientID'
                        type= 'text'
                        placeholder='Enter Patient Id'
                        name = 'PatientID'
                        value = {patients.PatientID}
                        onChange = {handleChange}
                        required
                    />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='formDoctorId'>
                        <Form.Control
                        className='Form-Control'
                        id= 'DoctorID'
                        type= 'text'
                        placeholder='Enter Patient DoctorId'
                        name = 'DoctorID'
                        value = {patients.DoctorID}
                        onChange = {handleChange}
                        required
                    />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='formAppoinmentId'>
                        <Form.Control
                        className='Form-Control'
                        id= 'AppointmentID'
                        type= 'text'
                        placeholder='Enter Patient AppoinmentId'
                        name = 'AppointmentID'
                        value = {patients.AppointmentID}
                        onChange = {handleChange}
                        required
                    />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='formPatientName'>
                        <Form.Control
                        className='Form-Control'
                        id= 'PatientName'
                        type= 'text'
                        placeholder='Enter Patient Name'
                        name = 'PatientName'
                        value = {patients.PatientName}
                        onChange = {handleChange}
                        required
                    />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formAuthor'>
                        <Form.Control
                        className='Form-Control'
                        id='DateOfBirth'
                        type='date'
                        placeholder='Enter Date Of Birth'
                        name = 'DateOfBirth'
                        value = {patients.DateOfBirth}
                        onChange = {handleChange}
                        required
                    />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formAge'>
                        <Form.Control
                        className='Form-Control'
                        id='Age'
                        type='text'
                        placeholder='Enter Your Age'
                        name = 'Age'
                        value = {patients.Age}
                        onChange = {handleChange}
                        required
                    />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='formContactNumber'>
                        <Form.Control
                        className='Form-Control'
                        id='ContactNo'
                        type='number'
                        placeholder='Enter Contact No'
                        name = 'ContactNo'
                        value = {patients.ContactNo}
                        onChange = {handleChange}
                        required
                    />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formPatientEmail'>
                        <Form.Control
                        className='Form-Control'
                        id='Email'
                        type='text'
                        placeholder='Enter Email'
                        name = 'Email'
                        value = {patients.Email}
                        onChange = {handleChange}
                        required
                    />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formPatientAddress'>
                        <Form.Control
                        className='Form-Control'
                        id='Address'
                        type='text'
                        placeholder='Enter Address'
                        name = 'Address'
                        value = {patients.Address}
                        onChange = {handleChange}
                        required
                    />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='formStaffName'>
                        <Form.Control
                        className='Form-Control'
                        id='BloodGroup'
                        type='text'
                        placeholder='Blood group'
                        name = 'BloodGroup'
                        value = {patients.BloodGroup}
                        onChange = {handleChange}
                        required
                    />
                    </Form.Group>
                    
                  

                <Button type='submit' variant='primary' style={{backgroundColor:'white',border:'none',color:'rgb(85, 205, 255)'}}>Register</Button>
                <Button type='reset' variant='primary' style={{backgroundColor:'white',border:'none',color:'rgb(85, 205, 255)',marginLeft:20}} onClick={handleReset} >Cancel</Button>
                </Form>
            </div>        
        </div>
    )
}


export default AddPatient