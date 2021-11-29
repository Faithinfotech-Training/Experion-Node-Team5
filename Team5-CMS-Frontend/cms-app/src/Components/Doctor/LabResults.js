import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function LabResults(props) {
  //initializwe ths usestate to empty
  const [appointment, setAppointment] = useState([]);
 // const navigate = useNavigate();
  const { id } = useParams(); //passed paras stores here

  useEffect(() => {
    axios.get(`http://localhost:5000/staff/${id}`).then((response) => {
      console.log("Promise fullfilled");
      console.log(response);
      setAppointment(response.data);
    });
  }, []);

  return (
    <>
      <div>
        <h2>Staff List</h2>
        <h3>Appointment ID: {appointment.id}</h3>
        <h3>Patient Name: {appointment.name}</h3>
        <h3>Lab Test Details: {appointment.test}</h3>
      </div>
    </>
  );
}
export default LabResults;
