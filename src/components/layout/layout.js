import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { useTheme } from "@material-ui/core/styles"
import { addBackToTop } from "vanilla-back-to-top"

import Header from "./header"
import chartWidth from "../../globals/chartWidth"

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

  const theme = useTheme()

  useEffect(() => {
    addBackToTop({
      diameter: 40,
      backgroundColor: theme.palette.secondary.main,
      textColor: theme.palette.secondary.contrastText,
      zIndex: theme.zIndex.appBar + 100,
    })
  }, [])

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
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
