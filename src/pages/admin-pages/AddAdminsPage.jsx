import "../../App";
import Header from "../../component/Header";
import Sidebar from "../../component/Sidebar";
import AddAdmins from "../../component/add-admin/AddAdmins";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AddAdminPage() {
  const navigate = useNavigate();
  const Role = localStorage.getItem("Role");
    useEffect(() => {
      if (!localStorage.getItem('token')) {
        navigate('/');
      }else  if (Role === "teacher"){
      
        navigate('/home');
       
      }
    }, []);
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

