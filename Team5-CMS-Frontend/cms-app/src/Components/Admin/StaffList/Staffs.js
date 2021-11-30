import React from 'react'
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

import {Table,Nav,Button} from 'react-bootstrap'

function Staff(props) {

    const navigate = useNavigate()
    console.log(props)
    var linkstyle = {
        padding : 5,
        backgroundColor :'navyblue',
        color : 'white'
    }
    return(
        <div>
        <div style={{
                    marginTop: 30, 
                    width: 600, 
                    marginLeft : '33%',
                  }}>
        <Table striped  hover variant='lg' className='color-table'>
            <tbody>
                <tr>
                    
{/*<td> <img src={props.details.Url} alt='Staff Cover' width='100px' height='100px' onClick={() => history.push(`/staffs/${props.details.StaffID}`)} /></td>
                    <td>
                    <h4 marginTop='20px'>{props.details.StaffName}</h4>
                    </td>
                    <td>
                    <Link to={`/staffs/${props.details.StaffID}`}><h4 marginTop='20px'>{props.details.StaffName}</h4></Link>
                    </td>*/}
                    <td >
                        <Nav.Link variant='pills' href={`/staffs/${props.details.StaffID}`}><h4 style={{marginTop:'30px',color:'black'}}>{props.details.StaffName}</h4></Nav.Link>
                    </td>
                    <td>
                    <Button type='button' variant='primary' onClick={() => navigate(`/editstaffs/${props.details.StaffID}`)} style={{marginTop:'40px',backgroundColor:'white',border:'none',color:'rgb(85, 205, 255)'}} >Edit</Button>
                    </td>
                    <td>
                    <Button type='button' variant='primary' onClick={()=>DeleteStaff(props.details.StaffID)} style={{marginTop:'40px',backgroundColor:'white',border:'none',color:'rgb(85, 205, 255)'}}>Delete</Button>
                    </td>
                </tr>
            </tbody>
            </Table>
            </div>
        </div>
    )

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
}

export default Staff