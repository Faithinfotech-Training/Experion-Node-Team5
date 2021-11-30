import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function LabResults(props) {
  //initializwe ths usestate to empty
  const [report, setReport] = useState([]);
  const [patient, setPatient] = useState([]);
  // const navigate = useNavigate();
  const { id } = useParams(); //passed paras stores here

  useEffect(() => {
    axios.get(`http://localhost:4000/labreports/${id}`).then((response) => {
      console.log("Promise fullfilled");
      console.log(response);
      setReport(response.data);
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
        <h3>Appointment ID: {report.LabReportID}</h3>
        <h3>Patient Name: {patient.name}</h3>
        <h3>Lab Test Details: {report.Comments}</h3>
      </div>
    </>
  );
}
export default LabResults;
