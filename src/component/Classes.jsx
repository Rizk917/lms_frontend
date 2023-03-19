import React from "react";
import { Link } from "react-router-dom";
import "./first.css";
import { useEffect, useState } from "react";

import axios from "axios";
function CLasses() {
  const [classes, setclasses] = useState();

  const edithandler = () => {
    console.log("hello world ");
  };

  const deleteclasses = async (classId) => {
    try {
      const response = await axios.delete(
        `http://127.0.0.1:8000/api/classes/${classId}`
      );
    } catch (error) {
      console.log(error);
    }
  };

  const getclasses = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/classes`);
      console.log(response.data);
      setclasses(response.data);
    } catch (error) {
      console.error("err ", error);
    }
  };

  useEffect(() => {
    getclasses();
  }, []);

  const handeleDelete = (classId) => {
    deleteclasses(classId);
    getclasses();
  };

  return (
    <div className="classespage">
      <table className="table-classes">
        <thead>
          <tr>
            <th className="headetable">Class Name</th>
            <th className="headetable">Number of Sections</th>
            <th>
              <Link className="addclass-button" to="/classes/new">
                Add new Class
              </Link>
            </th>
          </tr>
        </thead>

        <tbody>
          {classes?.map((item, index) => (
            <tr>
              <td className="table-info">{item.Class_Name}</td>
              <td className="table-info">{item.sectionsCount}</td>

              <td className="table-info">
                <button
                  onClick={() => handeleDelete(item.id)}
                  className="delete-classes"
                  disabled={item.sectionsCount > 0}
                >
                  Delete
                </button>

                <button className="edit-classes">
                  <Link
                    to="/classes/edit"
                    className="edit-classes"
                    onClick={() => console.log(item.id)}
                    state={{ class_id: item.id }}
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

export default CLasses;
