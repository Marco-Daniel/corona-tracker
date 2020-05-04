import React, { useRef, useEffect } from "react"
import Chart from "chart.js"
import chartWidth from "../globals/chartWidth"
import createDataSet from "../globals/createDataSet"

const LineChart = ({ data }) => {
  const canvasRef = useRef()

  const firstDate = new Date(data[0].date)
  const lastDate = new Date(data[data.length - 1].date)

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
          createDataSet("Bevestigd", "3, 10, 66", data, "confirmed"),
          createDataSet("Overleden", "250, 0, 0", data, "deaths", "origin"),
        ],
      },
    })
  }, [])

  return (
    <div
      className="chart-container"
      style={{ position: "relative", maxWidth: chartWidth }}
    >
      <canvas ref={canvasRef} />
    </div>
  )
}

export default LineChart
