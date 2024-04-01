import React, { useEffect, useState } from 'react'
import "../App.css"
import axios from 'axios';
const TeaPage = () => {
  const [tea,setTea]=useState([]);
  useEffect(()=>{
    axios.get("http://localhost:3000/home")    
    .then((res)=>setTea(res.data.module))
  },[]);
 
 
  return (
    <div className='container'>
   <div className='row'>
   {tea.map((item)=>{
      return (
        <div className='col cards'> 
        <div className="card mycard">
  <img src={item.image} className="card-img-top" alt="name"/>
  <div className="card-body">
    <h5 className="card-title">{item.name}</h5>
    
    <a href="#" className="btn btn-primary">Buy</a>
  </div>
</div>      
      
      </div>
      )
    })}
   </div>
 
    </div>
  )
}

export default TeaPage