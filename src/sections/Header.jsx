import React from 'react'

const Header = () => {
  return (
    <header className='bg-black h-24 z-2 relative opacity-80'>
      <div className='w-full py-4 px-7 absolute'>
        <div className='logo p-4 text-center justify-center flex md:justify-start'>
          <h1 className='text-p1 text-3xl md:text-5xl text-shadow'>DEGEN</h1>
        </div>

        <div className='w-[35%] absolute top-11 left-60'>
          <nav className='text-p1 flex md:justify-between flex-col md:flex-row'>
            <li>Home</li>
            <li>Exchange</li>
            <li>Marketplace</li>
            <li>Treasury</li>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
