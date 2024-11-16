import React from 'react'
import CryptoConverter from './CryptoConverter'

const Converter = ({ title }) => {
  return (
    <div className='text-center p-4 flex justify-center items-center flex-col'>
      <h2 className='text-p1 text-2xl mb-4'>{title}</h2>

      <div className='text-white rounded-xl border border-gray-100 w-full md:w-2/4 grid grid-cols-1 bg-black opacity-80'>
        <CryptoConverter />
      </div>
      <button className='refresh-btn cursor-pointer z-10 text-p1 p-2 md:w-2/4 w-full mt-4 rounded-2xl bg-black border border-[#ff3399]'>
        Refresh Price
      </button>
    </div>
  )
}

export default Converter
