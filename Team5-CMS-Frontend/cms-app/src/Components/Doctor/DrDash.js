
import React, { useState } from "react";
import './App.css'
import { useNavigate } from "react-router-dom";
function DrDash() {
  const [doctor, setDoctor] = useState([]);  //for storing doctor details
  const [patient, setPatient] = useState([]);  //for storing patient details
  const navigate = useNavigate();
  return (
    <div>
      <div >
        <button
          type="button"
          variant="primary"
          onClick={() => navigate(`/appointment/${doctor.id}`)}
        >
          Appointments
        </button>
        <br />
        <br />
        <button
          type="button"
          variant="primary"
          onClick={() => navigate(`/patients/${patient.id}`)}
        >
          Patient Record
        </button>
      </div>
    </div>
  );
}

export default DrDash;
