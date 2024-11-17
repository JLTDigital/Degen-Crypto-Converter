import React from 'react'
import Converter from '../components/Converter'

const MainSection = () => {
  return (
    <section className='w-full relative mx-auto my-auto flex justify-center items-center lg:h-full md:mt-4 mt-16 py-16 h-fit'>
      <div className='container'>
        <div className='lg:p-12'>
          <Converter title='Currency Converter' />
        </div>
      </div>
    </section>
  )
}

export default MainSection
