// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import AttendanceByDate from "../AttendanceByDate";
// const TakeAttendance = () => {
//   const [students, setStudents] = useState([]);
//   const [attendance, setAttendance] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://127.0.0.1:8000/api/students")
//       .then((response) => {
//         setStudents(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   const handleChange = (e, studentId) => {
//     const newAttendance = [...attendance];
//     const attendanceType = e.target.value;
//     const index = newAttendance.findIndex((a) => a.studentId === studentId);
//     if (index === -1) {
//       newAttendance.push({ studentId, attendanceType });
//     } else {
//       newAttendance[index].attendanceType = attendanceType;
//     }
//     setAttendance(newAttendance);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios
//       .post("http://127.0.0.1:8000/api/attendance", { attendance })
//       .then((response) => {
//         console.log(response.data);
//         setAttendance([]);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (<>
//     <form onSubmit={handleSubmit}>
//       <table>
//         <thead>
//           <tr>
//             <th>Student ID</th>
//             <th>Student Name</th>
//             <th>Attendance</th>
//           </tr>
//         </thead>
//         <tbody>
//           {students.map((student) => (
//             <tr key={student.id}>
//               <td>{student.id}</td>
//               <td>{student.First_Name}</td>
//               <td>
//                 <select
//                   value={
//                     attendance.find((a) => a.studentId === student.id)
//                       ?.attendanceType || "none"
//                   }
//                   onChange={(e) => handleChange(e, student.id)}
//                 >
//                   <option value="none">Select Attendance</option>
//                   <option value="present">Present</option>
//                   <option value="absent">Absent</option>
//                   <option value="late">Late</option>
//                 </select>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <button type="submit">Submit</button>
//     </form>
//     {/* <AttendanceByDate studentsss={students}/> */}
//     </>
//   );
// };

// export default TakeAttendance;
import Select from "react-select";
import { useState, useEffect } from "react";
import Axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

import "react-datepicker/dist/react-datepicker.css";

const TakeAttendance = () => {
  const [selectedClass, setSelectedClass] = useState();
  const [selectedSection, setselctedSection] = useState();
  const [selectedStudent, setSelectedStudent] = useState();
  //////////////////////////////////////////////////////////////

  const [attendance, setAttendance] = useState([]);
  //////////////////////////////////////////////////////////////

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
  //////////////////////////////////////////////////////////////

  const handleChange = (e, studentId) => {
        const newAttendance = [...attendance];
        const attendanceType = e.target.value;
        console.log('batikh')
        const index = newAttendance.findIndex((a) => a.studentId === studentId);
        if (index === -1) {
          newAttendance.push({ studentId, attendanceType });
        } else {
          newAttendance[index].attendanceType = attendanceType;
        }
        setAttendance(newAttendance);
      };
  //////////////////////////////////////////////////////////////

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
  };

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
  };

  const studentreader = async (sectionid) => {
    await Axios.get(
      `http://localhost:8000/api/students/sections/${sectionid}`
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
    await Axios.delete(`http://127.0.0.1:8000/api/students/${id}`);
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
              <select
                  value={
                    attendance.find((a) => a.studentId === hourframe.id )
                      ?.attendanceType || "none"
                  }
                  onChange={(e) => handleChange(e,hourframe.id )}
                >
                  <option value="none">Select Attendance</option>
                  <option value="present">Present</option>
                  <option value="absent">Absent</option>
                  <option value="late">Late</option>
                </select>
              <button
                className="delete-classes"
                onClick={() => removestudent(hourframe.id)}
              >
                delete
              </button>

              <button className="edit-classes">
                {" "}
                <Link
                  className="edit-classes"
                  to="/SecondSelect"
                  state={{ location: "/Attendance", student_id: hourframe.id }}
                >
                  {" "}
                  view
                </Link>{" "}
              </button>
              <button type="submit">Submit</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TakeAttendance;
