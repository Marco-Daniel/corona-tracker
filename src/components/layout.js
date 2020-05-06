import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"

import Header from "./header"
import chartWidth from "../globals/chartWidth"

const useStyles = makeStyles(theme => ({
  offset: theme.mixins.toolbar,
}))

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const classes = useStyles()

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className={classes.offset} />
      <main
        style={{
          margin: `0 auto`,
          maxWidth: chartWidth,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        {children}
      </main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
