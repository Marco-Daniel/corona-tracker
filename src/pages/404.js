import React, { useEffect } from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import { navigate, Link } from "gatsby"

const NotFoundPage = () => {
  useEffect(() => {
    if (window !== "undefined") {
      setTimeout(() => {
        navigate("/")
      }, 3000)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Layout>
      <SEO title="404: Niet gevonden" />
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <h1>Niet Gevonden</h1>
        <p>
          Deze app heeft geen subpagina's, u wordt nu terug gestuurd naar de
          homepage.
        </p>
        <p>
          Mocht het te lang duren of wordt u niet teruggestuurd dan kunt u{" "}
          <Link to="/">hier</Link> klikken om terug te gaan naar de homepage.
        </p>
      </div>
    </Layout>
  )
}

export default NotFoundPage
