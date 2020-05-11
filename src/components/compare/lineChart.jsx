import React, { useRef, useEffect } from "react"
import Chart from "chart.js"
import chartWidth from "../../globals/chartWidth"
import createDataSet from "../../globals/createDataSet"
import Typography from "@material-ui/core/Typography"

const LineChart = ({ data }) => {
  const canvasRef = useRef()

  const firstDate = new Date(data[0].data.date)
  const lastDate = new Date(data[data.length - 1].data.date)

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
        datasets: data.reduce((accumulator, country, i) => {
          accumulator.push(
            createDataSet(
              `Bevestigd ${country.label}`,
              `${i}, 10, 66`,
              country.data,
              `confirmed`,
              false
            ),
            createDataSet(
              `Overleden ${country.label}`,
              `250, ${i}, 0`,
              country.data,
              `deaths`,
              false
            )
          )

          return accumulator
        }, []),
      },
    })
  }, [data])

  return (
    <>
      <Typography variant="caption" display="block" gutterBottom align="center">
        Klik op de labels om ze aan of uit te zetten
      </Typography>
      <div
        className="chart-container"
        style={{ position: "relative", maxWidth: chartWidth }}
      >
        <canvas ref={canvasRef} />
      </div>
    </>
  )
}

export default LineChart
