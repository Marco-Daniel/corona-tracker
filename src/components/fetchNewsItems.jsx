import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import CircularProgress from "@material-ui/core/CircularProgress"
import DisplayNewsItems from "./displayNewsItems"

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
      const data = await fetch(
        "https://newsapi.org/v2/everything?sources=rtl-nieuws&q=+corona&sortBy=publishedAt",
        {
          method: "GET",
          headers: new Headers({
            Authorization: `Bearer ${newsAPIKey}`,
          }),
        }
      )

      const json = await data.json()
      console.log(json)
      setData(json)
    }

    asyncWork()
  }, [])

  return data ? <DisplayNewsItems data={data.articles} /> : <CircularProgress />
}

export default FetchNewsItems
