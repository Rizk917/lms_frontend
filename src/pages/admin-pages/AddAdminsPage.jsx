import "../../App";
import Header from "../../component/Header";
import Sidebar from "../../component/Sidebar";
import AddAdmins from "../../component/add-admin/AddAdmins";
function AddAdminPage() {
  return (
    <div>




      <div className="flexing">
        
        <Sidebar />
        <div className="ordering">
          <Header />


          <AddAdmins />
        </div>


      </div>
    </div>
  );
}

export default AddAdminPage;

