import React, { useState } from 'react'
import CryptoConverter from './CryptoConverter'
import Info from './Info'

const Converter = ({ title }) => {
  const [cryptoInfo, setCryptoInfo] = useState({})
  const [hidden, setHidden] = useState(true)

  const handleDataFromChild = (infoData) => {
    setCryptoInfo(infoData)
    setHidden(false)
  }

  return (
    <div className='text-center grid lg:grid-cols-2 flex flex-col justify-center items-center'>
      <div className='container pl-4 pr-4'>
        <h2 className='text-p1 text-center text-2xl mb-4'>{title}</h2>
        <div className='text-white rounded-xl border border-gray-100 w-full grid grid-cols-1 bg-black opacity-80'>
          <CryptoConverter sendDataToParent={handleDataFromChild} />
        </div>
      </div>
      {hidden === true ? (
        <div className='container text-center justify-center hidden'></div>
      ) : (
        <div className='container text-center justify-center mt-2 md:mt-4 md:mb-7'>
          <Info cryptoInfo={cryptoInfo} />
        </div>
      )}
    </div>
  )
}

export default Converter
