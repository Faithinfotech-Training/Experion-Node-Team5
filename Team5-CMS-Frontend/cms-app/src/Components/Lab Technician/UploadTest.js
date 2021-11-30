import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LabTech.css";
import React,{useState} from 'react'
import axios from 'axios'

function UploadTest() {

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
                // .post('http://localhost:4000/staffs/',staffs)
                .then(response => {
                    console.log(response)
                   
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
    <>
      <h2 style={{ textAlign: "center", fontFamily: "monospace" }}>
        UPLOAD TEST RESULT
      </h2>
      <div id="upload-formcontainer">
        <Form id="upload-form" onSubmit={handleSubmit}>
          <Form.Group className="mb-2" controlId="testupload">
            <Form.Label>Patient ID</Form.Label>
            <Form.Control type="text" placeholder="Patient Id" value={input.patientid} name='patientid' onChange={handleChange}/>
            <Form.Label>Test</Form.Label>
            <Form.Select id="test-select"   name='testname' value={input.testname} onChange={handleChange}>
              <option>Choose test</option>
              <option value="blood-sugar">Blood Sugar</option>
              <option value="blood-pressue">Blood Pressure</option>
              <option value="cholestrol">Cholestrol</option>
            </Form.Select>
            <Form.Label>Patient Value</Form.Label>
            <Form.Control
              type="number"
              placeholder="Patient Value"
              name='patientValue'
              onChange={handleChange}
              value={input.patientValue}
            ></Form.Control>
            <Form.Label>Normal Value</Form.Label>
            <Form.Control type="text" placeholder="Normal Value" name='normalValue' onChange={handleChange} value={input.normalValue}></Form.Control>
            <Form.Label>Status</Form.Label>
            <Form.Control type="text" placeholder="Status" name='status' onChange={handleChange} value={input.status}></Form.Control>
            <Form.Label>Unit</Form.Label>
            <Form.Control type="text" placeholder="Unit" name='unit' onChange={handleChange} value={input.unit}></Form.Control>
            <Form.Label>Date</Form.Label>
            <Form.Control type="date" placeholder="Date"  name='date' onChange={handleChange}value={input.date}></Form.Control>
            <br></br>
            <Button type='submit' variant="primary" >Submit</Button> <>&nbsp;</>
            <Button type='reset' variant="secondary" onClick={handleReset}>Clear</Button>
          </Form.Group>
        </Form>
      </div>
    </>
  );
}

export default UploadTest;
