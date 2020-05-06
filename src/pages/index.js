import React, { useEffect, useState } from "react"
import CircularProgress from "@material-ui/core/CircularProgress"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import Alert from "@material-ui/lab/Alert"
import Particles from "react-particles-js"

import Layout from "../components/layout"
import SEO from "../components/seo"
import DataDisplay from "../components/dataDisplay"

const useStyles = makeStyles(theme => ({
  particles: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "99vw",
    height: "98vh",
    zIndex: -100,
  },
  body: {
    width: "100%",
    height: "95vh",
    padding: `${theme.spacing(4)}px`,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  poweredBy: {
    padding: theme.spacing(4),
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  link: {
    color: theme.palette.secondary.main,
  },
  alert: {
    marginTop: theme.spacing(4),
  },
}))

const IndexPage = () => {
  const [covidData, setCovidData] = useState([])
  const [wikiData, setWikiData] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const classes = useStyles()
  const theme = useTheme()
  const isPortrait = useMediaQuery("(orientation: portrait)")
  const smScreen = useMediaQuery(theme.breakpoints.down("xs"))

  useEffect(() => {
    // useEffect can't be a async function of itself
    // so to do async work create a function inside of useEffect
    const asyncWork = async () => {
      const fetchCovidData = async () => {
        const data = await fetch(
          "https://pomber.github.io/covid19/timeseries.json",
          {
            method: "GET",
            redirect: "follow",
          }
        )
        return await data.json()
      }

      const fetchWikipediaData = async () => {
        const data = await fetch(
          "http://nl.wikipedia.org/w/api.php?action=query&prop=extracts%7Cdescription&format=json&origin=*&exintro=&titles=Coronapandemie",
          {
            method: "GET",
          }
        )

        return await data.json()
      }

      const [covidData, wikiData] = await Promise.all([
        fetchCovidData(),
        fetchWikipediaData(),
      ])

      setCovidData(covidData)
      setWikiData(wikiData)
      setIsLoading(false)
    }

    asyncWork()
  }, [])

  return (
    <Layout>
      <SEO title="Corona Tracker" />

      <Particles
        className={classes.particles}
        params={{
          particles: {
            number: {
              value: 15,
              density: {
                enable: true,
                value_area: 500,
              },
            },
            shape: {
              type: "image",
              image: { src: "covid-19.png" },
            },
            size: {
              value: 10,
              random: false,
            },
            opacity: {
              value: 1,
              random: true,
            },
            line_linked: {
              enable: false,
            },
            move: {
              enable: true,
              speed: 2.5,
              random: true,
              straight: false,
              bounce: true,
            },
          },
        }}
      />

      {isPortrait && smScreen ? (
        <Alert severity="info" className={classes.alert}>
          Deze app werkt alleen in landscape-modus.
          <br />
          Draai uw scherm om over te gaan naar landscape-modus.
        </Alert>
      ) : (
        <div className={classes.body}>
          {isLoading ? (
            <CircularProgress color="secondary" />
          ) : (
            <DataDisplay data={covidData} wiki={wikiData} />
          )}
        </div>
      )}
    </Layout>
  )
}

export default IndexPage
