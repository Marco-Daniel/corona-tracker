import React from "react"
import LatestData from "./LatestData"

const DataDisplay = ({ data }) => {
  console.log(data)

  const latestData = data[data.length - 1]

  return (
    <>
      <LatestData data={latestData} />
    </>
  )
}

export default DataDisplay
