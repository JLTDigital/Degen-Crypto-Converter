import React, { useState, useEffect, useRef } from 'react'
import { cryptos, fiat } from '../constants/index.js'

const CryptoConverter = ({ sendDataToParent }) => {
  const [currencyOne, setCurrencyOne] = useState('bitcoin')
  const [currencyTwo, setCurrencyTwo] = useState('gbp')
  const [amountOne, setAmountOne] = useState('')
  const [amountTwo, setAmountTwo] = useState('')
  const [infoData, setInfoData] = useState({})
  const [shouldSendData, setShouldSendData] = useState(false)

  const getRatesInfo = () => {
    fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currencyTwo}&ids=${currencyOne}`,
      { mode: 'cors' }
    )
      .then((res) => res.json())
      .then((data) => {
        const cryptoRate = data[0]?.current_price || 0
        setAmountTwo((amountOne * cryptoRate).toFixed(2))
        setInfoData({
          image: data[0]?.image,
          symbol: data[0]?.symbol,
          name: data[0]?.name,
          currentPrice: data[0]?.current_price,
          marketCap: data[0]?.market_cap,
          marketCapRank: data[0]?.market_cap_rank,
          high24h: data[0]?.high_24h,
          low24h: data[0]?.low_24h,
          priceChange24h: data[0]?.price_change_24h,
          priceChangePercentage24h: data[0]?.price_change_percentage_24h,
          circulatingSupply: data[0]?.circulating_supply
        })
        setShouldSendData(true)
      })
  }

  useEffect(() => {
    if (shouldSendData) {
      sendDataToParent(infoData)
      setShouldSendData(false)
    }
  }, [infoData, shouldSendData, sendDataToParent])

  useEffect(() => {
    if (currencyOne && currencyTwo && amountOne) {
      getRatesInfo()
    }
  }, [currencyOne, currencyTwo, amountOne])

  return (
    <div>
      <div className='currency-one-container rounded-xl w-full py-10 flex justify-between'>
        <div className='p-2 w-1/2 text-left ml-4'>
          <p className='text-lg'>Crypto Amount</p>
          <input
            className='bg-black text-white w-1/2 text-lg mt-2'
            placeholder='0'
            value={amountOne}
            onChange={(e) => setAmountOne(e.target.value)}
          />
        </div>
        <div className='w-1/2 p-2'>
          <select
            value={currencyOne}
            onChange={(e) => setCurrencyOne(e.target.value)}
            id='currency-one'
            className='bg-black text-white'>
            {cryptos.map(({ id, currency, initial }) => (
              <option key={id} value={currency} defaultValue={currencyOne}>
                {initial}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className=' bg-white h-px border-b border-b-gray-100'>
        <img
          className='mx-auto relative top-[-8px] bg-[#ff3399] rounded-xl size-5'
          src='/assets/images/arrow_circle_down.svg'
          alt='Arrow Circle Down'
        />
      </div>

      <div className='currency-two-container rounded-xl w-full py-10 flex justify-between'>
        <div className='p-2 w-1/2 text-left ml-4'>
          <p className='text-lg'>Fiat Amount</p>
          <input
            className='bg-black text-white w-1/2 text-lg mt-2'
            placeholder='0'
            value={amountTwo}
            onChange={(e) => setAmountTwo(e.target.value)}
          />
        </div>
        <div className='w-1/2 p-2'>
          <select
            value={currencyTwo}
            onChange={(e) => setCurrencyTwo(e.target.value)}
            id='currency-two'
            className='bg-black text-white text-lg'>
            {fiat.map(({ id, fiatName, initial }) => (
              <option key={id} value={fiatName} defaultValue={currencyTwo}>
                {initial}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}

export default CryptoConverter
