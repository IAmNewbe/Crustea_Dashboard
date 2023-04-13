import Energy from './Energy';
import './App.css';
import EBII from './EBII';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import Home from './Home';
import Nav from './Nav';

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
            <Route path='Home' element={<Home/>}/>
            <Route path='EBII' element={<EBII></EBII>}/>
            <Route path='Energy' element={<Energy/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
