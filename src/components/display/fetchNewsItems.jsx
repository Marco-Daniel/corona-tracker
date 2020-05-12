import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import CircularProgress from "@material-ui/core/CircularProgress"
import Alert from "@material-ui/lab/Alert"
import { useTheme } from "@material-ui/core/styles"
import NewsTabs from "./newsTabs"
import { xml2js } from "xml-js"

import fetchNetworkResource from "../../globals/fetchNetworkResource"

const xmlToJson = xml =>
  xml2js(xml, {
    compact: true,
    alwaysChildren: true,
    ignoreInstruction: true,
    ignoreAttributes: true,
    ignoreDeclaration: true,
  })

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
  const [error, setError] = useState(false)
  const theme = useTheme()

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

        const nosBinnenlandURL =
          "https://corsify.appspot.com/http://feeds.nos.nl/nosnieuwsbinnenland"
        const nosBuitenlandURL =
          "https://corsify.appspot.com/http://feeds.nos.nl/nosnieuwsbuitenland"

        const [rtlData, nosBinnenData, nosBuitenData] = await Promise.all([
          fetchNetworkResource(rtlURL, rtlOptions),
          fetch(nosBinnenlandURL),
          fetch(nosBuitenlandURL),
        ])

        const binnenXML = await nosBinnenData.text()
        const buitenXML = await nosBuitenData.text()

        const binnenJSON = xmlToJson(binnenXML)
        const buitenJSON = xmlToJson(buitenXML)

        const nosArray = binnenJSON.rss.channel.item.concat(
          buitenJSON.rss.channel.item
        )

        setNosData(nosArray)
        setRtlData(rtlData)
        setIsLoading(true)
      } catch (error) {
        console.log(error)
        setError(true)
      }
    }

    asyncWork()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (error) {
    return (
      <div style={{ padding: theme.spacing(1) }}>
        <Alert severity="error">
          Helaas, er is iets fout gegaan met het laden van de nieuwsartikelen.
          <br />
          Waarschijnlijk zijn er een of meerdere bronnen momenteel offline.
          <br />
          Probeer de pagina op een later tijdstip te herladen, als het probleem
          blijft neem dan contact met op de ontwikkelaar van deze app op&nbsp;
          <a href="https://mddd.nl" rel="noreferrer noopener" target="_blank">
            www.mddd.nl
          </a>
        </Alert>
      </div>
    )
  }

  return isLoading ? (
    <NewsTabs rtlData={rtlData} nosData={nosData} />
  ) : (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: theme.spacing(4),
      }}
    >
      <CircularProgress color="secondary" />
    </div>
  )
}

export default FetchNewsItems
