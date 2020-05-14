import React, { useState } from "react"
import LatestData from "../compare/LatestData"
import DataTabs from "./dataTabs"
import Grid from "@material-ui/core/Grid"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import Collapse from "@material-ui/core/Collapse"
import Alert from "@material-ui/lab/Alert"
import IconButton from "@material-ui/core/IconButton"
import CloseIcon from "@material-ui/icons/Close"

import createGlobalData from "../../globals/createGlobalData"
import WikipediaData from "./wikipediaData"
import ExtendedWikipediaData from "./extendedWikipediaData"
import WikipediaRulesData from "./wikipediaRulesData"
import FetchNewsItems from "./fetchNewsItems"
import CollapseDataContainer from "../display/collapseDataContainer"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles(theme => ({
  poweredBy: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginBottom: theme.spacing(2),
  },
  link: {
    color: theme.palette.secondary.main,
  },
  mdddLink: {
    color: "#d96534",
    "&:hover": {
      color: theme.palette.type === "light" ? "#000000" : "#ffffff",
    },
  },
}))

const DisplayGrid = ({ data, wiki, extendedWiki, wikiRules }) => {
  const nederlandData = data.Nederland
  const globalData = createGlobalData(data)
  const classes = useStyles()
  const theme = useTheme()
  const smScreen = useMediaQuery(theme.breakpoints.down("xs"))
  const mobileScreen = useMediaQuery(theme.breakpoints.down("sm"))
  const isPortrait = useMediaQuery("(orientation: portrait)")
  const isLandscape = useMediaQuery("(orientation: landscape)")
  const [expanded, setExpanded] = useState(true)

  if (mobileScreen && isLandscape) {
    return (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <DataTabs
            nederlandData={nederlandData}
            globalData={globalData}
            allData={data}
            hideNews
          />
        </Grid>
      </Grid>
    )
  }

  return (
    <Grid container spacing={smScreen ? 2 : 4}>
      {isPortrait && smScreen ? (
        <Grid item xs={12}>
          <Collapse in={expanded} unmountOnExit>
            <Alert
              severity="info"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setExpanded(false)
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
            >
              Draai uw telefoon naar landscape modus om de data in een grafiek
              te zien.
            </Alert>
          </Collapse>
        </Grid>
      ) : null}
      <Grid item xs={12} lg={5}>
        <LatestData globalData={globalData} dataByCountry={data} />
      </Grid>
      <Grid item xs={12} lg={7}>
        <WikipediaData data={wiki} />
      </Grid>
      <Grid item xs={12}>
        <WikipediaRulesData data={wikiRules} />
      </Grid>
      <Grid item xs={12}>
        <ExtendedWikipediaData data={extendedWiki} />
      </Grid>
      <Grid item xs={12}>
        {smScreen ? (
          <CollapseDataContainer
            title={
              <Typography
                children="Laatste nieuws"
                variant="body1"
                align="center"
                style={{ padding: theme.spacing(2) }}
              />
            }
            padding={0}
            useTypography={false}
          >
            <FetchNewsItems />
          </CollapseDataContainer>
        ) : (
          <DataTabs
            nederlandData={nederlandData}
            globalData={globalData}
            allData={data}
          />
        )}
      </Grid>
      <Grid item xs={12}>
        <div className={classes.poweredBy}>
          <div style={{ textAlign: "center" }}>
            Interesse in een website, webshop of app zoals deze?
            <br />
            Neem dan nu contact op via&nbsp;
            <a
              href="https://mddd.nl/"
              className={classes.mdddLink}
              rel="noreferrer noopener"
              target="_blank"
            >
              mddd.nl
            </a>
          </div>
        </div>
        <div className={classes.poweredBy}>
          Built with &nbsp;
          <a
            href="https://www.gatsbyjs.org/"
            className={classes.link}
            rel="noreferrer noopener"
            target="_blank"
          >
            Gatsby
          </a>
        </div>
      </Grid>
    </Grid>
  )
}

export default DisplayGrid
