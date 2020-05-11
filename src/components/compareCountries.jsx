import React, { useState } from "react"
import Typography from "@material-ui/core/Typography"
import CompareLineChart from "./data-display/lineChart"
import Input from "@material-ui/core/Input"
import Select from "@material-ui/core/Select"
import { useTheme } from "@material-ui/core/styles"
import CompareDataTable from "./compare/compareDataTable"
import LineChart from "./data-display/lineChart"

const SelectCountries = ({ data, setSelect, setData, style, inputText }) => (
  <Select
    native
    defaultValue=""
    onChange={({ target: { value } }) => {
      setSelect(value)
      if (value === "Wereldwijd") {
        setData(data.globalData)
      } else {
        setData(data.allData[value])
      }
    }}
    input={<Input id={inputText} />}
    style={style}
    color="secondary"
  >
    <option aria-label="None" value="" />
    <option value="Wereldwijd">Wereldwijd</option>
    {Object.keys(data.allData).map(country => (
      <option key={country} value={country}>
        {country}
      </option>
    ))}
  </Select>
)

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
        <SelectCountries
          data={{ globalData, allData }}
          setSelect={setSelect1}
          setData={setData1}
          style={{ margin: theme.spacing(1) }}
          inputText="selecteer eerste land"
        />
        <SelectCountries
          data={{ globalData, allData }}
          setSelect={setSelect2}
          setData={setData2}
          style={{ margin: theme.spacing(1) }}
          inputText="selecteer tweede land"
        />
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
          <LineChart
            data={[
              { data: data1, label: select1 },
              { data: data2, label: select2 },
            ]}
          />
        </>
      )}
    </>
  )
}

export default CompareCountries
