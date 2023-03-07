import "../../App.css";
import Header from "../../component/Header";
import Sidebar from "../../component/Sidebar";
import EditStudentPage from "../../component/edit-student/EditStudent"

function EditStudentsPage() {
    return (
        <div>




        <div className="flexing">
          
          <Sidebar />
          <div className="ordering">
            <Header />
  
  
            <EditStudentPage />
          </div>
  
  
        </div>
      </div>
    );
  }

export default EditStudentsPage;