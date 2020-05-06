import React, { useEffect, useState } from "react"
import CircularProgress from "@material-ui/core/CircularProgress"
import { makeStyles } from "@material-ui/core/styles"
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
}))

const IndexPage = () => {
  const [data, setData] = useState([])
  const classes = useStyles()

  useEffect(() => {
    // useEffect can't be a async function of itself
    // so to do async work create a function inside of useEffect
    const asyncWork = async () => {
      const data = await fetch(
        "https://pomber.github.io/covid19/timeseries.json",
        {
          method: "GET",
          redirect: "follow",
        }
      )

      const json = await data.json()
      setData(json)
    }

    asyncWork()
  }, [])

  return (
    <Layout>
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
      <SEO title="Corona Tracker" />
      <div className={classes.body}>
        {data.length === 0 ? (
          <CircularProgress color="secondary" />
        ) : (
          <DataDisplay data={data} />
        )}
      </div>
    </Layout>
  )
}

export default IndexPage
