import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const MyComponent = () => {
  const chart1Ref = useRef(null);
  const chart2Ref = useRef(null);
  const chart3Ref = useRef(null);

  useEffect(() => {
    // Function to create or update the chart
    const createOrUpdateChart = (ctx, chartType, chartData) => {
      if (ctx.chart) {
        // If chart instance exists, destroy it
        ctx.chart.destroy();
      }
      // Create new chart instance
      ctx.chart = new Chart(ctx, {
        type: chartType,
        data: chartData,
      });
    };

    // Chart 1
    createOrUpdateChart(
      chart1Ref.current.getContext("2d"),
      "pie",
      {
        labels: ["Red", "Blue", "Yellow"],
        datasets: [
          {
            data: [30, 40, 20],
            backgroundColor: [
              "rgba(255, 99, 132, 0.7)",
              "rgba(54, 162, 235, 0.7)",
              "rgba(255, 206, 86, 0.7)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
            ],
            borderWidth: 1,
          },
        ],
      }
    );

    // Chart 2
    createOrUpdateChart(
      chart2Ref.current.getContext("2d"),
      "pie",
      {
        labels: ["Red", "Blue", "Yellow"],
        datasets: [
          {
            data: [30, 40, 20],
            backgroundColor: [
              "rgba(255, 99, 132, 0.7)",
              "rgba(54, 162, 235, 0.7)",
              "rgba(255, 206, 86, 0.7)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
            ],
            borderWidth: 1,
          },
        ],
      }
    );

    // Chart 3
    createOrUpdateChart(
      chart3Ref.current.getContext("2d"),
      "pie",
      {
        labels: ["Red", "Blue", "Yellow"],
        datasets: [
          {
            data: [30, 40, 20],
            backgroundColor: [
              "rgba(255, 99, 132, 0.7)",
              "rgba(54, 162, 235, 0.7)",
              "rgba(255, 206, 86, 0.7)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
            ],
            borderWidth: 1,
          },
        ],
      }
    );
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3  h-[90%] gap-4">
      {/* Chart 1 */}
      <div className="w-full h-auto rounded-lg flex-shrink-0 bg-gray-300 mb-5">
        <label>Lecture</label>
        <canvas ref={chart1Ref}></canvas>
      </div>

      {/* Chart 2 */}
      <div className="w-full h-auto rounded-lg flex-shrink-0 bg-gray-300 mb-5">
      <label>Quiz</label>
        <canvas ref={chart2Ref}></canvas>
      </div>

      {/* Chart 3 */}
      <div className="w-full h-auto rounded-lg flex-shrink-0 bg-gray-300 mb-5">
      <label>Assignment</label>
        <canvas ref={chart3Ref}></canvas>
      </div>
    </div>
  );
};

export default MyComponent;
