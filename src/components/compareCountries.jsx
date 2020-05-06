import React, { useState } from "react"
import Typography from "@material-ui/core/Typography"
import CompareLineChart from "./compareLineChart"
import Input from "@material-ui/core/Input"
import Select from "@material-ui/core/Select"
import { useTheme } from "@material-ui/core/styles"
import CompareDataTable from "./compare/compareDataTable"

const CompareCountries = ({ nederlandData, globalData, allData }) => {
  const [data1, setData1] = useState(globalData)
  const [data2, setData2] = useState(nederlandData)
  const [select1, setSelect1] = useState("")
  const [select2, setSelect2] = useState("")
  const theme = useTheme()

  const Spacer = () => <div style={{ height: theme.spacing(2) }} />

  return (
    <>
      <Typography variant="h6" align="center">
        Vergelijk covid-19 tussen verschillende landen
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
            if (event.target.value === "Wereldwijd") {
              setData1(globalData)
            } else {
              setData1(allData[event.target.value])
            }
          }}
          input={<Input id="selecteer eerste land" />}
          style={{ margin: theme.spacing(1) }}
          color="secondary"
        >
          <option aria-label="None" value="" />
          <option value="Wereldwijd">Wereldwijd</option>
          {Object.keys(allData).map(country => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </Select>
        <Select
          native
          defaultValue=""
          onChange={event => {
            setSelect2(event.target.value)
            if (event.target.value === "Wereldwijd") {
              setData2(globalData)
            } else {
              setData2(allData[event.target.value])
            }
          }}
          input={<Input id="selecteer tweede land" />}
          style={{ margin: theme.spacing(1) }}
          color="secondary"
        >
          <option aria-label="None" value="" />
          <option value="Wereldwijd">Wereldwijd</option>
          {Object.keys(allData).map(country => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </Select>
      </div>

      {select1 === "" || select2 === "" || select1 === select2 ? (
        <Typography variant="h6" align="center">
          Selecteer twee (verschillende) opties.
        </Typography>
      ) : (
        <>
          <CompareDataTable
            dataSets={[
              { data: data1[data1.length - 1], label: select1 },
              { data: data2[data2.length - 1], label: select2 },
            ]}
          />
          <Spacer />
          <CompareLineChart
            data1={data1}
            label1={select1}
            data2={data2}
            label2={select2}
          />
        </>
      )}
    </>
  )
}

export default CompareCountries
