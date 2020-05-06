import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableRow from "@material-ui/core/TableRow"
import TableHead from "@material-ui/core/TableHead"

const useStyles = makeStyles(theme => ({
  table: {
    maxWidth: 500,
    margin: `${theme.spacing(1)}px auto`,
  },
}))

const CompareDataTable = ({ dataSets }) => {
  const classes = useStyles()

  return (
    <TableContainer className={classes.table}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="right">Bevestigd</TableCell>
            <TableCell align="right">Overleden</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataSets.map(set => (
            <TableRow>
              <TableCell
                component="th"
                scope="row"
              >{`${set.label}: `}</TableCell>
              <TableCell align="right">{set.data.confirmed}</TableCell>
              <TableCell align="right">
                {`${set.data.deaths} (${(
                  (100 * set.data.deaths) /
                  set.data.confirmed
                ).toFixed(2)}%)`}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default CompareDataTable
