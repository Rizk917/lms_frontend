import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./first.css";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function EditSection() {
  const edithandler = () => {
  };

  const [subject, setsubject] = useState();

  const { state } = useLocation();
  const [sectionname, setsectionname] = useState(state.section_name);
  const [sectionid, setsectionid] = useState(state.sectionid);
  const navigate = useNavigate();
  const [studentsdata, setstudentsdata] = useState();
  const [coursesdata, setcoursesdata] = useState([]);
  useEffect(() => {
    studentsgetter();
    getCourses();
  }, [sectionid, subject]);

  const addcourse = async (coursesname) => {
    const data = { Course_Name: coursesname, Section_ID: state.sectionid };
    await axios.post(`https://lms-backend-production-587c.up.railway.app/api/courses`, data).then(() => {
      getCourses();
    });
  };

  const getCourses = async () => {
    try {
      const response = await axios.get(
        `https://lms-backend-production-587c.up.railway.app/api/sections/${state.sectionid}/courses`
      );
      setcoursesdata(response.data);
    } catch (error) {
      console.log("the error :", error);
    }
  };

  const updatesection = async () => {
    const data = { Section_Name: sectionname };
    await axios
      .put(`https://lms-backend-production-587c.up.railway.app/api/sections/${state.sectionid}`, data)
      .then(() => navigate(`/classes/${state.class_id}`, { state }))
      .catch((error) => {
        console.log(error);
      });
  };
  const studentsgetter = async () => {
    try {
      const response = await axios.get(
        `https://lms-backend-production-587c.up.railway.app/api/students/sections/${state.sectionid}`
      );
      setstudentsdata(response.data);
    } catch (error) {
      console.log("the error :", error);
    }
  };

  const removestudent = async (id) => {
    await axios
      .delete(`https://lms-backend-production-587c.up.railway.app/api/students/${id}`)
      .then(() => {
        toast.success("Student is deleted");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handeleDelete = async (classId) => {
    await removestudent(classId).then(() => {
      studentsgetter();
      window.location(`/classes/${state.class_id}/sections/${state.sectionid}`);
    });
  };

  return (
    <>
    <ToastContainer />

    <div className="editclassespage label-Addadmins">

      <div className="container-sectionn">
        <div className="editsectionbesid-border">
          <label className="label-Addadmins" htmlFor="">
            Section Name
          </label>
          <input
            className="input-Classes"
            type="text"
            value={sectionname}
            onChange={(event) => setsectionname(event.target.value)}
          />
          <div className="buttons-classes">
            <Link
              className="cancel-classes"
              to={`/classes/${state.class_id}`}
              state={{ ...state, sectionid:undefined, section_name:undefined}}
            >
              Cancel
            </Link>

            <button
              className="submit-classes"
              id="special-submit"
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
                <button
                  onClick={() => addcourse("Math")}
                  className="addbutton"
                  disabled={coursesdata.some(
                    (item) => item.Course_Name == "Math"
                  )}
                >
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
                  disabled={coursesdata.some(
                    (item) => item.Course_Name == "Physics"
                  )}
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
                  disabled={coursesdata.some(
                    (item) => item.Course_Name == "History"
                  )}
                >
                  Add
                </button>
              </td>
            </tr>
            <tr className="trr">
              <td className="equal-sides subjects">Chemistry </td>
              <td className="equal-sides">
                <button
                  onClick={() => addcourse("Chemistry")}
                  className="addbutton"
                  disabled={coursesdata.some(
                    (item) => item.Course_Name == "Chemistry"
                  )}
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
                to={`/classes/${state.class_id}/sections/${state.sectionid}/students/new`}
                state={ state }
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
                    to={`/classes/${state.class_id}/sections/${state.sectionid}/students/${hourframe.id}`}
                    className="edit-classes"
                    state={{...state,
                      student_id: hourframe.id,
                    }}
                  >
                    VIEW
                  </Link>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
}

export default EditSection;
