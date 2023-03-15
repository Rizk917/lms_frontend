import { PieChart, Pie, Tooltip, Cell } from "recharts";

const ClassProgressRow = ({ label, value }) => {

  const total = (value.present ?? 0) + (value.late ?? 0) + (value.absent ?? 0);
  const pieData = [
    {
      name: "Attendant",
      value: Math.round(((value.present ?? 0) * 100) / total),
      color: "#0390CD",
    },

    {
      name: "Absent",
      value: Math.round(((value.absent ?? 0) * 100) / total),
      color: "#163951",
    },

    {
      name: "Late",
      value: Math.round(((value.late ?? 0) * 100) / total),
      color: "yellow",
    },
  ];
  return (
    <div className="classProgressRow">
      <div className="classProgressOne">
        <h2>{label}</h2>
        <p>{pieData[0].value + pieData[2].value}% Class Progress</p>
      </div>
      <div className="classProgressTwo">
        <PieChart width={150} height={150}>
          <Pie
            dataKey="value"
            stroke="none" // Remove sector lines and arrows
            strokeWidth={0} // Remove stroke width
            isAnimationActive={false}
            data={pieData}
            cx="50%"
            cy="50%"
            innerRadius={40}
            fill="#8884d8"
            label={false}
          >
            {pieData.map((entry, index) => (
              <Cell key={index} fill={entry.color} />
            ))}
          </Pie>

          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
};

export default ClassProgressRow;
