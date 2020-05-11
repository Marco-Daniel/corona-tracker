const fetchNetworkResource = async (url, options) => {
  const data = await fetch(url, options)

  if (data.ok) {
    return await data.json()
  } else {
    throw new Error(`Something went wrong while fethcing: ${url}`)
  }
}

export default fetchNetworkResource
