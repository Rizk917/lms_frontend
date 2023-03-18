import React, { useState } from "react";
import "./first.css";
import { Link } from "react-router-dom";

import axios from "axios";
function AddClasses() {
  const [Class_Name, setClass_Name] = useState("");

  const handleInputChange = (event) => {
    console.log(event.target.value);
    setClass_Name(event.target.value);
  };

  const postClass = async () => {
    const data = { Class_Name: Class_Name };
    // console.log("data ", data);
    var config = {
      method: "post",
      url: "http://127.0.0.1:8000/api/classes",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(data),
    };
    try {
      var response = await axios(config);
      // var response = await axios.get(`http://127.0.0.1:8000/api/classes`);
      console.log("res ", response);

      console.log("class is posted");
    } catch (error) {
      console.error("err ", error);
      // handle the error
    }
  };

  return (
    <div className="add0admins">
      <div className="addclasses-border">
        <label className="label-Addadmins" htmlFor="">
          Class Name
        </label>
        <input
          className="input-Classes"
          value={Class_Name}
          onChange={handleInputChange}
          type="text"
        />

        <div className="buttons-classes">
          <Link className="cancel-classes" to="/classes">
            Cancel
          </Link>
          <Link
            className="submit-classes"
            to="/classes"
            onClick={async() => await postClass()}
          >
            Submit
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AddClasses;
