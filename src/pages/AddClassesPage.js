import "../App.css";
import Header from "../component/Header";
import Sidebar from "../component/Sidebar";

import AddClasses from "../component/AddClasses";
function AddClassesPage() {
  return (
    <div>
     
      <div className="flexing">
      <Sidebar />
      <div className="ordering">

        <Header />
        <AddClasses />
        </div>
      </div>
    </div>
  );
}

export default AddClassesPage;
