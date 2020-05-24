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
    const chart = new Chart(canvasRef.current.getContext("2d"), {
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
          const multiplier = i + 1 // so it starts at 1 instead of 0

          accumulator.push(
            createDataSet(
              `Bevestigd ${country.label}`,
              `${34 * multiplier}, ${169 / multiplier}, 194`,
              country.data,
              `confirmed`,
              false
            ),
            createDataSet(
              `Overleden ${country.label}`,
              `216, ${38 * multiplier}, ${54 * multiplier}`,
              country.data,
              `deaths`,
              false
            )
          )

          return accumulator
        }, []),
      },
    })

    // clean-up before next render
    return () => chart.destroy()
  }, [data, firstDate, lastDate])

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
