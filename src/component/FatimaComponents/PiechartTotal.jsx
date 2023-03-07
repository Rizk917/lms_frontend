import { PieChart, Pie, Tooltip, Cell} from "recharts";

const Piechart = ({ data }) => {
  return (
    <div className="pieChart">
      <PieChart width={300} height={300}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          label>
           {data.map((entry, index) => (
              <Cell key={index} fill={entry.color} />
            ))}
          </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default Piechart;
