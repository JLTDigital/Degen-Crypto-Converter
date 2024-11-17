import React from 'react'

const Info = ({ cryptoInfo }) => {
  return (
    <div className='info-holder'>
      <div className='flex justify-center'>
        <img className='w-1/4' src={cryptoInfo.image} alt={cryptoInfo.name} />
      </div>
      <div className='text-white pt-2 md:pt-4 mb-8'>
        <p>{cryptoInfo.symbol}</p>
        <br />
        <p>Name: {cryptoInfo.name}</p>
        <p>Current Price: {cryptoInfo.currentPrice}</p>
        <p>Market Cap: {cryptoInfo.marketCap}</p>
        <p>Market Cap Rank: {cryptoInfo.marketCapRank}</p>
        <p>24hr High: {cryptoInfo.high24h}</p>
        <p>24hr Low: {cryptoInfo.low24h}</p>
        <p>24hr Price Change: {cryptoInfo.priceChange24h}</p>
        <p>24hr Price Percentage: {cryptoInfo.priceChangePercentage24h}</p>
        <p>Circulating Supply: {cryptoInfo.circulatingSupply}</p>
      </div>
    </div>
  )
}

export default Info
