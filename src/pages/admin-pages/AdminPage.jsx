import "../../App"
import Header from "../../component/Header";
import Sidebar from "../../component/Sidebar";
import Admin from "../../component/admin/admin";
function Adminpage() {
  return (
    <div>




      <div className="flexing">
        <Sidebar />
        <div className="ordering">
          <Header />


          <Admin />
        </div>


      </div>
    </div>
  );
}

export default Adminpage;