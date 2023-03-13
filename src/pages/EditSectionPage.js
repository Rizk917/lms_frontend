import "../App.css";
import Header from "../component/Header";
import Sidebar from "../component/Sidebar";

import EditSection from "../component/EditSection";
function EditSectionPage() {
  return (
    <div>
     
      <div className="flexing">
      <Sidebar />
      <div className="ordering">

        <Header />
        <EditSection />
        </div>
      </div>
    </div>
  );
}

export default EditSectionPage;
