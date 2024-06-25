"use client";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function Graph() {
  return (
    <div>
      <Chart
        options={{
          xaxis: {
            categories: [2024, 2025, 2026, 2027, 2028, 2029, 2030],
          },
          stroke: {
            curve: "smooth",
          },

          chart: {
            toolbar: {
              show: false,
            },
          },
          colors: ["#002776", "#DFDFDF", "#7EB5D2"],
          fill: {
            type: "solid",
          },
        }}
        series={[
          {
            name: "Du gjør ingenting",
            type: "area",
            zIndex: 2,
            data: [
              2500,
              2500 * 1.1,
              2500 * 1.2,
              2500 * 1.3,
              2500 * 1.4,
              2500 * 1.5,
            ],
          },
          {
            name: "Dårligste",
            type: "area",
            data: [
              2500,
              2500 * 1.2,
              2500 * 1.4,
              2500 * 1.6,
              2500 * 1.8,
              2500 * 2,
            ],
          },
          {
            name: "Beste",
            type: "area",
            data: [
              2500,
              2500 * 0.9,
              2500 * 0.85,
              2500 * 0.7,
              2500 * 0.67,
              2500 * 0.6,
            ],
          },
        ]}
      />
    </div>
  );
}
