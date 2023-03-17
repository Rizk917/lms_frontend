import Select from "react-select";
import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

import "react-datepicker/dist/react-datepicker.css";

const Students = () => {
  const [selectedClass, setSelectedClass] = useState();
  const [selectedSection, setselctedSection] = useState();
  const [selectedStudent, setSelectedStudent] = useState();

  const [classOptions, setClassOptions] = useState([]);
  const [sectionOptions, setSectionOptions] = useState([]);
  const [studentOptions, setStudentOptions] = useState([]);

  const [data, setData] = useState([]);

  // classes selection
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/classes")
      .then((res) => {
        setClassOptions(
          res.data.map(({ id, Class_Name }) => ({
            value: id,
            label: Class_Name,
          }))
        );
      })
      .catch((err) => console.log(err));
  }, []);

  // sections selection
  useEffect(() => {
    if (selectedClass) {
      axios
        .get(
          `http://localhost:8000/api/classes/${selectedClass.value}/sections`
        )
        .then((res) => {
          setSectionOptions(
            res.data.map(({ id, Section_Name }) => ({
              value: id,
              label: Section_Name,
            }))
          );
        })
        .catch((err) => console.log(err));
    }
  }, [selectedClass]);

  // students selection
  useEffect(() => {
    if (selectedSection) {
      axios
        .get(
          `http://localhost:8000/api/students?${
            selectedSection ? "section_id=" + selectedSection.value : ""
          } `
        )
        .then((res) => {
          console.log(res.data);
          setStudentOptions(
            res.data.map(({ id, First_Name, Last_Name }) => ({
              value: id,
              label: First_Name + " " + Last_Name,
            }))
          );
        })
        .catch((err) => console.log(err));
    }
  }, [selectedSection]);

  useEffect(() => {
    axios
      .get(
        `http://localhost:8000/api/students?${
          selectedClass ? "class_id=" + selectedClass.value : ""
        }&${selectedSection ? "section_id=" + selectedSection.value : ""}`
      )
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [selectedClass, selectedSection, selectedStudent]);

  const removestudent = async (id) => {
    await axios.delete(`http://127.0.0.1:8000/api/students/${id}`);
    console.log("student is deleted ");
  };

  //classssss
  const handleSelectChangeClass = (option) => {
    setSelectedClass(option);
  };

  //sectionnnnnnn
  const handleSelectChangeSection = (option) => {
    setselctedSection(option);
  };

  //studentsssss
  const handleSelectChangeStudent = (option) => {
    setSelectedStudent(option);
  };

  return (
    <div className="attendanceTable">
      <div className="studentsFilterHeader">
        <h1>Filter List by:</h1>
        <div className="filterListBy" id="filterListBy">
          <div id="filterListByAlone">
            <Select
              placeholder="Select Class"
              onChange={handleSelectChangeClass}
              value={selectedClass}
              options={classOptions}
              isClearable
            />
          </div>
          <div id="filterListByAlone">
            <Select
              placeholder="Select Section"
              onChange={handleSelectChangeSection}
              value={selectedSection}
              isDisabled={!selectedClass}
              options={sectionOptions}
              isClearable
            />
          </div>
        </div>
      </div>
      <div className="attendanceList" id="attendanceList">
        <div className="attendanceListHeader">
          <div className="attendanceBorderWord">First Name</div>
          <div className="attendanceBorderWord">Last Name</div>
          <div className="attendanceBorderWord">Phone Number</div>
          <div className="attendanceBorderWord">Class / Section</div>
          <div className="attendanceBorderWord" id="attendanceBorderWord">Action</div>
        </div>

        {data?.map((hourframe, index) => (
          <div className="attendanceListRow attendanceBorder">
            <div className="attendanceBorderWord">{hourframe.First_Name}</div>
            <div className="attendanceBorderWord">{hourframe.Last_Name}</div>
            <div className="attendanceBorderWord">{hourframe.phone_number}</div>
            <div className="attendanceBorderWord">{`${hourframe.Class_Name} / ${hourframe.Section_Name}`}</div>
            <div className="attendanceBorderWord" id="editView">
              <button
                className="delete-classes"
                id="deleteClasses"
                onClick={() => removestudent(hourframe.id)}
              >
                delete
              </button>
              <button className="edit-classes">
                <Link
                  className="edit-classes"
                  id="viewClasses"
                  to="/SecondSelect"
                  state={{ location: "/Attendance", student_id: hourframe.id }}
                >
                  view
                </Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Students;
