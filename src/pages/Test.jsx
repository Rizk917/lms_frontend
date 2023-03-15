import React, { useState, useEffect } from "react";
import axios from "axios";
import AttendanceByDate from "../AttendanceByDate";
const TakeAttendance = () => {
  const [students, setStudents] = useState([]);
  const [attendance, setAttendance] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/student/read")
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
      .post("http://127.0.0.1:8000/api/attendance", { attendance })
      .then((response) => {
        console.log(response.data);
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
    <AttendanceByDate studentsss={students}/>
    </>
  );
};

export default TakeAttendance;
// import Select from "react-select";
// import { useState, useEffect } from "react";
// import { format } from "date-fns";
// import Axios from "axios";
// import React from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// const TakeAttendance = () => {
//   const [selectedClass, setSelectedClass] = useState();
//   const [selectedSection, setSelectedSection] = useState();
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [students, setStudents] = useState([]);
//   const [sectionOptions, setSectionOptions] = useState([]);
//   const [classOptions, setClassOptions] = useState([]);
//   useEffect(() => {
//     Axios.get("http://localhost:8000/api/classes/read")
//       .then((res) => {
//         console.log(res.data);
//         setClassOptions(
//           res.data.map(({ id, Class_Name }) => ({
//             value: id,
//             label: Class_Name,
//           }))
//         );
//       })
//       .catch((err) => console.log(err));
//   }, []);
//   useEffect(() => {
//     Axios.get("http://localhost:8000/api/section/read")
//       .then((res) => {
//         console.log(res.data);
//         setSectionOptions(
//           res.data.map(({ id, Section_Name }) => ({
//             value: id,
//             label: Section_Name,
//           }))
//         );
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   useEffect(() => {
//     if (selectedClass && selectedSection) {
//       Axios.get(
//         `http://localhost:8000/api/student/read?class_id=${selectedClass.value}&section_id=${selectedSection.value}`
//       )
//         .then((res) => {
//           setStudents(res.data);
//         })
//         .catch((err) => console.log(err));
//     }
//   }, [selectedClass, selectedSection]);

//   const handleSelectChangeClass = (option) => {
//     setSelectedClass(option);
//   };

//   const handleSelectChangeSection = (option) => {
//     setSelectedSection(option);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // submit the attendance data to the server
//   };

//   return (
//     <div className="takeAttendance">
//       <h1>Take Attendance</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Class:</label>
//           <Select
//             placeholder="Select Class"
//             onChange={handleSelectChangeClass}
//             value={selectedClass}
//             options={classOptions}
//             isClearable
//           />
//         </div>
//         <div className="form-group">
//           <label>Section:</label>
//           <Select
//             placeholder="Select Section"
//             onChange={handleSelectChangeSection}
//             value={selectedSection}
//             isDisabled={!selectedClass}
//             options={sectionOptions}
//             isClearable
//           />
//         </div>
//         <div className="form-group">
//           <label>Date:</label>
//           <DatePicker
//             showIcon
//             selected={selectedDate}
//             onChange={(date) => setSelectedDate(date)}
//             className="datePicker"
//             dateFormat="yyyy-MM-dd"
//           />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Present</th>
//             <th>Absent</th>
//           </tr>
//         </thead>
//         <tbody>
//           {students.map((student) => (
//             <tr key={student.id}>
//               <td>{student.First_Name} {student.Last_Name}</td>
//               <td><input type="radio" name={`attendance-${student.id}`} value="present"/></td>
//               <td><input type="radio" name={`attendance-${student.id}`} value="absent"/></td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default TakeAttendance;
