import "../App.css";
import Header from "../component/Header";
import Sidebar from "../component/Sidebar";
import Addstudent from "../component/Addstudent";
import CLasses from "../component/Classes.jsx";

function ClassesPage() {
  return (
    <div>
  
      <div className="flexing">
        <Sidebar />
        <div className="ordering">
        <Header />
        <CLasses />
        </div>
      </div>
    </div>
  );
}

export default ClassesPage;
