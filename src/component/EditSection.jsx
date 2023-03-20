import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./first.css";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
function EditSection() {
  const edithandler = () => {
    console.log("hello");
  };

  const [sectionname, setsectionname] = useState();
  const [subject, setsubject] = useState();

  const { state } = useLocation();
  const [sectionid, setsectionid] = useState(state.sectionid);
  const navigate = useNavigate();
  const [studentsdata, setstudentsdata] = useState();
  useEffect(() => {
    console.log(sectionid);
    studentsgetter();
  }, [sectionid, subject]);

  const addcourse = async (coursesname) => {
    const data = { Course_Name: coursesname, Section_ID: state.sectionid };
    await axios.post(`http://127.0.0.1:8000/api/courses`, data);
    console.log("adding courses is done ");
  };

  const updatesection = async () => {
    const data = { Section_Name: sectionname };
    await axios
      .put(`http://127.0.0.1:8000/api/sections/${state.sectionid}`, data)
      .then(() => navigate("/classes/edit", { state }))
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(state)
  const studentsgetter = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/students/sections/${state.sectionid}`
      );
      console.log(response.data);
      setstudentsdata(response.data);
    } catch (error) {
      console.log("the error :", error);
    }
  };

  const removestudent = async (id) => {
    await axios
      .delete(`http://127.0.0.1:8000/api/students/${id}`)
      .then(() => {
        console.log("student is deleted ");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handeleDelete = async (classId) => {
    await removestudent(classId).then(() => {
      studentsgetter();
      window.location("/EditSections");
    });
  };

  return (
    <div className="editclassespage label-Addadmins">
      sec
      <div className="container-sectionn">
        <div className="editsectionbesid-border">
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
              state={{ class_id: state.class_id }}
            >
              Cancel
            </Link>

            <button
              className="submit-classes"
              // to="/classes/edit"
              onClick={() => updatesection()}
              state={{ class_id: state.class_id }}
            >
              Submit
            </button>
          </div>
        </div>

        <div className="addcourses">
          <table className="tablo">
            <tr className="trr">
              <th colspan="2">Choose Course</th>
            </tr>
            <tr className="trr">
              <td className="equal-sides   subjects ">Math</td>
              <td className="equal-sides">
                <button onClick={() => addcourse("math")} className="addbutton">
                  Add
                </button>
              </td>
            </tr>
            <tr className="trr">
              <td className="equal-sides subjects">Physics </td>
              <td className="equal-sides">
                <button
                  onClick={() => addcourse("Physics")}
                  className="addbutton"
                >
                  Add
                </button>
              </td>
            </tr>
            <tr className="trr">
              <td className="equal-sides subjects">History </td>
              <td className="equal-sides">
                <button
                  onClick={() => addcourse("History")}
                  className="addbutton"
                >
                  Add
                </button>
              </td>
            </tr>
            <tr className="trr">
              <td className="equal-sides subjects">Chimestry </td>
              <td className="equal-sides">
                <button
                  onClick={() => addcourse("Chimestry")}
                  className="addbutton"
                >
                  Add
                </button>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div className="edit-border"></div>
      <table className="table-classes">
        <thead>
          <tr>
            <th className="headetable">Student First Name</th>
            <th className="headetable">Student Last Name</th>
            <th>
              <Link
                className="addclass-button"
                to="/add-students"
                state={{ state }}
              >
                Add new Student
              </Link>
            </th>
          </tr>
        </thead>

        <tbody>
          {studentsdata?.map((hourframe, index) => (
            <tr>
              <td className="table-info">{hourframe.First_Name} </td>
              <td className="table-info">{hourframe.Last_Name}</td>
              <td className="table-info">
                <button
                  className="delete-classes"
                  // to="EditSections"
                  onClick={() => handeleDelete(hourframe.id)}
                  disabled={hourframe.studentsCount > 0}
                >
                  Remove
                </button>

                <button className="edit-classes">
                  <Link
                    to="/SecondSelect"
                    state={{
                      
                      location: "/EditSections",
                      student_id: hourframe.id,
                      sectionid: state.sectionid,
                    }
                
                  }
                  >
                    {  console.table(state)}
                    VIEW
                  </Link>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EditSection;
