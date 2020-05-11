import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import CircularProgress from "@material-ui/core/CircularProgress"
import DisplayNewsItems from "./data-display/displayNewsItems"

import fetchNetworkResource from "../globals/fetchNetworkResource"

const FetchNewsItems = () => {
  const {
    site: {
      siteMetadata: { newsAPIKey },
    },
  } = useStaticQuery(graphql`
    query newsAPIQuery {
      site {
        siteMetadata {
          newsAPIKey
        }
      }
    }
  `)

  const [data, setData] = useState(false)

  useEffect(() => {
    // useEffect can't be a async function of itself
    // so to do async work create a function inside of useEffect
    const asyncWork = async () => {
      try {
        const url =
          "https://newsapi.org/v2/everything?sources=rtl-nieuws&q=+corona&sortBy=publishedAt"
        const options = {
          method: "GET",
          headers: new Headers({
            Authorization: `Bearer ${newsAPIKey}`,
          }),
        }

        const data = await fetchNetworkResource(url, options)

        setData(data)
      } catch (error) {
        console.log(error)
      }
    }

    asyncWork()
  }, [])

  return data ? (
    <DisplayNewsItems data={data.articles} />
  ) : (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <CircularProgress color="secondary" />
    </div>
  )
}

export default FetchNewsItems
