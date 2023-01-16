import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Addcatogery from './addcatogery';
import Subcatogery from './subcatogery';

function App() {
  return (
   <>
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Addcatogery/>}/>
      <Route path='/subcatogery' element={<Subcatogery/>}/>
    </Routes>
    </BrowserRouter>
   
   
   </>
  );
}

export default App;
