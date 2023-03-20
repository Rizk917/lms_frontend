import "../App.css";
import AttendanceTable from "../component/FatimaComponents/Attendance";
import Header from "../component/Header";
import Sidebar from "../component/Sidebar";

function AttendancePage() {
  return (
    <div>
      <div className="flexing">
        <Sidebar />
        <div className="ordering">
          <Header />
          <AttendanceByDate />
        </div>
      </div>
    </div>
  );
}

export default AttendancePage;