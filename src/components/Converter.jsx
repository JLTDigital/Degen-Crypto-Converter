import React, { useState } from 'react'
import CryptoConverter from './CryptoConverter'

const Converter = ({ title }) => {
  const [dataFromChild, setDataFromChild] = useState({})

  const handleDataFromChild = (infoData) => {
    setDataFromChild(infoData)
  }

  console.log(dataFromChild)

  return (
    <div className='text-center p-4 grid md:grid-cols-2 grid-cols-1 justify-center items-center flex-col'>
      <div>
        <h2 className='text-p1 text-center text-2xl mb-4'>{title}</h2>
        <div className='text-white rounded-xl border border-gray-100 w-full grid grid-cols-1 bg-black opacity-80'>
          <CryptoConverter sendDataToParent={handleDataFromChild} />
        </div>
      </div>
    </div>
  )
}

export default Converter
