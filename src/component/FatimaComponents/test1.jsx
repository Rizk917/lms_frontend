import Select from "react-select";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import Axios from "axios";
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Test1 = () => {
  const [selectedClass, setSelectedClass] = useState();
  const [selectedSection, setselctedSection] = useState();
  const [selectedStudent, setSelectedStudent] = useState();
  const [startDate, setStartDate] = useState(new Date());

  const [classOptions, setClassOptions] = useState([]);
  const [sectionOptions, setSectionOptions] = useState([]);
  const [studentOptions, setStudentOptions] = useState([]);


  const [data, setData] = useState([]);













  // classes selection
  useEffect(() => {
    classesgetters();


    studentreader();

  }, []);




  const classesgetters = async () => {

    await Axios.get("http://localhost:8000/api/classes")
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

  }






  const sectiongetters = async (data) => {

    await Axios.get(`http://127.0.0.1:8000/api/sections/class/${data}`)
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
  }








  const studentreader = async (sectionid) => {
    await Axios.get(`http://localhost:8000/api/students/sections/${sectionid}`)
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













  //The whole table

  useEffect(() => {
    if (selectedClass && selectedSection && selectedStudent) {
      Axios.get(
        `http://localhost:8000/api/students?${selectedClass ? "class_id=" + selectedClass.value : ""
        }&${selectedSection ? "section_id=" + selectedSection.value : ""}&${selectedStudent ? "student_id=" + selectedStudent.value : ""}}`

      )

        .then((res) => {
          setData(res.data);
          console.log("fazzzzz", res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [selectedClass, selectedSection, selectedStudent, startDate]);





  const allstudents = async () => {
    const response = await Axios.get(`http://127.0.0.1:8000/api/students`)
    setData(response.data)
    console.log(response.data)
  }


  const hala = () => {
    allstudents();
  }







  //classssss
  const handleSelectChangeClass = (option) => {
    setSelectedClass(option);
    console.log(option);
    sectiongetters(option.value);
  };



  //sectionnnnnnn
  const handleSelectChangeSection = (option) => {
    setselctedSection(option);
    studentreader(option.value)

  };



  //studentsssss
  const handleSelectChangeStudent = (option) => {
    setSelectedStudent(option);
  };







  return (
    <div className="Test1">

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
        {data.map((item) => (
          <div className="attendanceListRow attendanceBorder">
            <div className="attendanceBorderWord">{item.class_name}</div>
            <div className="attendanceBorderWord">{item.section_name}</div>
            <div className="attendanceBorderWord">{item.student_name}</div>


          </div>
        ))}






      </div>
    </div>
  );
};

export default Test1;