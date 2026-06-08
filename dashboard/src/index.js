import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './index.css';
import Home from './Components/Home'
import Login from './Components/LoginPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path='/*' element={<Home></Home>}></Route>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

