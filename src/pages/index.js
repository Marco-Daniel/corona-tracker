import React, { useEffect, useState } from "react"
import CircularProgress from "@material-ui/core/CircularProgress"

import Layout from "../components/layout"
import SEO from "../components/seo"
import DataDisplay from "../components/DataDisplay"

const IndexPage = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    // useEffect can't be a async function of itself
    // so to do async work create a function inside of useEffect
    const asyncWork = async () => {
      // https://api.apify.com/v2/datasets/jr5ogVGnyfMZJwpnB/items?format=json&clean=1

      const data = await fetch(
        "https://pomber.github.io/covid19/timeseries.json",
        {
          method: "GET",
          redirect: "follow",
        }
      )

      const json = await data.json()
      setData(json.Netherlands)
    }

    asyncWork()
  }, [])

  return (
    <Layout>
      <SEO title="Corona Tracker" />
      <div
        style={{
          width: "100%",
          height: "95vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {data.length === 0 ? <CircularProgress /> : <DataDisplay data={data} />}
      </div>
    </Layout>
  )
}

export default IndexPage
