import React, { useState } from "react";
import "./first.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function AddClasses() {
  const [Class_Name, setClass_Name] = useState();
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setClass_Name(event.target.value);
  };

  const postClass = async () => {
    const data = { Class_Name: Class_Name };
    // console.log("data ", data);
    var config = {
      method: "post",
      url: "https://lms-backend-production-587c.up.railway.app/api/classes",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(data),
    };

    var response = await axios(config)
      .then(() => {
        navigate("/classes");
      })
      // var response = await axios.get(`https://lms-backend-production-587c.up.railway.app/api/classes`);

      .catch((error) => {
        console.error("err ", error);
        // handle the error
      });
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
          <button
            className="submit-classes"
            to="/classes"
            onClick={() => postClass()}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddClasses;
