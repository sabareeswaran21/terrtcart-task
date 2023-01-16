import React, { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { response } from 'express';

function Subcatogery() {

    const [getcateory, setGetcateory] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:3002/Sinsert')
        .then(response=>response.json())
        .then(json=>setGetcateory(json))
    },[])

  return (
   <>
   <div className='container-fluid'>
    <div className='row mt-5'>
      <div className='col-lg-1'>
        <p>Categories</p>
      </div>
      <div className='col-lg-9'>
        <select name="main_category" id="main_category">
            <option value="">--choose option--</option>
            {
                getcateory.map((value,index)=>(
                    <option value={value.id}>{value.category}</option>
                ))
            }
        </select>
        <input type="text" name="sub_category"/>
        <select name="sub_category_type" id="sub_category_type">
            <option value="">--choose--</option>
            <option value="Main">Main</option>
            <option value="Sub">Sub</option>
        </select>
      </div>
      <div className='col-lg-2'>
      <button type='submit' className='col-lg-12 btn btn-primary' value='submit' name='submit'>Add category</button>
      </div>
    </div>
   </div>
   
   </>
  );
}

export default Subcatogery;
