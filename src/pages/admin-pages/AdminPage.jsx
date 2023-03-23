import "../../App"
import Header from "../../component/Header";
import Sidebar from "../../component/Sidebar";
import Admin from "../../component/admin/admin";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Adminpage() {
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


          <Admin />
        </div>


      </div>
    </div>
  );
}

export default Adminpage;