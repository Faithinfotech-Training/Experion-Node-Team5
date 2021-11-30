import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function AppointmentDetails() {
  //initializwe ths usestate to empty
  const [appointment, setAppointment] = useState([]);
  const [patient, setPatient] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams(); //passed paras stores here

  useEffect(() => {
    axios.get(`http://localhost:4000/appointments/${id}`).then((response) => {
      console.log("Promise fullfilled");
      console.log(response);
      setAppointment(response.data);
    });
  }, []);

  useEffect(() => {
    axios.get(`http://localhost:4000/patients/${id}`).then((response) => {
      console.log("Promise fullfilled");
      console.log(response);
      setPatient(response.data);
    });
  }, []);

  return (
    <>
      <div>
        <h3>Appointment ID: {appointment.AppointmentID}</h3>
        <h3>Patient Name: {patient.PatientName}</h3>
        <button
          type="button"
          onClick={() => navigate(`/addnotes/${appointment.PatientID}`)}
        >
        Add to History
        </button>
        <button
          type="button"
          onClick={() => navigate(`/labresults/${appointment.PatientID}`)}
        >
         View Lab Results
        </button>
        <button
          type="button"
          onClick={() => navigate(`/medicalhistory/${appointment.PatientID}`)}
        >
        View Medical History
        </button>
        <button
          type="button"
          onClick={() => navigate(`/patientdtails/${appointment.PatientID}`)}
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
