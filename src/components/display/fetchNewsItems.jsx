import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import CircularProgress from "@material-ui/core/CircularProgress"
import NewsTabs from "./newsTabs"
import { xml2js } from "xml-js"

import fetchNetworkResource from "../../globals/fetchNetworkResource"
import capitalizeFirstLetter from "../../globals/capitalizeFirstLetter"

const createSearchList = listArray => {
  return listArray.reduce((accumulator, item) => {
    accumulator.push(item, capitalizeFirstLetter(item))

    return accumulator
  }, [])
}

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

  const [rtlData, setRtlData] = useState(false)
  const [nosData, setNosData] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    // useEffect can't be a async function of itself
    // so to do async work create a function inside of useEffect
    const asyncWork = async () => {
      try {
        const rtlURL =
          "https://newsapi.org/v2/everything?sources=rtl-nieuws&q=+corona&sortBy=publishedAt"
        const rtlOptions = {
          method: "GET",
          headers: new Headers({
            Authorization: `Bearer ${newsAPIKey}`,
          }),
        }

        const nosURL =
          "https://corsify.appspot.com/http://feeds.nos.nl/nosnieuwsbinnenland"

        const [rtlData, nosData] = await Promise.all([
          fetchNetworkResource(rtlURL, rtlOptions),
          fetch(nosURL),
        ])

        const nosJSON = xml2js(await nosData.text(), {
          alwaysChildren: true,
          ignoreInstruction: true,
          ignoreAttributes: true,
          ignoreDeclaration: true,
        })

        const list = nosJSON.elements[0].elements[0].elements.filter(
          el => el.name === "item"
        )
        const searchList = createSearchList([
          "corona",
          "coronatijd",
          "pandemie",
          "coronapandemie",
          "corona-pandemie",
          "besmetting",
          "besmettingen",
        ])

        const coronaList = list.reduce((accumulator, item, i) => {
          const title = item.elements.filter(el => el.name === "title")[0]
            .elements[0].cdata
          const description = item.elements.filter(
            el => el.name === "description"
          )[0].elements[0].text

          let found = false

          searchList.forEach((value, key) => {
            const isInTitle = title.includes(value)
            const isInDescription = description.includes(value)

            if (isInTitle || isInDescription) found = true
          })

          if (found) accumulator.push(item)

          return accumulator
        }, [])

        setNosData(coronaList)
        setRtlData(rtlData)
        setIsLoading(true)
      } catch (error) {
        console.log(error)
      }
    }

    asyncWork()
  }, [])

  return isLoading ? (
    <NewsTabs rtlData={rtlData} nosData={nosData} />
  ) : (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <CircularProgress color="secondary" />
    </div>
  )
}

export default FetchNewsItems
