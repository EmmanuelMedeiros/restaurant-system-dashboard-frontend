import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import "./styles.scss";

const defaultData = [
  { date: "2025/01", value: 4821 },
  { date: "2025/02", value: 3614 },
  { date: "2025/03", value: 5298 },
  { date: "2025/04", value: 4730 },
  { date: "2025/05", value: 3920 },
  { date: "2025/06", value: 4507 },
  { date: "2025/07", value: 3892 },
  { date: "2025/08", value: 5083 },
  { date: "2025/09", value: 3411 },
  { date: "2025/10", value: 4775 },
  { date: "2025/11", value: 3640 },
  { date: "2025/12", value: 5195 },
];

interface MLineChartProps {
  data: {
    date: Date,
    value: number,
  }[],
}

const MLineChart: React.FC<MLineChartProps> = (props) => {
  const [chartWidth, setChartWidth] = useState<number>(0)

  useEffect(() => {
    checkWidth();
    addEventListener('resize', () => checkWidth());
  }, [])

  function checkWidth() {
    setChartWidth(document.body.clientWidth);
  }

  return (
    <div className="m-auto">
      <LineChart
        className="m-auto"
        width={chartWidth - 200}
        height={300}
        data={props.data || defaultData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" padding={{ left: 20, right: 20 }} />
        <YAxis />
        <Tooltip
          wrapperStyle={{ pointerEvents: "auto" }}
        />
        <Legend />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#82ca9d"
        />
      </LineChart>
    </div>
  );
};

export default MLineChart;
