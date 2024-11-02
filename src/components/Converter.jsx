import React from 'react'
// import { cryptos } from '../constants/index.js'

const Converter = ({ title }) => {
  return (
    <div className='text-center p-4 flex justify-center items-center flex-col'>
      <h2 className='text-p1 text-2xl mb-4'>{title}</h2>

      <div className='text-white rounded-xl border border-gray-100 w-full md:w-2/4 grid grid-cols-1 bg-black opacity-80'>
        <div className='currency-one-container rounded-xl w-full py-10'>
          <p>Text 1</p>
        </div>
        <div className=' bg-white h-px border-b border-b-gray-100'>
          <img
            className='mx-auto -mt-[0.59rem] bg-[#ff3399] rounded-xl size-5'
            src='/assets/images/arrow_circle_down.svg'
            alt='Arrow Circle Down'
          />
        </div>
        <div className='currency-two-container rounded-xl w-full py-10'>
          <p>Text 2</p>
        </div>
      </div>
      <button className='refresh-btn text-p1 p-2 md:w-2/4 w-full mt-4 rounded-2xl bg-black border border-[#ff3399]'>
        Refresh Price
      </button>
    </div>
  )
}

export default Converter
