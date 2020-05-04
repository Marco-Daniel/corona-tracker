export default data => {
  if (data == null) throw new Error("please provide some data")

  const globalData = []

  Object.entries(data).forEach(([key, value]) =>
    value.forEach((country, i) => {
      if (typeof globalData[i] === "undefined") {
        // does not exist
        globalData[i] = {
          date: country.date,
          confirmed: country.confirmed,
          deaths: country.deaths,
          recovered: country.recovered,
        }
      } else {
        // does exists
        globalData[i] = {
          date: country.date,
          confirmed: globalData[i].confirmed + country.confirmed,
          deaths: globalData[i].deaths + country.deaths,
          recovered: globalData[i].recovered + country.recovered,
        }
      }
    })
  )

  return globalData
}
