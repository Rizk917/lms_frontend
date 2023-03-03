import "../App.css";
import Header from "../component/Header";
import Sidebar from "../component/Sidebar";
import AddAdmins from "../component/AddAdmins";
function AddAminPage() {
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

export default AddAminPage;
