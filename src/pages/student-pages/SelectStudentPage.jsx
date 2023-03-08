import "../../App.css";
import Header from "../../component/Header";
import Sidebar from "../../component/Sidebar";
import SelectStudentPage from "../../component/select-student/SelectStudent"

function SelectStudent() {
  return (
    <div>
  
      <div className="flexing">
        <Sidebar />
        <div className="ordering">
        <Header />
        <SelectStudentPage />
        </div>
      </div>
    </div>
  );
}

export default SelectStudent;