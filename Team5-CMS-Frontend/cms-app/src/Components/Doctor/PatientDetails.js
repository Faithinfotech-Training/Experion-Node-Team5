import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function PatientDetails(props) {
  //initializwe ths usestate to empty
  const [appointment, setAppointment] = useState([]);
 // const navigate = useNavigate();
  const { id } = useParams(); //passed paras stores here

  useEffect(() => {
    axios.get(`http://localhost:4000/patients/${id}`).then((response) => {
      console.log("Promise fullfilled");
      console.log(response);
      setAppointment(response.data);
    });
  }, []);

  return (
    <>
      <div>
        <h2>Patient Details</h2>
        <h3>Appointment ID: {appointment.PatientID}</h3>
        <h3>Patient Name: {appointment.PatientName}</h3>
        <h3>Age: {appointment.Age}</h3>
        <h3>Blood Group: {appointment.BloodGroup}</h3>
        <h3>Contact Number: {appointment.ContactNo}</h3>

      </div>
    </>
  );
}
export default PatientDetails;