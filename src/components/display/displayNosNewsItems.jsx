import React from "react"
import NewsItem from "./NewsItem"
import List from "@material-ui/core/List"
import capitalizeFirstLetter from "../../globals/capitalizeFirstLetter"

const createSearchList = listArray => {
  return listArray.reduce((accumulator, item) => {
    accumulator.push(item, capitalizeFirstLetter(item))

    return accumulator
  }, [])
}

const parseDescription = html => {
  const maxLength = 300

  const placeholder = document.createElement("div")
  placeholder.innerHTML = html
  const parsed = placeholder.innerText

  if (parsed.length < maxLength) {
    return placeholder.innerText
  }

  return `${placeholder.innerText.substring(0, maxLength)}...`
}

const formatAndFilterData = data => {
  const searchList = createSearchList([
    "corona",
    "coronatijd",
    "pandemie",
    "coronapandemie",
    "corona-pandemie",
    "besmetting",
    "besmettingen",
  ])

  return data.reduce((accumulator, item) => {
    const title = item.title._cdata
    const description = parseDescription(item.description._text)
    const url = item["feedburner:origLink"]._text
    const publishedAt = new Date(item.pubDate._text).toISOString()

    let found = false

    searchList.forEach(searchTerm => {
      const isInTitle = title.includes(searchTerm)
      const isInDescription = description.includes(searchTerm)

      if (isInTitle || isInDescription) found = true
    })

    if (found) {
      accumulator.push({
        title,
        description,
        url,
        publishedAt,
      })
    }

    return accumulator
  }, [])
}

const DisplayNosNewsItems = ({ data }) => {
  // format the data so it can be used with NewsItem component
  // also filter the data on corona and related terms
  const parsedData = formatAndFilterData(data)

  return (
    <List>
      {parsedData.map(item => (
        <NewsItem key={item.url} item={item} />
      ))}
    </List>
  )
}

export default DisplayNosNewsItems
