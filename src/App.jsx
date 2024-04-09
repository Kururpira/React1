import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Работа", 7],
  ["Еда", 2],
  ["Дорога до работы", 1],
  ["Отдых у компа", 3],
  ["Сон", 7],
];

export const options = {
  title: "Моя активность в течение дня",
};

export function App() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}

