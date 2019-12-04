import React, { useState, useEffect } from 'react'
import CryptoCoin from '../components/CryptoCoin'
import PageSelector from '../components/PageSelector'
import axios from 'axios'

const Overview = () => {
  // Deprecated: https://api.coinmarketcap.com/v2/ticker/?limit=20
  // Production: https://pro-api.coinmarketcap.com
  //    Sandbox: https://sandbox-api.coinmarketcap.com

  // const apiServer = 'https://sandbox-api.coinmarketcap.com' // Sandbox
  // const apiKey = '31db52b1-6e95-4d4e-971a-24ff3fa11224' // Sandbox API key
  // const apiKey = '037bbaf0-6f28-4f2d-85f7-44543fc739b6' // Prod API key
  // const baseApiURL = apiServer + '/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=037bbaf0-6f28-4f2d-85f7-44543fc739b6'

  //This works: https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=037bbaf0-6f28-4f2d-85f7-44543fc739b6&start=1&limit=20
  //This works: https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=31db52b1-6e95-4d4e-971a-24ff3fa11224&start=1&limit=20

  const apiServer = 'https://api.coinmarketcap.com'
  const baseApiURL = apiServer + '/v2/ticker/?limit=20&start=1&convert=USD'

  const resultsPerPage = 20

  const [cryptoData, setCryptoData] = useState([])
  const [currentPageNumber, setCurrentPageNumber] = useState(5)
  const [numCryptocurrencies, setNumCryptocurrencies] = useState()

  // prettier-ignore
  const getCryptoData = async () => {
    let apiURL = baseApiURL + `&start=${currentPageNumber}` + `&limit=${resultsPerPage}` + '&convert=USD'
    const resp = await axios.get(apiURL)
    console.log(resp.data.data)
    setNumCryptocurrencies(resp.data.metadata.num_cryptocurrencies)
    // console.log)
    setCryptoData(Object.values(resp.data.data))
  }

  // prettier-ignore
  useEffect(() => {
    getCryptoData()
  },[])

  // prettier-ignore
  useEffect(() => {
    getCryptoData()
  },[currentPageNumber])

  return (
    <>
      {/* prettier-ignore */}
      {/* <section className="pageSelector">
        <PageSelector
          thisPage={currentPageNumber}
          noOfResults={numCryptocurrencies}
          resultsPerPage={resultsPerPage}
        />
      </section> */}
      {/* prettier-ignore */}
      <section className="tileContainer">
        {cryptoData.map((coin, index) => {
          return (
            <CryptoCoin
              key={index}
              id={coin.id}
              name={coin.name}
              price={coin.quotes.USD.price}
              market_cap={coin.quotes.USD.market_cap}
              percent_change_1h={coin.quotes.USD.percent_change_1h}
              percent_change_24h={coin.quotes.USD.percent_change_24h}
              percent_change_7d={coin.quotes.USD.percent_change_7d}
            />
          )
        })}
      </section>
    </>
  )
}

export default Overview
