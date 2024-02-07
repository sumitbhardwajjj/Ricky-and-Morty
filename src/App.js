import React from 'react'
import Navbar from './components/Navbar'
import CharacterList from './components/Cards'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <CharacterList/>
      <Footer/>
    </div>
  )
}

export default App
