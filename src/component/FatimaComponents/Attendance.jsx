import Select from "react-select";
import { useState, useEffect } from "react";
import Axios from "axios";
import axios from "axios";
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import JsPDF from 'jspdf';

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
  const generatePDF = () => {

    const report = new JsPDF('portrait','pt','a1');
    report.html(document.querySelector('#report')).then(() => {
        report.save('report.pdf');
    });}
  ///////////////////////////////////////////////////////

  const handleEdit = async (item) => {
    const index = attendances.findIndex((a) => a.id === item.id);
    const newStatus = document.getElementById(`attendance-status-${item.id}`).value;
  
    if (newStatus !== item.status) {
      const newAttendance = [...attendances];
      newAttendance[index].status = newStatus;
      setAttendances(newAttendance);
  
      try {
        await axios.put(`http://127.0.0.1:8000/api/attendance/${item.id}`, {
          Date: item.Date,
          Status: newStatus,
        });
  
        toast.success("Attendance edited successfully!");
  
      } catch (error) {
        console.error(error);
      }
    }
  };
  

  ///////////////////////////////////////////////////////

  // classes selection
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/classes")
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
    if (selectedClass) {
      axios
        .get(
          `http://localhost:8000/api/classes/${selectedClass.value}/sections`
        )
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

  //The whole table
  useEffect(() => {
    axios
      .get(
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
  <>
    <div   className="attendanceTable">
<ToastContainer/>
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
            id="select"
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
            id="select"
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
      <div id="report" className="attendanceList" >
        <div className="attendanceListHeader">
          <div className="attendanceBorderWord">Class</div>
          <div className="attendanceBorderWord">Section</div>
          <div className="attendanceBorderWord">Student Name</div>
          <div className="attendanceBorderWord">Date</div>
          <div className="attendanceBorderWord">Attendance</div>
          <div className="attendanceBorderWord">Edit</div>
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
              {/* <div id={`attendance-status-${item.id}`}
                defaultValue={item.status}>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="option1"
                    // checked={selectedOption === "option1"}
                    onClick={() => handleEdit(item)}
                  />
                  <label className="form-check-label" htmlFor="inlineRadio1">
                    present
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="option2"
                    // checked={selectedOption === "option2"}
                    onClick={() => handleEdit(item)}
                  />
                  <label className="form-check-label" htmlFor="inlineRadio2">
                    absent
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio3"
                    value="option3"
                    // checked={selectedOption === "option3"}
                    onClick={() => handleEdit(item)}
                  />
                  
                  <label className="form-check-label" htmlFor="inlineRadio3">
                    late 
                  </label>
                </div>
              </div> */}
              <div className="attendanceEdit">
              <select
                className="new-select"
                id={`attendance-status-${item.id}`}
                defaultValue={item.status}
              >
                <option value="present">Present</option>
                <option value="absent">Absent</option>
                <option value="late">Late</option>
              </select>
              <button className="attendance-tick" onClick={() => handleEdit(item)}>
                <p>Edit</p>
              </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="Export-center" >
      <button onClick={generatePDF} type="button" className="submit-class">Export PDF</button>
      </div>
    </div>
</>

  );
};
export default AttendanceTable;
