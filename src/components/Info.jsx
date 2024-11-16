import React from 'react'

const Info = ({ cryptoInfo }) => {
  return (
    <div className='info-holder'>
      <div className='flex justify-center'>
        <img className='w-1/4' src={cryptoInfo.image} alt={cryptoInfo.name} />
      </div>
      <ul className='text-white pt-2 md:pt-4'>
        <li>{cryptoInfo.symbol}</li>
        <br />
        <li>Name: {cryptoInfo.name}</li>
        <li>Current Price: {cryptoInfo.currentPrice}</li>
        <li>Market Cap: {cryptoInfo.marketCap}</li>
        <li>Market Cap Rank: {cryptoInfo.marketCapRank}</li>
        <br />
        <li>24hr High: {cryptoInfo.high24h}</li>
        <li>24hr Low: {cryptoInfo.low24h}</li>
        <li>24hr Price Change: {cryptoInfo.priceChange24h}</li>
        <li>24hr Price Percentage: {cryptoInfo.priceChangePercentage24h}</li>
        <li>Circulating Supply: {cryptoInfo.circulatingSupply}</li>
      </ul>
    </div>
  )
}

export default Info
