import Barchart from "../component/FatimaComponents/Barchart";
import ClassProgressRow from "../component/FatimaComponents/ClassProgressRow";
import FrequentAbsentStudents from "../component/FatimaComponents/FrequentAbsentStudents";
import Piechart from "../component/FatimaComponents/PiechartTotal";
import Header from "../component/Header";
import Sidebar from "../component/Sidebar";
import "../CSS/Home.css";

const Home = () => {
  const data = [
    { name: "Attendant", value: (1000 * 100) / 2000, color: "#0390CD" },
    { name: "Absent", value: (400 * 100) / 2000, color: "#163951" },
    { name: "Late", value: (600 * 100) / 2000, color: "yellow" },
  ];

  //lezem ykoun feh endpoint treddelle hal data be hal form
  //or badde o3od e5od list el attendance w a3mellon filtering
  // bel sql feh querry btnkatab la t3tene el % of absence and attendance
  // y3ne bekaffene mn el back end enu y3tene el attendance
  const barChartData = {
    labels: [
      "Class 1",
      "Class 2",
      "Class 3",
      "Class 4",
      "Class 5",
      "Class 6",
      "Class 7",
    ],
    absenceRecords: [65, 59, 80, 81, 56, 55, 40],
    attendanceRecords: [28, 48, 40, 19, 86, 27, 90],
  };

  //dectionary array (associative array)
  const classProggressData = {
    "Class 1": [
      { name: "Attendant", value: (1000 * 100) / 2000, color: "#0390CD" },
      { name: "Absent", value: (400 * 100) / 2000, color: "#163951" },
      { name: "Late", value: (600 * 100) / 2000, color: "yellow" },
    ],
    "Class 2": [
      { name: "Attendant", value: (800 * 100) / 2000, color: "#0390CD" },
      { name: "Absent", value: (500 * 100) / 2000, color: "#163951" },
      { name: "Late", value: (500 * 100) / 2000, color: "yellow" },
    ],
    "Class 3": [
      { name: "Attendant", value: (800 * 100) / 2000, color: "#0390CD" },
      { name: "Absent", value: (500 * 100) / 2000, color: "#163951" },
      { name: "Late", value: (500 * 100) / 2000, color: "yellow" },
    ],
    "Class 4": [
      { name: "Attendant", value: (800 * 100) / 2000, color: "#0390CD" },
      { name: "Absent", value: (500 * 100) / 2000, color: "#163951" },
      { name: "Late", value: (500 * 100) / 2000, color: "yellow" },
    ],
    "Class 5": [
      { name: "Attendant", value: (800 * 100) / 2000, color: "#0390CD" },
      { name: "Absent", value: (500 * 100) / 2000, color: "#163951" },
      { name: "Late", value: (500 * 100) / 2000, color: "yellow" },
    ],
  };

  return (
    <div className="home">
      <div className="flexing">
        <Sidebar />
        <div className="ordering">
          <Header />
          <section className="homeOne">
            <div className="barChart">
              <h1>Attendance Bar Graph</h1>
              <Barchart {...barChartData} />
            </div>
            <div className="classProgressContainer">
              <h1>Class Progress</h1>
              {Object.entries(classProggressData).map(([key, value]) => (
                <ClassProgressRow label={key} data={value} />
              ))}
            </div>
          </section>
          <section className="homeTwo">
            <div className="pieChartContainer">
              <h1>All school Attendance</h1>
              <Piechart data={data} />
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
