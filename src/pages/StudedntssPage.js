import "../App.css";
import AttendanceTable from "../component/FatimaComponents/Attendance";
import Header from "../component/Header";
import Sidebar from "../component/Sidebar";
import Studentss from "../component/Studentss";

function StudentssPage() {
  return (
    <div>
      <div className="flexing">
        <Sidebar />
        <div className="ordering">
          <Header />
          <Studentss />
        </div>
      </div>
    </div>
  );
}

export default StudentssPage;