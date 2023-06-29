import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { useGetOrdersPerDayQuery } from "../state/statsApi";

const OverviewChart = () => {
  const { data, isLoading } = useGetOrdersPerDayQuery();

  console.log(data);

  if (!data || isLoading) return "LOADING...";
  return (
    <ResponsiveContainer width={"100%"} height={"100%"}>
      <LineChart
        data={data}
        margin={{
          left: 20,
          right: 10,
          top: 10,
        }}
      >
        <Line type="monotone" dataKey="count" stroke="#aaa" />
        <XAxis dataKey="day" />
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
      </LineChart>
    </ResponsiveContainer>
  );
};

export default OverviewChart;
