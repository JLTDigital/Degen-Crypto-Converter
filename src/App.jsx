import React from 'react'
import HeaderNav from './sections/HeaderNav.jsx'
import MainSection from './sections/MainSection.jsx'
import Footer from './sections/Footer.jsx'

const App = () => {
  return (
    <main className='dark-bg'>
      <HeaderNav />
      <MainSection />
      <Footer />
    </main>
  )
}

export default App
