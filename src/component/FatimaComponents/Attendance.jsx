import Select from "react-select";
import { useState, useEffect } from "react";
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AttendanceTable = ({
  student_labels,
  class_labels,
  section_labels,
  data,
}) => {
  const [selectedStudent, setSelectedStudent] = useState();
  const [selectedClass, setSelectedClass] = useState();
  const [selectedSection, setselctedsection] = useState();
  const [startDate, setStartDate] = useState(new Date());

  const handleSelectChangeStudent = ({ value }) => {
    setSelectedStudent(value);
  };

  const handleSelectChangeClass = ({ key, value }) => {
    setSelectedClass(value);
    console.log(key);
  };

  const handleSelectChangeSection = ({ value }) => {
    setselctedsection(value);
  };

  console.log(selectedClass);

  return (
    <div className="attendanceTable">
      <h1>Filter List by:</h1>
      <div className="filterListBy">
        <div className="filterListByAlone">
          <h3>Class</h3>
          <Select
            placeholder="Select Class"
            onChange={handleSelectChangeClass}
            value={
              selectedClass
                ? { value: selectedClass, label: selectedClass }
                : undefined
            }
            options={class_labels.map((item) => ({
              label: item,
              value: item,
            }))}
          />
        </div>
        <div className="filterListByAlone">
          <h3>Section</h3>
          <Select
            placeholder="Select Section"
            onChange={handleSelectChangeSection}
            value={
              selectedSection
                ? { value: selectedSection, label: selectedSection }
                : undefined
            }
            isDisabled={!selectedClass}
            options={section_labels.map((item) => ({
              label: item,
              value: item,
            }))}
          />
        </div>
        <div className="filterListByAlone">
          <h3>Student</h3>
          <Select
            placeholder="Select Student"
            onChange={handleSelectChangeStudent}
            value={
              selectedStudent
                ? { value: selectedStudent, label: selectedStudent }
                : undefined
            }
            isDisabled={!selectedClass || !selectedSection}
            options={student_labels.map((item) => ({
              label: item,
              value: item,
            }))}
          />
        </div>
        <div className="filterListByAlone">
          <h3>Date</h3>
          <DatePicker
            showIcon
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="datePicker"
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
        </div>
        {data.map((item) => (
          <div className="attendanceListRow attendanceBorder">
            <div className="attendanceBorderWord">{item.class_name}</div>
            <div className="attendanceBorderWord">{item.section_name}</div>
            <div className="attendanceBorderWord">{item.student_name}</div>
            <div className="attendanceBorderWord">{item.date}</div>
            <div className="attendanceBorderWord">{item.attendance}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AttendanceTable;
