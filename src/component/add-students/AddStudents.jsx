import React from "react";
import { useState, useEffect } from "react";

import "./AddStudents.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function AddStudents() {
  const { state } = useLocation();
  const [sectionid, setsectionid] = useState(state.section_id);
  useEffect(() => {
    console.log(`Section ID changed to ${sectionid}`);
  }, [sectionid]);

  const [firstname, setfirstname] = useState();
  const [lastname, setlastname] = useState();
  const [phonenumber, setphonenumber] = useState();
  const [image, setImage] = useState(null); // add state variable for image file

  const handleImageChange = (event) => {
    setImage(event.target.files[0]); // update image state variable when file is selected
  };

  const studentAdder = async () => {
    const formData = new FormData(); // create FormData object to send file and form data
    formData.append("First_Name", firstname);
    formData.append("Last_Name", lastname);
    formData.append("phone_number", phonenumber);
    formData.append("Section_ID", sectionid);
    if (image) {
      formData.append("image_path", image, image.name); // append image file to FormData object
    }
    try {
      await axios.post(`http://127.0.0.1:8000/api/students`, formData, {
        headers: {
          "Content-Type": "multipart/form-data", // set content type header for FormData
        },
      });
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
              {image ? (
                <img src={URL.createObjectURL(image)} alt="" /> // show preview of selected image
              ) : (
                <img
                  src="https://pic.onlinewebfonts.com/svg/img_510068.png"
                  alt=""
                />
              )}
            </div>
            <label htmlFor="image_path" className="M1-upload-button-label">
              Upload
            </label>
            <input
              id="image_path"
              className="M1-upload-button-input"
              type="file"
              accept="image/*"
              onChange={handleImageChange} // call handleImageChange when file is selected
            />
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
              state={{ sectionid: state.section_id }}
            >
              Cancel
            </Link>

            <Link
              className="M1-edit-classes"
              onClick={() => studentAdder()}
              to="/EditSections"
              state={{ sectionid: state.section_id }}
            >
              Submit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
