import React from "react";
import "../component/select-student/SelectStudent.css";
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
export default function SecondselectStudent() {

  const { state } = useLocation();
  const [sectionid, setsectionid] = useState(state.section_id);
  const [student_id, setstudent_id] = useState(state.student_id);
  const [studentinfo, setstudentinfo] = useState();


  const getstudentinfo = async () => {
    axios.get(`https://lms-backend-production-587c.up.railway.app/api/students/id/${state.student_id}`)
      .then(response => {
        setstudentinfo(response.data[0])
        console.log(response.data)
      })
      .catch(error => {
        console.log(error);
      });

  }


  useEffect(() => {
    getstudentinfo();



  }, []);



  return (

    <div className="M2-container1">
      <div className="M2-container2">
        <div className="M2-center-container">
          <div className="M2-profile-button" >
            <div className="M2-profile-pic">
              <img src="https://pic.onlinewebfonts.com/svg/img_510068.png" alt="" />
            </div>

            <button className="M2-upload-button">Upload</button>
          </div>

          <div className="M2-addadmins">
            <label className="M2-label-Addadmins" htmlFor="">First name</label>
            {studentinfo && <input className="M2-input-Addamis" type="text" readOnly="readOnly" placeholder={studentinfo.First_Name} />}
            <label className="M2-label-Addadmins" htmlFor="">Last name</label>
            {studentinfo && <input className="M2-input-Addamis" type="text" readOnly="readOnly" placeholder={studentinfo.Last_Name} />}
            <label className="M2-label-Addadmins" htmlFor="">Phone Number</label>
            {studentinfo && <input className="M2-input-Addamis" readOnly="readOnly" type="text" placeholder={studentinfo.phone_number} />}
          </div>

          <div className="M2-buttons">
            <Link className="M4-cancel-classes" to="/EditSections" state={state}>Done</Link>

          </div>

        </div>
      </div>
    </div>

  );
}

