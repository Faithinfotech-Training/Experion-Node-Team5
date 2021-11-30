import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function PatientDetails(props) {
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
        <h2>Patient Details</h2>
        <h3>Appointment ID: {appointment.id}</h3>
        <h3>Patient Name: {appointment.name}</h3>
        <h3>Age: {appointment.age}</h3>
        <h3>Blood Group: {appointment.bloodgroup}</h3>
        <h3>Contact Number: {appointment.contactnumber}</h3>

      </div>
    </>
  );
}
export default PatientDetails;