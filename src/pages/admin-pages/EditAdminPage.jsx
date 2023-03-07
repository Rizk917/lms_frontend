import "../../App.css";
import Header from "../../component/Header";
import Sidebar from "../../component/Sidebar";
import EditAdminPage from "../../component/edit-admin/EditAdmins"

function EditAdminsPage() {
    return (
        <div>




        <div className="flexing">
          
          <Sidebar />
          <div className="ordering">
            <Header />
  
  
            <EditAdminPage />
          </div>
  
  
        </div>
      </div>
    );
  }

  export default EditAdminsPage;