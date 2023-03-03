import "../App.css";
import Header from "../component/Header";
import Sidebar from "../component/Sidebar";
import Addstudent from "../component/Addstudent";

function AddStudentsPage() {
  return (
    <div>
  
      <div className="flexing">
        <Sidebar />
        <div className="ordering">
        <Header />
        <Addstudent />
        </div>
      </div>
    </div>
  );
}

export default AddStudentsPage;
