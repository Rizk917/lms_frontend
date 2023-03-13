import "../App.css";
import AttendanceTable from "../component/FatimaComponents/Attendance";
import Header from "../component/Header";
import Sidebar from "../component/Sidebar";

function ClassesPage() {
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

export default ClassesPage;
