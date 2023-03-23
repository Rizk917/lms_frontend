import { useState, useEffect } from "react";
import axios from "axios";
import Barchart from "../component/FatimaComponents/Barchart";
import ClassProgressRow from "../component/FatimaComponents/ClassProgressRow";
import FrequentAbsentStudents from "../component/FatimaComponents/FrequentAbsentStudents";
import Piechart from "../component/FatimaComponents/PiechartTotal";
import Header from "../component/Header";
import Sidebar from "../component/Sidebar";
import "../CSS/Home.css";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [attendanceData, setAttendanceData] = useState([]);
  const [newattdata, setnewattdata] = useState([]);

  const navigate = useNavigate();
  const Role = localStorage.getItem("Role");
    useEffect(() => {
      if (!localStorage.getItem('token')) {
        navigate('/');
      }else  if (Role === "teacher"){
      
        navigate('/home');
       
      }
    }, []);

  const attendanceFunction = async()=>{
     axios.get("https://lms-backend-production-587c.up.railway.app/api/attendance/dashboard")
      .then((res) => {
        setAttendanceData(res.data);
      })
      .catch((err) => console.log(err));
  }


  useEffect(() => {
    attendanceFunction();
    setnewattdata(attendanceData)
  }, []);





  // const data = [
  //   { name: "Attendant", value: (1000 * 100) / 2000, color: "#0390CD" },
  //   { name: "Absent", value: (400 * 100) / 2000, color: "#163951" },
  //   { name: "Late", value: (600 * 100) / 2000, color: "yellow" },
  // ];

  return (
    <div className="home">
      <div className="flexing">
        <Sidebar />
        <div className="ordering">
          <Header />
          <section className="homeOne">
            <div className="barChart">
              <h1>Attendance Bar Graph</h1>
              <Barchart attendanceData={attendanceData} />
            </div>
            <div className="classProgressContainer">
              <h1>Class Progress</h1>
              {Object.entries(attendanceData).map(([key, value]) => (
                <ClassProgressRow label={key} value={value} />
              ))}
            </div>
          </section>
          <section className="homeTwo">
            <div className="pieChartContainer">
              <h1>All school Attendance</h1>
              <Piechart />
            </div>
            <div>
              <h1>Frequently Absent Students</h1>
              <FrequentAbsentStudents />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
