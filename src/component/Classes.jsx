import React from "react";
import { Link } from "react-router-dom";
import "./first.css";
import { useEffect, useState } from "react";

import axios from "axios";
function CLasses() {
  const [classes, setclasses] = useState();

  const edithandler = () => {
    console.log("hello world ");


  }



  const deleteclasses = async (data) => {
    try {
      const response = await axios.delete(`http://127.0.0.1:8000/api/classes/delete/${data}`)
    } catch (error) {
      console.log(error)
    }
  }






  const getclasses = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/classes/read`)
      console.log(response.data)
      setclasses(response.data)
    }
    catch (error) {
      console.error("err ", error);

    }

  }



  useEffect(() => {
    getclasses();
  }, []);


  return (
    <div className="classespage">

      <table className="table-classes">
        <thead>
          <tr>
            <th className="headetable">Class Name</th>
            <th className="headetable">Number of Sections</th>
            <th> <Link className="addclass-button" to='/AddClasses'> Add new Class</Link></th>
          </tr>
        </thead>

        <tbody>
          {classes?.map((hourframe, index) => (
            <tr>
              <td className="table-info">{hourframe.Class_Name}</td>
              <td className="table-info">NUMBER</td>



              <td className="table-info"><button onClick={() => deleteclasses(hourframe.id)} className="delete-classes">Delete</button>



                <button className="edit-classes">
                  <Link to="/editClassespage" className="edit-classes" onClick={() => console.log(hourframe.id)} state={{ class_id: hourframe.id }} >
                    VIEW
                  </Link></button></td>
            </tr>))}

        </tbody>
      </table>
    </div>
  );
}

export default CLasses;
