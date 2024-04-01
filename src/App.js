import React from 'react'
import TeaPage from './pages/TeaPage'
import "./App.css"
import NavBar from './pages/NavBar'
import Footer from './pages/Footer'
const App = () => {
  return (
    <div className='mainpage'>
      <NavBar/>
      <TeaPage/>
      <Footer/>
    </div>
  )
}

export default App