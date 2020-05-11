import React, { useEffect, useState } from "react"
import CircularProgress from "@material-ui/core/CircularProgress"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import Alert from "@material-ui/lab/Alert"
import Particles from "react-particles-js"

import Layout from "../components/layout"
import SEO from "../components/seo"
import DataDisplay from "../components/dataDisplay"

import translationData from "../../world-countries/data/translations.json"

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
  error: {
    padding: theme.spacing(2),
  },
  spinner: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translateX(-50%) translateY(-50%)",
  },
}))

const CoronaParticles = ({ styling }) => (
  <Particles
    className={styling}
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
)

const translateCountryNames = data => {
  const translations = Object.keys(data).reduce((accumulator, key) => {
    // search for translation
    const foundCountry = translationData.find(obj => obj.english === key)

    // if there is an translation found, create key with translated name else drop the country from the object
    if (foundCountry != null) {
      accumulator[foundCountry.dutch] = data[key]
    }

    return accumulator
  }, {})

  return translations
}

const fetchNetworkResource = async (url, options) => {
  const data = await fetch(url, options)

  if (data.ok) {
    return await data.json()
  } else {
    throw new Error(`Something went wrong while fethcing: ${url}`)
  }
}

const IndexPage = () => {
  const [covidData, setCovidData] = useState([])
  const [wikiData, setWikiData] = useState()
  const [extendedWikiData, setExtendedWikiData] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)
  const classes = useStyles()
  const theme = useTheme()
  const isPortrait = useMediaQuery("(orientation: portrait)")
  const smScreen = useMediaQuery(theme.breakpoints.down("xs"))

  useEffect(() => {
    // useEffect can't be a async function of itself
    // so to do async work create a function inside of useEffect
    const asyncWork = async () => {
      try {
        const covidDataURL = "https://pomber.github.io/covid19/timeseries.json"
        const covidDataOptions = { method: "GET", redirect: "follow" }

        const baseWikiDataURL =
          "http://nl.wikipedia.org/w/api.php?action=query&prop=extracts%7Cdescription&format=json&origin=*&exintro=&titles="

        const wikiDataURL = baseWikiDataURL + "Coronapandemie"
        const extendedWikiDataURL =
          baseWikiDataURL + "Coronacrisis_in_Nederland"
        const wikiDataOptions = { method: "GET" }

        const [covidData, wikiData, extendedWikiData] = await Promise.all([
          fetchNetworkResource(covidDataURL, covidDataOptions),
          fetchNetworkResource(wikiDataURL, wikiDataOptions),
          fetchNetworkResource(extendedWikiDataURL, wikiDataOptions),
        ])

        const translatedCovidData = translateCountryNames(covidData)

        setCovidData(translatedCovidData)
        setWikiData(wikiData)
        setExtendedWikiData(extendedWikiData)
        setIsLoading(false)
      } catch (error) {
        console.log(error)
        setError(true)
      }
    }

    asyncWork()
  }, [])

  if (error) {
    return (
      <Layout>
        <SEO title="Oeps, er is iets mis gegaan.." />
        <CoronaParticles styling={classes.particles} />
        <div className={classes.error}>
          <Alert severity="error">
            Helaas, er is iets fout gegaan.
            <br />
            Probeer de pagina te herladen, als het probleem blijft neem dan
            contact met op de ontwikkelaar van deze op&nbsp;
            <a href="https://mddd.nl" rel="noreferrer noopener" target="_blank">
              www.mddd.nl
            </a>
          </Alert>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <SEO title="Corona Tracker" />
      <CoronaParticles styling={classes.particles} />
      {isPortrait && smScreen ? (
        <Alert severity="info" className={classes.error}>
          Deze app werkt alleen in landscape-modus.
          <br />
          Draai uw scherm om over te gaan naar landscape-modus.
        </Alert>
      ) : (
        <div className={classes.body}>
          {isLoading ? (
            <div className={classes.spinner}>
              <CircularProgress color="secondary" />
            </div>
          ) : (
            <DataDisplay
              data={covidData}
              wiki={wikiData}
              extendedWiki={extendedWikiData}
            />
          )}
        </div>
      )}
    </Layout>
  )
}

export default IndexPage
