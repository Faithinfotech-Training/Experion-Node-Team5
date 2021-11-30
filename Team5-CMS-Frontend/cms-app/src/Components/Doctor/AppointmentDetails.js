import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function AppointmentDetails() {
  //initializwe ths usestate to empty
  const [appointment, setAppointment] = useState([]);
  const navigate = useNavigate();
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
        <button
          type="button"
          onClick={() => navigate(`/addnotes/${appointment.id}`)}
        >
        Add to History
        </button>
        <button
          type="button"
          onClick={() => navigate(`/labresults/${appointment.id}`)}
        >
         View Lab Results
        </button>
        <button
          type="button"
          onClick={() => navigate(`/medicalhistory/${appointment.id}`)}
        >
        View Medical History
        </button>
        <button
          type="button"
          onClick={() => navigate(`/patientdtails/${appointment.id}`)}
        >
         View Patient Details
        </button>
        <br />
        <br />
      </div>
    </>
  );
}
export default AppointmentDetails;
