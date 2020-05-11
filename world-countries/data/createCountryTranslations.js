const fs = require("fs")
const dutchCountryNames = JSON.parse(fs.readFileSync("./nl/world.json", "utf8"))
const englishCountryNames = JSON.parse(
  fs.readFileSync("./en/world.json", "utf8")
)

const translatedCountryNames = englishCountryNames.map(country => {
  const translation = dutchCountryNames.find(t => t.id === country.id)
  return { english: country.name, dutch: translation.name }
})

const json = JSON.stringify(translatedCountryNames)

fs.writeFileSync("translations.json", json)
