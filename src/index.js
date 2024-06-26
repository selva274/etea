import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Checkout from './pages/Checkout';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
  <Routes>
    <Route path='/' element={<App/>}/>
    <Route path='/checkout' element={<Checkout/>}/>
  </Routes>
 </BrowserRouter>
);                                                                                                       


reportWebVitals();
