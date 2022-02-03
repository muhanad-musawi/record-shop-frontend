import React from 'react';  
import './recordsAdd.css'
import {useState, useEffect} from 'react'; 
import {useNavigate} from "react-router-dom";

function RecordsAdd() { 
  let navigate = useNavigate();
  const [ recordsAdd, setRecordsAdd]  = useState([]) ; //Dependancy Array 
  const initialInput = { 
   title: '',
    artist: '', 
    year: '',  
    price: '',
    cover: ''
  }
  const [inputs, setInputs] = useState(initialInput)
  
  function handleInputChange(event) {  

    const value =  event.target.value 
   const name =  event.target.name 
   setInputs({ 
      ...inputs,
    [name]: value})
    
  }  

  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const RECORDS_PATH = BACKEND_URL + '/records'


  const fetchRecordsAddData = (record)=>{ 
    console.log("records:"+record); 
    
    /*'http://localhost:4000/records'*/

    const recordjson = JSON.stringify(record)
    fetch(RECORDS_PATH  , {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: recordjson 
      
  }) 
  .then((response)=>{
    if (response.status !== 201){
      alert("An Error occured")
      return;
    } else{
      
      navigate("/records", {replace:true})
      return response.json()
    }
  })
  .catch((err)=>console.log(err)) 
}

  function handleSubmit(event) { 
    event.preventDefault()
    const newRecord = { 
      ...inputs
    } 
    fetchRecordsAddData(newRecord )
  }


  return (  
 <div> 
   <h1>Let's add some records in the online store</h1>
  <div className='addRecords' > 
 <form className='addRecordsForm' action="" onSubmit={handleSubmit}>  

 <input type="text" name="cover" placeholder='cover link' value={inputs.cover} size="30" onChange={handleInputChange}></input>  

 <input type="text" name="title" placeholder='Title' value={inputs.title} size="30" maxLength="50" onChange={handleInputChange}></input>  

 <input type="text" name="artist" placeholder='Artist' value={inputs.artist} size="30" maxLength="50" onChange={handleInputChange}></input>  

 <input type="text" name="year" placeholder='Year' value={inputs.year} size="30" maxLength="50" onChange={handleInputChange}></input>  

 <input type="text" name="price" placeholder='Price' value={inputs.price} size="30" maxLength="50" onChange={handleInputChange}></input> 

 <input type="submit" value="Send" />
 </form>
  </div>  
  </div> 
  );
}

export default RecordsAdd;

