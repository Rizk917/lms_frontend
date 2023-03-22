import "../../App.css";
import Header from "../../component/Header";
import Sidebar from "../../component/Sidebar";
import EditAdminPage from "../../component/edit-admin/EditAdmins"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function EditAdminsPage() {
  const navigate = useNavigate();
  const Role = localStorage.getItem("Role");
    useEffect(() => {
      if (!localStorage.getItem('token')) {
        navigate('/');
      }else  if (Role === "moderator"){
      
        navigate('/home');
       
      }
    }, []);
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