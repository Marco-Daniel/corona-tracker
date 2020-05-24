import React from "react"
import NewsItem from "./NewsItem"
import List from "@material-ui/core/List"
import Typography from "@material-ui/core/Typography"
import { useTheme } from "@material-ui/core/styles"

const DisplayRtlNewsItems = ({ data }) => {
  const theme = useTheme()
  return (
    <>
      {/* <List>
        {data.map(item => (
          <NewsItem key={item.url} item={item} />
        ))}
      </List> */}
      <Typography variant="h6" align="center">
        Helaas is de RTL data momenteel niet beschikbaar.
      </Typography>
      <Typography
        variant="caption"
        display="block"
        align="center"
        style={{ paddingTop: theme.spacing(4) }}
      >
        Powerd by{" "}
        <a
          href="https://newsapi.org"
          rel="noreferrer noopener"
          target="_blank"
          style={{ color: theme.palette.secondary.main }}
        >
          News API
        </a>
      </Typography>
    </>
  )
}

export default DisplayRtlNewsItems
