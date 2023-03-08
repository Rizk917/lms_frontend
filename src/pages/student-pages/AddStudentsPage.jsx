import "../../App";
import Header from "../../component/Header";
import Sidebar from "../../component/Sidebar";
import Addstudent from "../../component/add-students/AddStudents";

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