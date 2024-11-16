import React from 'react'
import Converter from '../components/Converter'

const Main = () => {
  return (
    <section className='w-full min-h-screen mx-auto my-auto flex justify-center items-center'>
      <div className='container'>
        <div className='md:p-12 p-4'>
          <Converter title='Currency Converter' />
        </div>
      </div>
    </section>
  )
}

export default Main
