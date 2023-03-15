import React, { useState, useEffect } from "react";
import axios from "axios";
import AttendanceByDate from "../AttendanceByDate";

const TakeAttendance = ({ sectionId }) => {
  const [students, setStudents] = useState([]);
  const [attendance, setAttendance] = useState([]);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/student/read?section_id=${sectionId}`)
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [sectionId]);

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
      .post("http://127.0.0.1:8000/api/attendance/post", { attendance, sectionId })
      .then((response) => {
        console.log(response.data);
        setAttendance([]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
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
                <td>{student.first_name}</td>
                <td>
                  <select
                    value={
                      attendance.find((a) => a.studentId === student.id)
                        ?.attendanceType || "none"
                    }
                    onChange={(e) => handleChange(e, student.id)}
                  >
                    <option value="none">Select Attendance</option>
                    <option value="present">Present</option>
                    <option value="absent">Absent</option>
                    <option value="late">Late</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button type="submit">Submit</button>
      </form>
      <AttendanceByDate students={students} />
    </>
  );
};

export default TakeAttendance;
