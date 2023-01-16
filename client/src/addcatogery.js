import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function Addcatogery() {

    const handlesubmit=async(event)=>{
        event.preventDefault();
        var key = new FormData(event.target);
        var values = {headers:{'enctype':'multipart/form-data'}};
        
        var cat = document.getElementById('cat'),value;

        if(cat === ''|| cat === null){
            alert('enter the category');
        }
        else{
            await axios.post('http://localhost:3002/Mclist',key,values)
           .then(function(res){
                if(res.data.status==='error'){
                    alert('Error');
                    window.location.reload();
                }
                else if(res.data.status==='Data successfully inserted'){
                    alert('inserted datas')
                    window.location.reload();
                }
           })
           .catch(function(err){
            alert(err);
            window.location.reload();
           })
        }
    }
  return (
   <>
   <div className='container-fluid'>
    <div className='row mt-5'>
      <div className='col-lg-1'>
        <p>Categories</p>
      </div>
      <div className='col-lg-9'></div>
      <div className='col-lg-2'>
      <button type='submit' className='col-lg-12 btn btn-primary' value='submit' name='submit'>Add category</button>
      </div>
    </div>
    <form onSubmit={handlesubmit}>
    <div className='row mt-5'>
        <div className='col-lg-2'>
            <input type="text" name="category" id='cat' className='form-control'/>
        </div>
    </div>
    </form>
   </div>
   
   </>
  );
}

export default Addcatogery;
