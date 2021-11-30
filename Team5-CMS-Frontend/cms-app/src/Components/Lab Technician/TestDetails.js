

import {Link} from "react-router-dom"

function TestDetails(props){
    
    return(<>
    <div className="testlist">
        <h4>{props.details.MasterLabTestName}</h4>
        <h4></h4>
        <div>
            {props.details}
        </div>
        
        <div >
        <Link to={`/staffdetails/${props.details.id}`}><button type='button' id='details'>View Details</button></Link><>&nbsp;</>
         </div>
    </div>
    </>)
}

export default TestDetails