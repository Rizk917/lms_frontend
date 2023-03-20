import React from "react";
import "./first.css";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function AddSection() {
  const [sectionname, setsectionname] = useState();

  const { state } = useLocation();

  const [clas_id, setclas_id] = useState(state.class_id);
  const navigate = useNavigate();
  useEffect(() => {
    console.log(state);
  }, [clas_id]);

  const postnewsection = async () => {
    const data = { Section_Name: sectionname, Class_ID: clas_id, User_ID: 1 };

    await axios
      .post(
        `http://127.0.0.1:8000/api/classes/${state.class_id}/sections`,
        data
      )
      .then(() => {
        navigate("/classes/edit", { state });
      })

      .catch((error) => {
        console.log("error ", error);
      });
  };

  return (
    <div className="addadmins">
      <div className="editclass-border">
        <label className="label-Addadmins" htmlFor="">
          Section Name
        </label>
        <input
          className="input-Classes"
          type="text"
          onChange={(event) => setsectionname(event.target.value)}
        />

        <div className="buttons-classes">
          <Link
            className="cancel-classes"
            to="/classes/edit"
            state={state}
          >
            Cancel
          </Link>

          <button
            className="submit-classes"
            to="/classes/edit"
            state={state}
            onClick={() => postnewsection()}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddSection;
