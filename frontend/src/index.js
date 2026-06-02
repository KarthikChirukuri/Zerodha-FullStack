import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './landing page/home/HomePage';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Signup from './landing page/signup/Signup'; 
import AboutPage from './landing page/about/AboutPage';
import PricingPage from './landing page/pricing/PricingPage';
import SupportPage from './landing page/support/SupportPage';
import Productspage from './landing page/products/ProductsPage';
import NavBar from './landing page/Navbar';
import Footer from './landing page/Footer';
import NotFound from './landing page/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <NavBar></NavBar>
    <Routes>
      <Route path='/' element={<HomePage></HomePage>}></Route>
      <Route path='/signup' element={<Signup></Signup>}></Route>
      <Route path='/about' element={<AboutPage></AboutPage>}></Route>
      <Route path='/product' element={<Productspage></Productspage>}></Route>
      <Route path='/pricing' element={<PricingPage></PricingPage>}></Route>
      <Route path='/support' element={<SupportPage></SupportPage>}></Route>
      <Route path='*' element={<NotFound></NotFound>}></Route>
    </Routes>
    <Footer></Footer>
  </BrowserRouter>
);