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

const CompareDataTable = ({ data1, label1, data2, label2 }) => {
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
          <TableRow>
            <TableCell component="th" scope="row">{`${label1}: `}</TableCell>
            <TableCell align="right">{data1.confirmed}</TableCell>
            <TableCell align="right">
              {`${data1.deaths} (${(
                (100 * data1.deaths) /
                data1.confirmed
              ).toFixed(2)}%)`}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">{`${label2}: `}</TableCell>
            <TableCell align="right">{data2.confirmed}</TableCell>
            <TableCell align="right">
              {`${data2.deaths} (${(
                (100 * data2.deaths) /
                data2.confirmed
              ).toFixed(2)}%)`}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default CompareDataTable
