import "../../App.css";
import Header from "../../component/Header";
import Sidebar from "../../component/Sidebar";
import Students from "../../component/students/student";
function Studentspage() {
  return (
    <div>




      <div className="flexing">
        <Sidebar />
        <div className="ordering">
          <Header />
          <Students />
        </div>


      </div>
    </div>
  );
}

export default Studentspage;