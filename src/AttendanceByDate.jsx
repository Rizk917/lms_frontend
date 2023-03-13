import React, { useState } from 'react';
import axios from 'axios';

function AttendanceByDate({ studentsss }) {
  const [date, setDate] = useState('');
  const [attendances, setAttendances] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/attendance/search/${date}`);
      setAttendances(response.data.attendances);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = async (attendance) => {
    const index = attendances.findIndex((a) => a.id === attendance.id);
    const newStatus = document.getElementById(`attendance-status-${attendance.id}`).value;
    if (newStatus !== attendance.Status) {
      const newAttendance = [...attendances];
      newAttendance[index].Status = newStatus;
      setAttendances(newAttendance);
      try {
        await axios.put(`http://127.0.0.1:8000/api/attendance/${attendance.id}`, { Date: attendance.Date, Status: newStatus });
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      <table>
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Student Name</th>
            <th>Current Status</th>
            <th>Status</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {attendances.map((attendance) => {
            const student = studentsss.find((s) => s.id === attendance.Students_ID);
            return (
              <tr key={attendance.id}>
                <td>{attendance.Students_ID}</td>
                <td>{student ? student.First_Name : '-'}</td>
                <td>{attendance.Status}</td>
                <td>
                  <select id={`attendance-status-${attendance.id}`} defaultValue={attendance.Status}>
                    <option value="present">Present</option>
                    <option value="absent">Absent</option>
                    <option value="late">Late</option>
                  </select>
                </td>
                <td><button onClick={() => handleEdit(attendance)}>Edit</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default AttendanceByDate;
