import React from "react";
import { ComposedChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

const data = [
  {
    name: "Jan 1st",
    dollar: 80
  },
  {
    name: "Jan 2nd",
    dollar: 96
  },
  {
    name: "Jan 3rd",
    dollar: 109
  },
  {
    name: "Jan 4th",
    dollar: 120
  },
  {
    name: "Feb 1st",
    dollar: 110
  },
  {
    name: "Feb 2nd",
    dollar: 68
  }
];

export default function App() {
  return (
    <ComposedChart
      width={500}
      height={400}
      data={data}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }}
    >
      <XAxis dataKey="name"/>
      <YAxis dataKey="dollar"/>
      <Tooltip />
      <Legend />
      <Bar dataKey="dollar" barSize={20} fill="#413ea0" />
    </ComposedChart>
  );
}
