import { useEffect, useState } from "react";
import axios from "axios";
import { PieChart, Pie, Tooltip, Cell } from "recharts";

const Piechart = () => {
  const [bigPieChartData, setBigPieChartData] = useState([]);

  const piechartFunction = async () => {
    await axios.get("http://localhost:8000/api/attendance/dashboard/piechart")
      .then((res) => {
        console.log(res.data[0].label);

        setBigPieChartData(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    piechartFunction();
  }, []);

  // const total =
  // ((data && data[0].value) ?? 0) + ((data && data[1].value) ?? 0) + ((data && data[2].value) ?? 0);
  // console.log(total);
  // const pieData = [
  //   {
  //     name: "Attendant",
  //     value: Math.round(((data[0].value ?? 0) * 100) / total),
  //     color: "#0390CD",
  //   },
  //   {
  //     name: "Late",
  //     value: Math.round(((data[1].value ?? 0) * 100) / total),
  //     color: "yellow",
  //   },
  //   {
  //     name: "Absent",
  //     value: Math.round(((data[2].value ?? 0) * 100) / total),
  //     color: "#163951",
  //   },
  // ];

  // const pieData = [
  //   {
  //     name: "Attendant",
  //     value: Math.round(((value[0].value ?? 0) * 100) / total),
  //     color: "#0390CD",
  //   },
  //   {
  //     name: "Late",
  //     value: Math.round(((value[1].value ?? 0) * 100) / total),
  //     color: "yellow",
  //   },
  //   {
  //     name: "Absent",
  //     value: Math.round(((value[2].value ?? 0) * 100) / total),
  //     color: "#163951",
  //   },
  // ];
  return (
    <div className="pieChart">
      <PieChart width={300} height={300}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={bigPieChartData}
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          label={({ percent }) => `${(percent * 100).toFixed(2)}%`}
          labelLine={{
            stroke: "gray", // set label line color
            strokeWidth: 1,
          }}
        >
          {bigPieChartData.map((entry, index) => (
            <>
              <Cell
                key={index}
                fill={
                  entry.label === "Present"
                    ? "#0390CD"
                    : entry.label === "Late"
                    ? "yellow"
                    : entry.label === "Absent"
                    ? "#163951"
                    : "blue"
                }
              />

              {console.log(entry.value)}
            </>
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default Piechart;
