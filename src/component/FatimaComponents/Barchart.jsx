import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

//to activate the chart
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Barchart = ({ labels, attendanceRecords, absenceRecords }) => {
  const data = {
    labels,
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
      xAxes: [
        {
          gridLines: {
            display: false, // Remove grid lines for the X axis
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
          gridLines: {
            display: false, // Remove grid lines for the Y axis
          },
        },
      ],
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
