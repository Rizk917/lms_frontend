import { useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios";

const FrequentAbsentStudents = () => {
  // const frequentData = {
  //   "Class 1": [
  //     { student_id: "11", student_name: "Fatima", total_absence: "3" },
  //     { student_id: "22", student_name: "Ahmed", total_absence: "6" },
  //     { student_id: "33", student_name: "Sara", total_absence: "9" },
  //   ],
  //   "Class 2": [
  //     { student_id: "44", student_name: "Ali", total_absence: "2" },
  //     { student_id: "55", student_name: "Mona", total_absence: "7" },
  //     { student_id: "66", student_name: "Khalid", total_absence: "5" },
  //   ],
  //   "Class 3": [
  //     { student_id: "11", student_name: "Fatima", total_absence: "3" },
  //     { student_id: "22", student_name: "Ahmed", total_absence: "6" },
  //     { student_id: "33", student_name: "Sara", total_absence: "9" },
  //   ],
  //   "Class 4": [
  //     { student_id: "44", student_name: "Ali", total_absence: "2" },
  //     { student_id: "55", student_name: "Mona", total_absence: "7" },
  //     { student_id: "66", student_name: "Khalid", total_absence: "5" },
  //   ],
  //   "Class 5": [
  //     { student_id: "11", student_name: "Fatima", total_absence: "3" },
  //     { student_id: "22", student_name: "Ahmed", total_absence: "6" },
  //     { student_id: "33", student_name: "Sara", total_absence: "9" },
  //   ],
  //   "Class 6": [
  //     { student_id: "44", student_name: "Ali", total_absence: "2" },
  //     { student_id: "55", student_name: "Mona", total_absence: "7" },
  //     { student_id: "66", student_name: "Khalid", total_absence: "5" },
  //   ],
  // };

  useEffect(() => {
    axios
      .get("https://lms-backend-production-587c.up.railway.app/api/classes")
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

  const [selectedClass, setSelectedClass] = useState();
  const [classOptions, setClassOptions] = useState([]);
  const [absentStudents, setAbsentStudents] = useState([]);

  const handleSelectChange = (option) => {
    setSelectedClass(option);
  };

  useEffect(() => {
    axios
      .get(
        `https://lms-backend-production-587c.up.railway.app/api/attendance/dashboard/frequent?${
          selectedClass ? "class_id=" + selectedClass.value : ""
        }`
      )
      .then((res) => {
        setAbsentStudents(res.data);
        console.log("hello", res.data);
      })
      .catch((err) => console.log(err));
  }, [selectedClass]);

  return (
    <div className="frequentAbsentStudents">
      <Select
        placeholder="Select Class"
        onChange={handleSelectChange}
        value={selectedClass}
        options={classOptions}
        isClearable
      />

      {absentStudents.length > 0 ? (
        <div className="absentStudentList">
          {absentStudents.map((student) => (
            <div className="absentStudentRow">
              <div className="absentStudentElement">
                {student.First_Name + " " + student.Last_Name}
              </div>
              <div className="absentStudentElement">{student.count}</div>
              <div className="absentStudentButtonBorder">
                <button className="edit-classes ">View</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="comment">
          No Absent Students Above the normal range <br /> Happy Class :)
        </div>
      )}
    </div>
  );
};

export default FrequentAbsentStudents;
