import React, { useEffect,useState } from 'react'
import TeaPage from './pages/TeaPage'
import "./App.css"
import NavBar from './pages/NavBar'
import Footer from './pages/Footer'
import axios from 'axios';
import { TeaContext } from './pages/Context/TeaContext'

const App = () => {
  const [tea,setTea]=useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/home")
      .then((res) => setTea(res.data.module))
  }, []);

  return (            
     <TeaContext.Provider value={tea}>    
     <div className='mainpage'>
       <NavBar />
      <TeaPage tea={tea}/>
      <Footer/>
      </div>       
     </TeaContext.Provider>
     
     
  )
}

export default App