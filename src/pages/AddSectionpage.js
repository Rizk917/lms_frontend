import "../App.css";
import Header from "../component/Header";
import Sidebar from "../component/Sidebar";
import Addstudent from "../component/Addstudent";
import AddSection from "../component/AddSection";

function AddSectionPage() {
  return (
    <div>
  
      <div className="flexing">
        <Sidebar />
        <div className="ordering">
        <Header />
       <AddSection/>
        </div>
      </div>
    </div>
  );
}

export default AddSectionPage;
