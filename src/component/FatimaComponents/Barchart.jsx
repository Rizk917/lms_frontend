import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";
import { useEffect, useState } from "react";

//to activate the chart
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Barchart = ({ attendanceData }) => {
  const [classLabel, setClassLabel] = useState([]);
  const [attendanceRecords, setAttendanceRecords] = useState([]);
  const [absenceRecords, setAbsenceRecords] = useState([]);
  //we are transforming the attendaceData which is an object into an array of keys and values array of arrays, [[key1,value1],[key2,value2]]

useEffect(() => {
  const newClassLabel = [];
  const newAttendanceRecords = [];
  const newAbsenceRecords = [];

  Object.entries(attendanceData).forEach(([key, value]) => {
    newClassLabel.push(key);
    newAbsenceRecords.push(value.absent ?? 0);
    newAttendanceRecords.push((value.present ?? 0) + (value.late ?? 0));
  });

  setClassLabel(newClassLabel);
  setAbsenceRecords(newAbsenceRecords);
  setAttendanceRecords(newAttendanceRecords);
}, [attendanceData]);


  const data = {
    labels: classLabel,
    datasets: [
      {
        label: "Attended",
        backgroundColor: "#0390CD",
        borderWidth: 0.5,
        data: attendanceRecords,
      },
      {
        label: "Absent",
        backgroundColor: "#163951",
        borderWidth: 0.5,
        data: absenceRecords,
      },
    ],
  };

  const options = {
    title: {
      display: true,
      text: "Attendance Bar-Graph",
      fontSize: 20,
    },
    legend: {
      display: true,
      position: "bottom",
    },
    scales: {
      // yAxes: [
      //   {
      //     ticks: {
      //       beginAtZero: true,
      //     },
      //   },
      // ],
    },
    maintainAspectRatio: false,
  };
  return (
    <div className="chartContainer">
      <Bar data={data} options={options} />
    </div>
  );
};

export default Barchart;
