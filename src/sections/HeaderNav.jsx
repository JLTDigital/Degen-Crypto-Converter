import React, { useState } from 'react'
import clsx from 'clsx'

const HeaderNav = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className='bg-black opacity-80 dark:bg-black fixed w-full z-20 top-0 start-0'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <a href='/' className='flex items-center space-x-3 rtl:space-x-reverse'>
          <h1 className='text-p1 text-3xl md:text-5xl text-shadow'>DEGEN</h1>
          <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'></span>
        </a>
        <div className='flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse'>
          <button
            type='button'
            className='text-p1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
            Get started
          </button>
          <button
            data-collapse-toggle='navbar-sticky'
            onClick={() => setIsOpen((prevState) => !prevState)}
            type='button'
            className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
            aria-controls='navbar-sticky'
            aria-expanded='false'>
            <span className='sr-only'>Open main menu</span>
            <svg
              className='w-5 h-5'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 17 14'>
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M1 1h15M1 7h15M1 13h15'
              />
            </svg>
          </button>
        </div>
        <div
          className={clsx(
            'items-center justify-around w-full md:flex md:w-auto md:order-1 transition-transform duration-500',
            isOpen ? 'block' : 'hidden'
          )}
          id='navbar-sticky'>
          <ul className='flex flex-col p-4 mt-4 font-medium rounded-lg bg-black md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-slate-800 opacity-90 md:dark:bg-black dark:border-gray-700'>
            <li>
              <a
                href='#'
                className='block py-4 px-3 text-p1 rounded md:bg-transparent md:text-p1 md:p-0 md:dark:text-p1 hover:text-white border-b border-gray-200 md:border-none'>
                <span className='flex'>
                  Home
                  <img src='/assets/images/arrow_down.svg' alt='Arrow Down' />
                </span>
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block py-4 px-3 rounded md:hover:text-white md:p-0 md:dark:hover:text-white dark:text-p1 dark:hover:text-white dark:border-gray-200 border-b md:border-none'>
                <span className='flex'>
                  Exchange
                  <img src='/assets/images/arrow_down.svg' alt='Arrow Down' />
                </span>
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block py-4 px-3 rounded md:hover:text-white md:p-0 md:dark:hover:text-white dark:text-p1 dark:hover:text-white dark:border-gray-200 border-b md:border-none'>
                <span className='flex'>
                  Marketplace
                  <img src='/assets/images/arrow_down.svg' alt='Arrow Down' />
                </span>
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block py-4 px-3 rounded hover:bg-gray-100 md:p-0 md:dark:hover:hover:text-white dark:text-p1 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-200 border-b md:border-none'>
                <span className='flex'>
                  Treasury
                  <img src='/assets/images/arrow_down.svg' alt='Arrow Down' />
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default HeaderNav
