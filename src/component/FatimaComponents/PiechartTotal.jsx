import { useEffect, useState } from "react";
import axios from "axios";
import { PieChart, Pie, Tooltip, Cell } from "recharts";

const Piechart = () => {
  const [bigPieChartData, setBigPieChartData] = useState([]);

  const piechartFunction = async () => {
    await axios
      .get("https://lms-backend-production-587c.up.railway.app/api/attendance/dashboard/piechart")
      .then((res) => {
        console.log(res.data);

        setBigPieChartData(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    piechartFunction();
  }, []);

  return (
    <div className="pieChart">
      <PieChart width={400} height={350}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={bigPieChartData}
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
          labelLine={{
            stroke: "gray", // set label line color
            strokeWidth: 1,
          }}
        >
          {bigPieChartData.map((entry, index) => (
            <>
              <Cell
              label={entry.label}
                key={index}
                fill={
                  entry.label === "Present"
                    ? "#0390CD"
                    : entry.label === "Late"
                    ? "yellow"
                    : entry.label === "Absent"
                    ? "#163951"
                    : ""
                }
              />

              {console.log(entry.label)}
            </>
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default Piechart;
