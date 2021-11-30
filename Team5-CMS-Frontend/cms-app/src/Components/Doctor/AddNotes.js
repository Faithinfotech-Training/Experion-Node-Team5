import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";

function AddNotes() {
  const { id } = useParams();


  return (
    <>
      {/* <h1 style={bg}>Staff Edit</h1> */}
      <MyForm id={id} />
    </>
  );
}

function MyForm(props) {
  
  //initialize to empty
  const [inputs, setInputs] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:5000/staff/${props.id}`).then((response) => {
      console.log("Promise fullfilled");
      console.log(response);
      setInputs(response.data);
    });
  }, []);

  //handle the change of form elements
  function handleChange(event) {
    //saving the name of element and its value
    const name = event.target.name;
    const value = event.target.value;

    //updating the values into the state
    setInputs((values) => ({ ...values, [name]: value }));
  }
  function handleSubmit(event) {
    //to prevent the default html form submit behaviour
    event.preventDefault();
    //printing the values to console
    console.log(inputs);
    axios
      .put(`http://localhost:5000/staff/${props.id}`, inputs)
      .then((response) => {
        console.log("fullfilled...");
        console.log(response);
        alert("Details Updated Successfully!!");
      })
      .catch((err) => {
        console.log(err);
      });
    //  window.location('')
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <h2>Add Notes and Prescription</h2>
            <div>
              <label>Notes: </label>
              <textarea            
                type="text"
                name="notes"
                value={inputs.notes || ""}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Prescription: </label>
              <textarea            
                type="text"
                name="prescription"
                value={inputs.prescription || ""}
                onChange={handleChange}
                required
              />
            </div>
            <div   >
              <input type="submit"></input>
              <button>Cancel</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
 export default AddNotes;

