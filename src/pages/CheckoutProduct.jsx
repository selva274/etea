import React from 'react'

const CheckoutProduct = ({items}) => {
   
  return (
    <div>
      <div className='container'>
      <h2 style={{textAlign:'center'}}>Available Tea </h2>
      <div className='row'>
       
       <h1>{items}</h1>
      </div>

    </div>
    </div>
  )
}

export default CheckoutProduct