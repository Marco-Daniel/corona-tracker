import React, { useEffect, useState } from "react"
import CircularProgress from "@material-ui/core/CircularProgress"
import { makeStyles } from "@material-ui/core/styles"
import Alert from "@material-ui/lab/Alert"

import Particles from "react-particles-js"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import DataDisplay from "../components/display/displayGrid"
import fetchNetworkResource from "../globals/fetchNetworkResource"

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
    padding: theme.spacing(4),
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      padding: 0,
      paddingTop: theme.spacing(2),
    },
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
    marginTop: theme.spacing(2),
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

const IndexPage = () => {
  const [covidData, setCovidData] = useState([])
  const [wikiData, setWikiData] = useState()
  const [extendedWikiData, setExtendedWikiData] = useState()
  const [wikiRulesData, setWikiRulesData] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)
  const classes = useStyles()

  useEffect(() => {
    // useEffect can't be a async function of itself
    // so to do async work create a function inside of useEffect
    const asyncWork = async () => {
      try {
        const covidDataURL = "https://pomber.github.io/covid19/timeseries.json"
        const covidDataOptions = { method: "GET", redirect: "follow" }

        const baseWikiDataURL =
          "https://nl.wikipedia.org/w/api.php?action=query&prop=extracts%7Cdescription&format=json&origin=*&exintro=&titles="

        const wikiDataURL = baseWikiDataURL + "Coronapandemie"
        const extendedWikiDataURL =
          baseWikiDataURL + "Coronacrisis_in_Nederland"
        const wikiDataOptions = { method: "GET" }

        const wikiRulesURL =
          "https://nl.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&origin=*&titles=Maatregelen_tijdens_de_coronacrisis_in_Nederland"

        const [covid, wiki, extendedWiki, wikiRules] = await Promise.all([
          fetchNetworkResource(covidDataURL, covidDataOptions),
          fetchNetworkResource(wikiDataURL, wikiDataOptions),
          fetchNetworkResource(extendedWikiDataURL, wikiDataOptions),
          fetchNetworkResource(wikiRulesURL, wikiDataOptions),
        ])

        const translatedCovidData = translateCountryNames(covid)

        setCovidData(translatedCovidData)
        setWikiData(wiki)
        setExtendedWikiData(extendedWiki)
        setWikiRulesData(wikiRules)
        setIsLoading(false)
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
      <Layout>
        <SEO title="Oeps, er is iets mis gegaan.." />
        <CoronaParticles styling={classes.particles} />
        <div className={classes.error}>
          <Alert severity="error">
            Helaas, er is iets fout gegaan.
            <br />
            Probeer de pagina te herladen, als het probleem blijft neem dan
            contact met op de ontwikkelaar van deze app op&nbsp;
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
            wikiRules={wikiRulesData}
          />
        )}
      </div>
    </Layout>
  )
}

export default IndexPage
