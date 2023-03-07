import "../../App.css";
import Header from "../../component/Header";
import Sidebar from "../../component/Sidebar";
import SelectAdminPage from "../../component/select-admin/SelectAdmins"

function SelectAdminsPage() {
    return (
        <div>




        <div className="flexing">
          
          <Sidebar />
          <div className="ordering">
            <Header />
  
  
            <SelectAdminPage />
          </div>
  
  
        </div>
      </div>
    );
  }

  export default SelectAdminsPage;