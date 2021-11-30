import {useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import { useNavigate } from 'react-router';

import axios from 'axios'






function ViewTestDetails(){
    const[input, setInputs]    =   useState([])
    const{id}= useParams()
    const navigate= useNavigate()

    useEffect(() => {
        axios
        .get( `http://localhost:4000/masterlabtests/${id}`)
        .then((response) => {
            console.log("Promise was fullfilles")
            console.log(response)
            setInputs(response.data)
        })
    }, [])

return(<>
 <div id='test-container'>
            
           <h2>{input.MasterLabTestName}<>&nbsp;</></h2>
           <h2></h2>
           <h2>{input.Description}</h2>
           <h2>{input.NormalRange}</h2>
           
           <div><button type='button' id="delete" onClick={()=>DeleteStaff(input.MasterLabTestID)}>Delete</button><>&nbsp;</>
           <button type='button' id="edit" onClick={()=>navigate(`/testedit/${input.MasterLabTestID}`)}>Edit</button>
           </div>
           <div>
            <br></br>
          
           
           </div>
           </div>
</>)

}

function DeleteStaff(id){

    axios
    .delete( `http://localhost:4000/masterlabtests/${id}`)
    .then((response) => {
        console.log("Promise was fullfilles")
        console.log(response)

        
    })
    alert(`${id} Deleted`)
    //  window.location='/testdetails'

}













export default ViewTestDetails;