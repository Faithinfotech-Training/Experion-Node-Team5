import axios from 'axios';
import {useState,useEffect} from 'react';
import TestDetails from './TestDetails';
import {Link}   from 'react-router-dom';
function TestList(){

    const[inputs, setInputs]    =   useState([])

    useEffect(() => {
        axios
        .get('http://localhost:4000/masterlabtests')
        .then((response) => {
            console.log("Promise was fullfilles")
            console.log(response)
            setInputs(response.data)
        })
    }, [])

    return(<>
        <div id='test-container'>
            <h1 style={{textAlign:'center'}}>Test</h1>
            <ul id='test-item'>
                {inputs.map(test =>
                <li id="test-list"  key={test.MasterLabTestID}>
                    <TestDetails details={test}/>
                    
                    
                    </li>
                    )}
            </ul>
            <div>
             <Link to='/addtest'><button><h2>Add Test</h2></button></Link>
         </div>
        </div>
    </>)
}

export default TestList;