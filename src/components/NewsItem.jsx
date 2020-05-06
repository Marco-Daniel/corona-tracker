import React from "react"
import ListItem from "@material-ui/core/ListItem"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    margin: "0 auto",
    padding: `${theme.spacing(4)}px 0`,
    color: theme.palette.primary.dark,
    "&:hover": {
      color: theme.palette.secondary.main,
    },
    maxWidth: 800,
  },
  image: {
    minWidth: 250,
    maxWidth: 250,
  },
  body: {
    display: "flex",
    flexDirection: "column",
    marginLeft: theme.spacing(2),
  },
  title: {
    color: "inherit",
  },
  summary: {
    color: theme.palette.text.primary,
  },
}))

const DisplayNewsItems = ({ item }) => {
  const classes = useStyles()

  return (
    <ListItem
      component="a"
      href={item.url}
      rel="noreferrer noopener"
      target="_blank"
      className={classes.root}
      divider
    >
      <img className={classes.image} src={item.urlToImage} />
      <section className={classes.body}>
        <Typography variant="h6" className={classes.title}>
          {item.title}
        </Typography>
        <Typography variant="body2" className={classes.summary}>
          {item.description}
        </Typography>
      </section>
    </ListItem>
  )
}

export default DisplayNewsItems
