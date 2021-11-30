import React from 'react'
import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

import {Table,Button} from 'react-bootstrap'

function StaffDetails() {

    const [staffs,setStaffs] = useState([])
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios   
            .get(`http://localhost:4000/staffs/${id}`)
            .then(response => {
                console.log('Promise was fulfilled')
                setStaffs(response.data)
            })
    }, [])
    return (
        <>
        <h5 style={{marginSpecializationp:50,color:'rgb(85, 205, 255)'}}>Details of : <b style={{fontSize:40}}> {staffs.StaffName} </b></h5>
        <div style={{
            marginSpecializationp: 40, 
            width: 700, 
            marginLeft : '35%',
          }}>

          <Table striped hover variant='dark'>
              <tbody style={{color:'rgb(85, 205, 255)'}}>
                  <tr>
                      <td >StaffName</td>
                      <td style={{color:'rgb(238, 215, 188)'}}><h5>{staffs.StaffName}</h5></td>
                  </tr>
                  <tr>
                      <td>DateOfBirth</td>
                      <td><h5>{staffs.DateOfBirth}</h5></td>
                  </tr>
                  <tr>
                      <td>ContactNo</td>
                      <td style={{color:'rgb(238, 215, 188)'}}><h5>{staffs.ContactNo}</h5></td>
                  </tr>
                  <tr>
                      <td>Email</td>
                      <td style={{color:'rgb(238, 215, 188)'}}><h5>{staffs.Email}</h5></td>
                  </tr>
                  <tr>
                      <td>Address</td>
                    <td><h5>{staffs.Address}</h5></td>
                </tr>

                <tr>
                      <td>Role</td>
                    <td style={{color:'rgb(238, 215, 188)'}}><h5>{staffs.Role}</h5></td>
                </tr>
                <tr>
                      <td>Qualification</td>
                    <td><h5>{staffs.Qualification}</h5></td>
                </tr>
                <tr>
                      <td>Specialization</td>
                    <td style={{color:'rgb(238, 215, 188)'}}><h5>{staffs.Specialization}</h5></td>
                </tr>
                <tr>
                      <td>URL</td>
                    <td style={{color:'rgb(238, 215, 188)'}}><h5>{staffs.URL}</h5></td>
                </tr>
                
                
              </tbody>

            
            <br/><br/>
            </Table>
            <Button type='button' variant='primary' onClick={() => navigate(`/editstaffs/${staffs.StaffID}`)} style={{backgroundColor:'white',border:'none',color:'rgb(85, 205, 255)'}} >Edit Staff</Button>
            <Button type='button' variant='primary' style={{marginLeft:20,backgroundColor:'white',border:'none',color:'rgb(85, 205, 255)'}} onClick={()=>DeleteStaff(staffs.StaffID)}>Delete</Button>
            <br/><br/>
        <a href='/staffs' style={{color:'white'}} >Back to StaffList</a>
        </div>
        </>
    )
}

function DeleteStaff(id){
    console.log('Delete1 promise was fulfilled')
    axios   
        .delete(`http://localhost:4000/staffs/${id}`)
        .then(response => {
            console.log('Delete promise was fulfilled')
            console.log(response)
        })
        window.location= '/staffs'
}

export default StaffDetails
