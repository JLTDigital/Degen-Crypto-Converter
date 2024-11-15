import React, { useState, useEffect, useRef } from 'react'

const CryptoConverter = () => {
  const [currencyOne, setCurrencyOne] = useState('bitcoin')
  const [currencyTwo, setCurrencyTwo] = useState('usd')
  const [amountOne, setAmountOne] = useState('')
  const [amountTwo, setAmountTwo] = useState('')
  const [infoData, setInfoData] = useState({})
  const [cryptoHoldings, setCryptoHoldings] = useState([])
  const [cryptoInput, setCryptoInput] = useState('')
  const [warning, setWarning] = useState(false)
  const [showHoldings, setShowHoldings] = useState(false)

  return (
    <div>
      <div className='currency-one-container rounded-xl w-full py-10 flex justify-between'>
        <div className='p-2 w-1/2 text-left ml-4'>
          <p className='text-lg'>Fiat Amount</p>
          <input
            className='bg-black text-white w-1/2 text-lg'
            placeholder='0'
            value={amountOne}
            onChange={(e) => setAmountOne(e.target.value)}
          />
        </div>
        <div className='w-1/2 p-2'>
          <select id='currency-two' className='bg-black text-white text-lg'>
            <option value='GBP' selected>
              GBP
            </option>
            <option value='USD'>USD</option>
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
          <p className='text-lg'>Crypto Amount</p>
          <input
            className='bg-black text-white w-1/2 text-lg'
            placeholder='0'
            value={amountTwo}
            onChange={(e) => setAmountTwo(e.target.value)}
          />
        </div>
        <div className='w-1/2 p-2'>
          <select id='currency-two' className='bg-black text-white'>
            <option value='BTC' selected>
              BTC
            </option>
            <option value='USD'>USD</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default CryptoConverter
