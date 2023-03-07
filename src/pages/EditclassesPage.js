import "../App.css";
import Header from "../component/Header";
import Sidebar from "../component/Sidebar";
import AddAdmins from "../component/AddAdmins";
import AddClasses from "../component/AddClasses";
import Editclasses from "../component/Editclasses";
function EditclassesPage() {
  return (
    <div>
     
      <div className="flexing">
      <Sidebar />
      <div className="ordering">

        <Header />
        <Editclasses />
        </div>
      </div>
    </div>
  );
}

export default EditclassesPage;
