require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `De laatste informatie over Corona`,
    description: `De laatste informatie van  het Center for Systems Science and Engineering (CSSE) at Johns Hopkins University en RTL nieuws`,
    author: `M. D. Leguijt`,
    newsAPIKey: process.env.NEWS_API_KEY,
  },
  plugins: [
    `gatsby-plugin-polyfill-io`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/README.md`,
        name: `readme`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/wrapRoot.jsx`),
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: process.env.GA_TRACKING_ID,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Corona Tracker`,
        short_name: `covid-19-tracker`,
        start_url: `/`,
        background_color: `#49316C`,
        theme_color: `#49316C`,
        display: `minimal-ui`,
        icon: `static/covid-19.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
