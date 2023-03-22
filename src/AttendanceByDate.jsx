import Select from "react-select";
import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

import "react-datepicker/dist/react-datepicker.css";

function AttendanceByDate() {
  const [selectedClass, setSelectedClass] = useState();
  const [selectedSection, setselctedSection] = useState();
  const [selectedStudent, setSelectedStudent] = useState();
  const [studentOptions, setStudentOptions] = useState([]);
  const [attendance, setAttendance] = useState([]);
  const navigate = useNavigate();

  const [classOptions, setClassOptions] = useState([]);
  const [sectionOptions, setSectionOptions] = useState([]);

  const [data, setData] = useState([]);

  // classes selection
  useEffect(() => {
    axios
      .get("https://lms-backend-production-587c.up.railway.app/api/classes")
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
          `https://lms-backend-production-587c.up.railway.app/api/classes/${selectedClass.value}/sections`
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

  //ATTENDANCE
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://lms-backend-production-587c.up.railway.app/api/attendance", { attendance })
      .then((response) => {
        console.log(response.data);
        setAttendance([]);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleChange = (e, studentId) => {
    const newAttendance = [...attendance];
    const attendanceType = e.target.value;
    const index = newAttendance.findIndex((a) => a.studentId === studentId);
    if (index === -1) {
      newAttendance.push({ studentId, attendanceType });
    } else {
      newAttendance[index].attendanceType = attendanceType;
    }
    setAttendance(newAttendance);
  };

  // students selection
  useEffect(() => {
    if (selectedSection) {
      axios
        .get(
          `https://lms-backend-production-587c.up.railway.app/api/students?${
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
        `https://lms-backend-production-587c.up.railway.app/api/students?${
          selectedClass ? "class_id=" + selectedClass.value : ""
        }&${selectedSection ? "section_id=" + selectedSection.value : ""}`
      )
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [selectedClass, selectedSection, selectedStudent]);

  //classssss
  const handleSelectChangeClass = (option) => {
    setSelectedClass(option);
  };

  //sectionnnnnnn
  const handleSelectChangeSection = (option) => {
    setselctedSection(option);
  };
  const toHistory = () => {
    navigate("/attendances/history");
  };

  return (
    <div className="attendanceTable">
      <div className="studentsFilterHeaderHistory">
        <h1>Filter List by:</h1>
        <div className="attendance-history-flex">
        <button onClick={toHistory} className="attendance-tick ">
          Attendance History
        </button>
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
      </div>
      <div className="attendanceList" id="attendanceList">
        <div className="attendanceListHeader">
          <div className="attendanceBorderWord">First Name</div>
          <div className="attendanceBorderWord">Last Name</div>
          <div className="attendanceBorderWord">Class / Section</div>
          <div className="attendanceBorderWord">Attendance</div>
        </div>

        {data?.map((StudentC, index) => (
          <div className="attendanceListRow attendanceBorder" key={index}>
            <div className="attendanceBorderWord">{StudentC.First_Name}</div>
            <div className="attendanceBorderWord">{StudentC.Last_Name}</div>
            <div className="attendanceBorderWord">{`${StudentC.Class_Name} / ${StudentC.Section_Name}`}</div>
            <div className="attendanceBorderWord">
              <div>
                <input
                  type="radio"
                  id={`attendance-present-${StudentC.id}`}
                  name={`attendance-${StudentC.id}`}
                  value="present"
                  checked={
                    attendance.find((a) => a.studentId === StudentC.id)
                      ?.attendanceType === "present"
                  }
                  onChange={(e) => handleChange(e, StudentC.id)}
                />
                <label htmlFor={`attendance-present-${StudentC.id}`}>
                  Present
                </label>

                <input
                  type="radio"
                  id={`attendance-absent-${StudentC.id}`}
                  name={`attendance-${StudentC.id}`}
                  value="absent"
                  checked={
                    attendance.find((a) => a.studentId === StudentC.id)
                      ?.attendanceType === "absent"
                  }
                  onChange={(e) => handleChange(e, StudentC.id)}
                />
                <label htmlFor={`attendance-absent-${StudentC.id}`}>
                  Absent
                </label>

                <input
                  type="radio"
                  id={`attendance-late-${StudentC.id}`}
                  name={`attendance-${StudentC.id}`}
                  value="late"
                  checked={
                    attendance.find((a) => a.studentId === StudentC.id)
                      ?.attendanceType === "late"
                  }
                  onChange={(e) => handleChange(e, StudentC.id)}
                />
                <label htmlFor={`attendance-late-${StudentC.id}`}>Late</label>
              </div>
            </div>
          </div>
        ))}
        <div className="attendanceListRow attendanceBorder">
          <div className="attendanceBorderWord">
            <button className="submit-class" onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AttendanceByDate;
