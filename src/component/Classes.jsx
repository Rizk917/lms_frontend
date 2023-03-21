import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./first.css";
import { useEffect, useState } from "react";

import axios from "axios";
function CLasses() {
  const [classes, setclasses] = useState();
  const navigate = useNavigate();
  const edithandler = () => {
    console.log("hello world ");
  };

  const deleteclasses = async (classId) => {
    await axios
      .delete(`https://lms-backend-production-587c.up.railway.app/api/classes/${classId}`)
      .then(() => {
        console.log("class is deleted");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getclasses = async () => {
    try {
      const response = await axios.get(`https://lms-backend-production-587c.up.railway.app/api/classes`);
      console.log(response.data);
      setclasses(response.data);
    } catch (error) {
      console.error("err ", error);
    }
  };

  useEffect(() => {
    getclasses();
  }, []);

  const handeleDelete = async (classId) => {
    await deleteclasses(classId).then(() => {
      getclasses();
      window.location("/classes");
    });
  };

  return (
    <div className="classespage ">
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
                    state={{ class_id: item.id, class_name: item.Class_Name }}
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
