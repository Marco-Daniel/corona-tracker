import React, { useRef, useEffect } from "react"
import Chart from "chart.js"
import chartWidth from "../globals/chartWidth"
import createDataSet from "../globals/createDataSet"

const CompareLineChart = ({ data1, label1, data2, label2 }) => {
  const canvasRef = useRef()

  const firstDate = new Date(data1[0].date)
  const lastDate = new Date(data1[data1.length - 1].date)

  useEffect(() => {
    new Chart(canvasRef.current, {
      type: "line",
      options: {
        scales: {
          xAxes: [
            {
              type: "time",
              time: {
                unit: "day",
                minUnit: "day",
              },
              ticks: {
                min: firstDate,
                max: lastDate,
              },
              gridLines: {
                drawOnChartArea: false,
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                min: 0,
              },
              gridLines: {
                drawOnChartArea: false,
              },
            },
          ],
        },
      },
      data: {
        datasets: [
          createDataSet(
            `Bevestigd ${label1}`,
            `3, 10, 66`,
            data1,
            `confirmed`,
            false
          ),
          createDataSet(
            `Overleden ${label1}`,
            `250, 0, 0`,
            data1,
            `deaths`,
            false
          ),
          createDataSet(
            `Bevestigd ${label2}`,
            `2, 0, 31`,
            data2,
            `confirmed`,
            false
          ),
          createDataSet(
            `Overleden ${label2}`,
            `136, 8, 28`,
            data2,
            `deaths`,
            false
          ),
        ],
      },
    })
  }, [label1, label2, data1, data2])

  return (
    <div
      className="chart-container"
      style={{ position: "relative", maxWidth: chartWidth }}
    >
      <canvas ref={canvasRef} />
    </div>
  )
}

export default CompareLineChart
