import { useState, useEffect } from "react";
import Select from "react-select";

const FrequentAbsentStudents = () => {
  const frequentData = {
    "Class 1": [
      { student_id: "11", student_name: "Fatima", total_absence: "3" },
      { student_id: "22", student_name: "Ahmed", total_absence: "6" },
      { student_id: "33", student_name: "Sara", total_absence: "9" },
    ],
    "Class 2": [
      { student_id: "44", student_name: "Ali", total_absence: "2" },
      { student_id: "55", student_name: "Mona", total_absence: "7" },
      { student_id: "66", student_name: "Khalid", total_absence: "5" },
    ],
    "Class 3": [
      { student_id: "11", student_name: "Fatima", total_absence: "3" },
      { student_id: "22", student_name: "Ahmed", total_absence: "6" },
      { student_id: "33", student_name: "Sara", total_absence: "9" },
    ],
    "Class 4": [
      { student_id: "44", student_name: "Ali", total_absence: "2" },
      { student_id: "55", student_name: "Mona", total_absence: "7" },
      { student_id: "66", student_name: "Khalid", total_absence: "5" },
    ],
    "Class 5": [
      { student_id: "11", student_name: "Fatima", total_absence: "3" },
      { student_id: "22", student_name: "Ahmed", total_absence: "6" },
      { student_id: "33", student_name: "Sara", total_absence: "9" },
    ],
    "Class 6": [
      { student_id: "44", student_name: "Ali", total_absence: "2" },
      { student_id: "55", student_name: "Mona", total_absence: "7" },
      { student_id: "66", student_name: "Khalid", total_absence: "5" },
    ],
  };

  const [selectedClass, setSelectedClass] = useState();
  const [absentStudents, setAbsentStudents] = useState([]);

  const handleSelectChange = ({ value }) => {
    setSelectedClass(value);
  };

  useEffect(() => {
    if (selectedClass) {
      setAbsentStudents(frequentData[selectedClass]);
    }
  }, [selectedClass]);

  return (
    <div className="frequentAbsentStudents">
      <Select
        placeholder="Select Class"
        onChange={handleSelectChange}
        value={
          selectedClass
            ? { value: selectedClass, label: selectedClass }
            : undefined
        }
        options={Object.keys(frequentData).map((key) => ({
          value: key,
          label: key,
        }))}
      />

      {absentStudents.length > 0 && (
        <div className="absentStudentList">
          {absentStudents.map((student) => (
            <div className="absentStudentRow">
              <div className="absentStudentElement">{student.student_name}</div>
              <div className="absentStudentElement">{student.total_absence}</div>
              <div className="absentStudentButtonBorder"><button className="edit-classes ">View</button></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FrequentAbsentStudents;
