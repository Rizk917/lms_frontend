import { PieChart, Pie, Tooltip, Cell } from "recharts";

const ClassProgressRow = ({ label, data }) => {
  return (
    <div className="classProgressRow">
      <div className="classProgressOne">
        <h2>{label}</h2>
        <p>{data[0].value}% Class Progress</p>
      </div>
      <div className="classProgressTwo">
        <PieChart width={150} height={150}>
          <Pie
            dataKey="value"
            stroke="none" // Remove sector lines and arrows
            strokeWidth={0} // Remove stroke width
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={40}
            fill="#8884d8"
            label={false}
          >
            {data.map((entry, index) => (
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
