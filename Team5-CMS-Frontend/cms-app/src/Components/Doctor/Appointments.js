import React from "react";
import { Link } from "react-router-dom";


function Appointments(props) {
  console.log(props);
  return (
    <>
      <div>
        <h4> {props.details.name}</h4>
        <div className="linkstyle">
          <Link to={`/appointmentdetails/${props.details.id}`}>View Details</Link>
        </div>
      </div>
    </>
  );
}

export default Appointments;
