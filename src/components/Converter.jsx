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
    <div className='text-center p-4 grid md:grid-cols-2 grid-cols-1 justify-center items-center flex-col'>
      <div className='container'>
        <h2 className='text-p1 text-center text-2xl mb-4'>{title}</h2>
        <div className='text-white rounded-xl border border-gray-100 w-full grid grid-cols-1 bg-black opacity-80'>
          <CryptoConverter sendDataToParent={handleDataFromChild} />
        </div>
      </div>
      {hidden === true ? (
        <div className='container text-center justify-center hidden'></div>
      ) : (
        <div className='container text-center justify-center mt-4 md:mt-8 mb-10'>
          <Info cryptoInfo={cryptoInfo} />
        </div>
      )}
    </div>
  )
}

export default Converter
