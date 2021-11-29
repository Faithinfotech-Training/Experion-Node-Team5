
import {Button,Form,Row} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './LabTech.css'




function DaywiseList(){
return(
    <>
    <div id='view-test'>
        <Form>
            <Row>
                
            <Form.Group>
                <Form.Label>Date</Form.Label>
                <Form.Control type='date'></Form.Control>
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