import React, { useContext } from 'react'
import CheckoutProduct from './CheckoutProduct'

import { TeaContext } from './Context/TeaContext'
const Checkout = () => {    
  const checkout=useContext(TeaContext);
  return (
    <div className='container'>

  <CheckoutProduct items={checkout}/>

  </div>
  )
}

export default Checkout