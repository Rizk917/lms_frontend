import React from "react";
import { useState, useEffect } from "react";

import "./AddStudents.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";
export default function AddStudents() {
  const { state } = useLocation();
  const [sectionid, setsectionid] = useState(state.sectionid);
  useEffect(() => {
    console.log(`Section ID changed to ${sectionid}`);
  }, [sectionid]);
  

  const [firstname, setfirstname] = useState();
  const [lastname, setlastname] = useState();
  const [phonenumber, setphonenumber] = useState();
  const [image_path, setimage_path] = useState("aloha");

  const studentAdder = async () => {
    const data = {
      First_Name: firstname,
      Last_Name: lastname,
      phone_number: phonenumber,
      image_path: image_path,
      Section_ID: sectionid,
    };
    try {
      await axios.post(`http://127.0.0.1:8000/api/students`, data);
      console.log("the student is added");
    } catch (error) {
      console.log("error :", error);
    }
  };

  return (
    <div className="M1-container1">
      <div className="M1-container2">
        <div className="M1-center-container">
          <div className="M1-profile-button">
            <div className="M1-profile-pic">
              <img
                src="https://pic.onlinewebfonts.com/svg/img_510068.png"
                alt=""
              />
            </div>

            <button className="M1-upload-button">Upload</button>
          </div>

          <div className="M1-addadmins">
            <label className="M1-label-Addadmins" htmlFor="">
              First name
            </label>
            <input
              className="M1-input-Addamis"
              type="text"
              onChange={(event) => setfirstname(event.target.value)}
            />
            <label className="M1-label-Addadmins" htmlFor="">
              Last name
            </label>
            <input
              className="M1-input-Addamis"
              type="text"
              onChange={(event) => setlastname(event.target.value)}
            />
            <label className="M1-label-Addadmins" htmlFor="">
              Phone Number
            </label>
            <input
              className="M1-input-Addamis"
              type="text"
              onChange={(event) => setphonenumber(event.target.value)}
            />
          </div>
          <div className="M1-buttons">
            <Link
              to="/EditSections"
              className="M1-cancel-classes"
              state={{ sectionid: state.sectionid }}
            >
              Cancel
            </Link>

            <Link
              className="M1-edit-classes"
              onClick={() => studentAdder()}
              to="/EditSections"
              state={{ sectionid: state.sectionid }}
            >
              Submit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
