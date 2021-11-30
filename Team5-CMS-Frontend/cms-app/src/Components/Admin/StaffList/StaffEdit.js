import { useState,useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";

import {Form,Button} from 'react-bootstrap'

function StaffEdit(){
    const {id} = useParams()
    return(
        <>
            <h1 style={{marginTop:30,color:'rgb(85, 205, 255)'}}>Staff Edit</h1>
            <MyForm id={id} />
        </>
    )
}


function MyForm(props){
    const [staffs,setStaffs] = useState({})
    const [submitted,setSubmitted] = useState(false)

     useEffect(() => {
         axios
             .get(`http://localhost:4000/staffs/${props.id}`)
             .then(response => {
                 console.log(response)
                 setStaffs(response.data)
            })
    },[])

    function handleChange(event){
        const name = event.target.name
        const value = event.target.value
        setStaffs(values => ({...values, [name]:value}))
    }

    function handleSubmit(event){
        event.preventDefault()
        console.log(staffs)
        axios
            .put(`http://localhost:4000/staffs/${props.id}`,staffs)
            .then(response => {
                console.log(response)
                alert('User details updated')
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
                    <Form.Group className='mb-3' controlId='formAssetName'>
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

                    <Form.Group className='mb-3' controlId='formAuthor'>
                        <Form.Control
                        className='Form-Control'
                        id='DateOfBirth'
                        type='date'
                        placeholder='Enter Date Of Birth'
                        name = 'DateOfBirth'
                        value = {staffs.DateOfBirth}
                        onChange = {handleChange}
                        required
                    />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formAssetName'>
                        <Form.Control
                        className='Form-Control'
                        id='ContactNo'
                        type='number'
                        placeholder='Enter Contact No'
                        name = 'ContactNo'
                        value = {staffs.ContactNo}
                        onChange = {handleChange}
                        required
                    />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formAssetName'>
                        <Form.Control
                        className='Form-Control'
                        id='Email'
                        type='number'
                        placeholder='Enter Email'
                        name = 'Email'
                        value = {staffs.Email}
                        onChange = {handleChange}
                        required
                    />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formAssetName'>
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


                    <Form.Group className='mb-3' controlId='formAssetName'>
                        <Form.Control
                        className='Form-Control'
                        id='Role'
                        type='text'
                        placeholder='Enter Role'
                        name = 'Role'
                        value = {staffs.Role}
                        onChange = {handleChange}
                        required
                    />
                    {['radio'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check
        inline
        label="FrontOffice Staff"
        name="FrontOffice Staff"
        type={type}
        id={`inline-${type}-FrontOfficeStaff`}
      />
      <Form.Check
        inline
        label="Doctor"
        name="Doctor"
        type={type}
        id={`inline-${type}-Doctor`}
      />
      
      <Form.Check
        inline
        label="Lab Technician"
        name="LabTechnician"
        type={type}
        id={`inline-${type}-Labtechnician`}
      />
      <Form.Check
        inline
        disabled
        label="Nurse"
        type={type}
        id={`inline-${type}-Nurse`}
      />
    </div>
  ))}
                    </Form.Group>


                    <Form.Group className='mb-3' controlId='formAssetName'>
                        <Form.Control
                        className='Form-Control'
                        id='Qualification'
                        type='text'
                        placeholder='Enter Qualification Date'
                        name = 'Qualification'
                        value = {staffs.Qualification}
                        onChange = {handleChange}
                        required
                    />
                    </Form.Group>
                    

                    <Form.Group className='mb-3' controlId='formAssetName'>
                        <Form.Control
                        className='Form-Control'
                        id='Specialization'
                        type='text'
                        placeholder='Enter Specialization date'
                        name = 'Specialization'
                        value = {staffs.Specialization}
                        onChange = {handleChange}
                        required
                    />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formAssetName'>
                        <Form.Control
                        className='Form-Control'
                        id='URL'
                        type='text'
                        placeholder='Enter Drive Link having the certificates soft copy'
                        name = 'URL'
                        value = {staffs.URL}
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


export default StaffEdit