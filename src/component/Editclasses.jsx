import React from "react";
import { Link } from "react-router-dom";
import "./first.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Editclasses() {
  // <button onClick={() => console.log(state.class_id)}>hana</button>

  const { state } = useLocation();
  const navigate = useNavigate();
  const class_id = state.class_id;
  const [sections, setsections] = useState();
  const [classname, setclassname] = useState();

  const edithandler = () => {
    console.log("hello");
  };

  const updateclassname = async () => {
    const data = { Class_Name: classname };
    await axios
      .put(`http://127.0.0.1:8000/api/classes/${class_id}`, data)
      .then(() => navigate("/classes"))
      .catch((error) => {
        console.log(error);
      });
  };

  const getSections = async (clas_id) => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/classes/${state.class_id}/sections`
      );
      setsections(response.data);
    } catch (error) {
      console.error("err ", error);
    }
  };

  const deletesection = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/sections/${id}`);
      console.log("the sections is deleted ");
      navigate("/classes/edit", { state });
      getSections();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSections();
  }, [class_id]);

  return (
    <div className="editclassespage">
      edit classs
      <div className="editclass-border">
        <label className="label-Addadmins" htmlFor="">
          Class Name
        </label>
        <input
          className="input-Classes"
          type="text"
          onChange={(event) => setclassname(event.target.value)}
        />

        <div className="buttons-classes">
          <Link className="cancel-classes" to="/Classes">
            Cancel
          </Link>

          <button
            className="submit-classes"
            to="/Classes"
            onClick={updateclassname}
          >
            Submit
          </button>
        </div>
      </div>
      <div className="edit-border"></div>
      <table className="table-classes">
        <thead>
          <tr>
            <th className="headetable">Section Name</th>
            <th className="headetable">Number of Students</th>
            <th>
              <Link className="addclass-button" to="/newSection" state={state}>
                Add new Section
              </Link>
            </th>
          </tr>
        </thead>

        <tbody>
          {sections?.map((item) => (
            <tr>
              <td className="table-info">{item.Section_Name} </td>
              <td className="table-info">{item.studentsCount}</td>
              <td className="table-info">
                <button
                  className="delete-classes"
                  onClick={() => deletesection(item.id)}
                  disabled={item.studentsCount > 0}
                >
                  delete
                </button>
                <button className="edit-classes">
                  <Link
                    to="/EditSections"
                    className="edit-classes"
                    state={{ ...state, sectionid: item.id }}
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
  );
}

export default Editclasses;
