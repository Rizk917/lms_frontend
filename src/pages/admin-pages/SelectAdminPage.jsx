import "../../App.css";
import Header from "../../component/Header";
import Sidebar from "../../component/Sidebar";
import SelectAdminPage from "../../component/select-admin/SelectAdmins"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function SelectAdminsPage() {
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
  
  
            <SelectAdminPage />
          </div>
  
  
        </div>
      </div>
    );
  }

  export default SelectAdminsPage;