import axios from 'axios';
import {useState,useEffect} from 'react';
import TestDetails from './TestDetails';

function TestList(){

    const[inputs, setInputs]    =   useState([])

    useEffect(() => {
        axios
        .get(' http://localhost:4000//masterlabtests')
        .then((response) => {
            console.log("Promise was fullfilles")
            console.log(response)
            setInputs(response.data)
        })
    }, [])

    return(<>
        <div id='staff-container'>
            <h1 style={{textAlign:'center'}}>Test</h1>
            <ul id='test-item'>
                {inputs.map(test =>
                <li id="test-list"  key={test.MasterLabTestID}>
                    <TestDetails details={test}/>
                    
                    
                    </li>
                    )}
            </ul>
        </div>
    </>)
}

export default TestList;