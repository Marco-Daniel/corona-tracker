import React, { useState } from "react"
import Typography from "@material-ui/core/Typography"
import CompareLineChart from "./compareLineChart"
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import InputLabel from "@material-ui/core/InputLabel"
import Input from "@material-ui/core/Input"
import FormControl from "@material-ui/core/FormControl"
import DialogTitle from "@material-ui/core/DialogTitle"
import Select from "@material-ui/core/Select"
import { useTheme, makeStyles } from "@material-ui/core/styles"

// const useStyles = makeStyles(theme => ({
//   container: {
//     display: "flex",
//     flexDirection: "column",
//     flexWrap: "wrap",
//   },
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120,
//   },
// }))

const CompareCountries = ({ nederlandData, globalData, allData }) => {
  const [data1, setData1] = useState(globalData)
  const [data2, setData2] = useState(nederlandData)
  const [select1, setSelect1] = useState("")
  const [select2, setSelect2] = useState("")
  const theme = useTheme()

  return (
    <>
      <Typography variant="h6" align="center">
        Vergelijk covid-19 verloop met andere landen
      </Typography>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: `${theme.spacing(2)}px`,
        }}
      >
        <Select
          native
          defaultValue=""
          onChange={event => {
            setSelect1(event.target.value)
            setData1(allData[event.target.value])
          }}
          input={<Input id="selecteer eerste land" />}
        >
          <option aria-label="None" value="" />
          {Object.keys(allData).map(country => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </Select>
        {` `}
        <Select
          native
          defaultValue=""
          onChange={event => {
            setSelect2(event.target.value)
            setData2(allData[event.target.value])
          }}
          input={<Input id="selecteer tweede land" />}
        >
          <option aria-label="None" value="" />
          {Object.keys(allData).map(country => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </Select>
      </div>

      {select1 === "" || select2 === "" ? (
        <Typography variant="h6" align="center">
          Selecteer twee opties.
        </Typography>
      ) : (
        <CompareLineChart
          data1={data1}
          label1={select1}
          data2={data2}
          label2={select2}
        />
      )}
    </>
  )
}

export default CompareCountries
