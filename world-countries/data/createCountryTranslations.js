const fs = require("fs")
const dutch = JSON.parse(fs.readFileSync("./nl/world.json", "utf8"))
const english = JSON.parse(fs.readFileSync("./en/world.json", "utf8"))

const translations = english.map(country => {
  const translation = dutch.find(t => t.id === country.id)
  return { english: country.name, dutch: translation.name }
})

const json = JSON.stringify(translations)

fs.writeFileSync("translations.json", json)
