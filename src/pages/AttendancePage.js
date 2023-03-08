import "../App.css";
import AttendanceTable from "../component/FatimaComponents/Attendance";
import Header from "../component/Header";
import Sidebar from "../component/Sidebar";

function ClassesPage() {
  const allData = {
    student_labels: [
      "ali",
      "bayan",
      "issa",
      "fadi",
      "layla",
      "fatima",
      "mahdi",
    ],
    class_labels: [
      "class 1",
      "class 2",
      "class 3",
      "class 4",
      "class 5",
      "class 6",
      "class 7",
      "class 8",
    ],
    section_labels: [
      "section A",
      "section B",
      "section C",
      "section D",
      "section E",
    ],
    data: [
      {
        student_name: "fadi",
        class_name: "class 5",
        section_name: "section A",
        date: "01/08/2022",
        attendance:"present",
      },
      {
        student_name: "fadi",
        class_name: "class 5",
        section_name: "section A",
        date: "01/08/2022",
        attendance:"late",
      },
      {
        student_name: "fadi",
        class_name: "class 5",
        section_name: "section A",
        date: "01/08/2022",
        attendance:"absent",
      },
    ],
  };
  return (
    <div>
      <div className="flexing">
        <Sidebar />
        <div className="ordering">
          <Header />
          <AttendanceTable
            student_labels={allData.student_labels}
            class_labels={allData.class_labels}
            section_labels={allData.section_labels}
            data={allData.data}
          />
        </div>
      </div>
    </div>
  );
}

export default ClassesPage;
