import Select from "react-select";
import { useState, useEffect } from "react";
import Axios from "axios";
import axios from 'axios';
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AttendanceTable = () => {
  const [selectedClass, setSelectedClass] = useState();
  const [selectedSection, setselctedSection] = useState();
  const [selectedStudent, setSelectedStudent] = useState();
  const [startDate, setStartDate] = useState(new Date());

  const [classOptions, setClassOptions] = useState([]);
  const [sectionOptions, setSectionOptions] = useState([]);
  const [studentOptions, setStudentOptions] = useState([]);
  // const [dateOPtions, setAttendanceDate] = useState([]);

  ///////////////////////////////////////////////////////
  const [attendances, setAttendances] = useState([]);
  ////////////////////////////////////////////////////

  const [data, setData] = useState([]);
  ///////////////////////////////////////////////////////
  const handleEdit = async (item) => {
    const index = attendances.findIndex((a) => a.id === item.id);
    const newStatus = document.getElementById(`attendance-status-${item.id}`).value;
    if (newStatus !== item.status) {
      const newAttendance = [...attendances];
      newAttendance[index].status = newStatus;
      setAttendances(newAttendance);
      try {
        await axios.put(`http://127.0.0.1:8000/api/attendance/${item.id}`, { Date: item.Date, Status: newStatus });
      } catch (error) {
        console.error(error);
      }
    }
  };
  
  
  ///////////////////////////////////////////////////////

  // classes selection
  useEffect(() => {
    axios.get("http://localhost:8000/api/classes/read")
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
  }, []);

  // sections selection
  useEffect(() => {
    axios.get("http://localhost:8000/api/section/read")
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
  }, []);

  // students selection
  useEffect(() => {
    axios.get("http://localhost:8000/api/student/read")
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
  }, []);

  //The whole table
  useEffect(() => {
    axios.get(
      `http://localhost:8000/api/attendance?${
        selectedClass ? "class_id=" + selectedClass.value : ""
      }&${selectedSection ? "section_id=" + selectedSection.value : ""}&${
        selectedStudent ? "student_id=" + selectedStudent.value : ""
      }&${startDate ? "date=" + startDate.toISOString().slice(0, 10) : ""}}`
    )

      .then((res) => {
        setData(res.data);
        setAttendances(res.data);

        console.log(startDate.toISOString().slice(0, 10));
      })
      .catch((err) => console.log(err));
  }, [selectedClass, selectedSection, selectedStudent, startDate]);

  const handleSelectChangeStudent = (option) => {
    setSelectedStudent(option);
  };

  const handleSelectChangeClass = (option) => {
    setSelectedClass(option);
  };

  const handleSelectChangeSection = (option) => {
    setselctedSection(option);
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
        <div className="filterListByAlone">
          <h3>Date</h3>
          <DatePicker
            showIcon
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="datePicker"
            dateFormat="yyyy-MM-dd"
          />
        </div>
      </div>
      <div className="attendanceList">
        <div className="attendanceListHeader">
          <div className="attendanceBorderWord">Class</div>
          <div className="attendanceBorderWord">Section</div>
          <div className="attendanceBorderWord">Student Name</div>
          <div className="attendanceBorderWord">Date</div>
          <div className="attendanceBorderWord">Attendance</div>
          <div className="attendanceBorderWord">edit</div>
        </div>
        {data.map((item) => (
          
          <div className="attendanceListRow attendanceBorder">
            <div className="attendanceBorderWord">{item.class_name}</div>
            <div className="attendanceBorderWord">{item.section_name}</div>
            <div className="attendanceBorderWord">{item.student_name}</div>
            <div className="attendanceBorderWord">{item.date}</div>
            <div className="attendanceBorderWord">{item.status}</div>
            <div className="attendanceBorderWord">
            {console.log(item)}
              {" "}
              
              <select className="new-select"
                id={`attendance-status-${item.id}`}
                defaultValue={item.status}
              >
                <option value="present">Present</option>
                <option value="absent">Absent</option>
                <option value="late">Late</option>
              </select>
              <button className="edit-classes" onClick={() => handleEdit(item)}>Edit</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AttendanceTable;
