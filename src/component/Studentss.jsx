import Select from "react-select";
import { useState, useEffect } from "react";
import Axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

import "react-datepicker/dist/react-datepicker.css";

const Studentss = () => {
  const [selectedClass, setSelectedClass] = useState();
  const [selectedSection, setselctedSection] = useState();
  const [selectedStudent, setSelectedStudent] = useState();

  const [classOptions, setClassOptions] = useState([]);
  const [sectionOptions, setSectionOptions] = useState([]);
  const [studentOptions, setStudentOptions] = useState([]);

  const [data, setData] = useState([]);

  const selection = () => {
    if (selectedClass && selectedSection && selectedStudent) {
      getspesficstudent(selectedStudent.value);
    } else {
      allstudents();
    }
  };

  useEffect(() => {
    classesgetters();
  }, [selectedClass, selectedSection, selectedStudent, data]);

  const getspesficstudent = async (id) => {
    const response = await Axios.get(
      `http://127.0.0.1:8000/api/students/${id}`
    );
    setData(response.data.data);
    console.log("the student appeared");
  };

  // classes selection

  const classesgetters = async () => {
    await Axios.get("http://localhost:8000/api/classes/read")
      .then((res) => {
        console.log(res.data);
        setClassOptions(
          res.data.map(({ id, Class_Name }) => ({
            value: id,
            label: Class_Name,
          }))
        );
      })
      .catch((err) => console.log(err));
  };

  const sectiongetters = async (data) => {
    await Axios.get(`http://127.0.0.1:8000/api/section/search/class/${data}`)
      .then((res) => {
        console.log(res.data);
        setSectionOptions(
          res.data.map(({ id, Section_Name }) => ({
            value: id,
            label: Section_Name,
          }))
        );
      })
      .catch((err) => console.log(err));
  };

  const studentreader = async (sectionid) => {
    await Axios.get(
      `http://localhost:8000/api/student/search/section/${sectionid}`
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
  };

  useEffect(() => {
    selection();
  }, []);

  const allstudents = async () => {
    try {
      const response = await Axios.get("http://localhost:8000/api/students");
      setData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const slectstudentbysections = async (id) => {
    const response = await Axios.get(
      `http://127.0.0.1:8000/api/students/sec/${id}`
    );
    setData(response.data.data);
    console.log("the student appeared");
  };

  const removestudent = async (id) => {
    await Axios.delete(`http://127.0.0.1:8000/api/student/delete/${id}`);
    console.log("student is deleted ");
  };

  //classssss
  const handleSelectChangeClass = (option) => {
    setSelectedClass(option);
    console.log(option);
    sectiongetters(option.value);
  };

  //sectionnnnnnn
  const handleSelectChangeSection = (option) => {
    setselctedSection(option);
    studentreader(option.value);
    slectstudentbysections(option.value);
  };

  //studentsssss
  const handleSelectChangeStudent = (option) => {
    setSelectedStudent(option);
    getspesficstudent(option.value);
  };

  return (
    <div className="attendanceTable">
      <h1>Filter List by:</h1>
      <div className="filterListBy">
        <div className="filterListByAlone">
          <h3>Class</h3>
          <Select
            placeholder="Select Class"
            onChange={handleSelectChangeClass}
            value={selectedClass}
            options={classOptions}
            isClearable
          />
        </div>
        <div className="filterListByAlone">
          <h3>Section</h3>
          <Select
            placeholder="Select Section"
            onChange={handleSelectChangeSection}
            value={selectedSection}
            isDisabled={!selectedClass}
            options={sectionOptions}
            isClearable
          />
        </div>

        <div className="filterListByAlone">
          <h3>Student</h3>
          <Select
            placeholder="Select Student"
            onChange={handleSelectChangeStudent}
            value={selectedStudent}
            isDisabled={!selectedClass || !selectedSection}
            options={studentOptions}
            isClearable
          />
        </div>
      </div>
      <div className="attendanceList">
        <div className="attendanceListHeader">
          <div className="attendanceBorderWord">Class</div>
          <div className="attendanceBorderWord">Section</div>
          <div className="attendanceBorderWord">Student Name</div>
          <div className="attendanceBorderWord">BUTTONS</div>
        </div>

        {data?.map((hourframe, index) => (
          <div className="attendanceListRow attendanceBorder">
            <div className="attendanceBorderWord">{hourframe.Class_Name}</div>
            <div className="attendanceBorderWord">{hourframe.Section_Name}</div>
            <div className="attendanceBorderWord">{hourframe.First_Name}</div>
            <div className="attendanceBorderWord">
              {" "}
              <button onClick={() => removestudent(hourframe.id)}>
                delete
              </button>
              <Link
                to="/SecondSelect"
                state={{ location: "/Attendance", student_id: hourframe.id }}
              >
                {" "}
                view
              </Link>{" "}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Studentss;
