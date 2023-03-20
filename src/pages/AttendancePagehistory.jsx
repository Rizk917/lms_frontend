import "../App.css";
import AttendanceByDate from "../AttendanceByDate";
import AttendanceTable from "../component/FatimaComponents/Attendance";
import Header from "../component/Header";
import Sidebar from "../component/Sidebar";

function AttendancePagehistory() {
  return (
    <div>
      <div className="flexing">
        <Sidebar />
        <div className="ordering">
          <Header />
          <AttendanceTable />
        </div>
      </div>
    </div>
  );
}

export default AttendancePagehistory;