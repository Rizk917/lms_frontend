import React, { useState, useEffect } from "react";
import axios from "axios";
import AttendanceByDate from "../AttendanceByDate";
const TakeAttendance = () => {
  const [students, setStudents] = useState([]);
  const [attendance, setAttendance] = useState([]);

  useEffect(() => {
    axios
      .get("https://lms-backend-production-587c.up.railway.app/api/students")
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://lms-backend-production-587c.up.railway.app/api/attendance", { attendance })
      .then((response) => {
        setAttendance([]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (<>
    <form onSubmit={handleSubmit}>
      <table>
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Student Name</th>
            <th>Attendance</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.First_Name}</td>
              <td>
              <div>
  <input
    type="radio"
    id={`attendance-none-${student.id}`}
    name={`attendance-${student.id}`}
    value="none"
    checked={attendance.find((a) => a.studentId === student.id)?.attendanceType === "none"}
    onChange={(e) => handleChange(e, student.id)}
  />
  <label htmlFor={`attendance-none-${student.id}`}>Select Attendance</label>

  <input
    type="radio"
    id={`attendance-present-${student.id}`}
    name={`attendance-${student.id}`}
    value="present"
    checked={attendance.find((a) => a.studentId === student.id)?.attendanceType === "present"}
    onChange={(e) => handleChange(e, student.id)}
  />
  <label htmlFor={`attendance-present-${student.id}`}>Present</label>

  <input
    type="radio"
    id={`attendance-absent-${student.id}`}
    name={`attendance-${student.id}`}
    value="absent"
    checked={attendance.find((a) => a.studentId === student.id)?.attendanceType === "absent"}
    onChange={(e) => handleChange(e, student.id)}
  />
  <label htmlFor={`attendance-absent-${student.id}`}>Absent</label>

  <input
    type="radio"
    id={`attendance-late-${student.id}`}
    name={`attendance-${student.id}`}
    value="late"
    checked={attendance.find((a) => a.studentId === student.id)?.attendanceType === "late"}
    onChange={(e) => handleChange(e, student.id)}
  />
  <label htmlFor={`attendance-late-${student.id}`}>Late</label>
</div>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button type="submit">Submit</button>
    </form>
    {/* <AttendanceByDate studentsss={students}/> */}
    </>
  );
};

export default TakeAttendance;
