import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { useGetOrdersPerYearQuery } from "../state/statsApi";

const YealyChart = () => {
  const { data, isLoading } = useGetOrdersPerYearQuery();

  console.log(data);

  if (!data || isLoading) return "LOADING...";
  return (
    <ResponsiveContainer width={"100%"} height={"100%"}>
      <BarChart
        data={data}
        margin={{
          left: 20,
          right: 10,
          top: 10,
        }}
      >
        <Bar type="monotone" dataKey="count" stroke="#aaa" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip
          wrapperStyle={{
            color: "#aaa",
          }}
          contentStyle={{
            color: "#aaa",
            borderRadius: "10px",
          }}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default YealyChart;
