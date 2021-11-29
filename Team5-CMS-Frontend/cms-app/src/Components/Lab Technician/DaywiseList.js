
import {Button,Form,Row} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './LabTech.css'
import React,{useState} from 'react'
import axios from 'axios';



function DaywiseList(){

    const [input,setInputs] = useState({})
    const [submitted,setSubmitted] = useState(false)
    
    function handleChange(event){
        const name = event.target.name
        const value = event.target.value

        setInputs(values => ({...values,[name]:value}))
    }

    const handleSubmit = (event) => {
        // console.log(staffs)
        event.preventDefault()
        setSubmitted(true)

            axios   
                // .get('http://localhost:4000/staffs/',staffs)
                .then(response => {
                    console.log(response)
                   
                })
                .catch(error => {
                    console.log(error)
                })
               }









return(
    <>
    <div id='view-test'>
        <Form>
            <Row>
                
            <Form.Group>
                <Form.Label>Date</Form.Label>
                <Form.Control type='date' name='test_date' value={input.test_date}></Form.Control>
                <br></br>
            <Button variant='primary'>Submit</Button>
            </Form.Group>
            
            </Row>
        </Form>
    </div>

    </>
)

}

export default DaywiseList;