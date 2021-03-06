import React from 'react'; 
import './record.css';
import {useState, useEffect} from 'react';  



function Records() { 
  const [ records, setRecords]  = useState([]) 
  useEffect(()=>{
    fetchRecordsData();
  },[]); //Dependancy Array 
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const RECORDS_PATH = BACKEND_URL + '/records'

  const fetchRecordsData = async()=>{
    /*'http://localhost:4000/records'*/ 
    
    await fetch(RECORDS_PATH )
      .then((response)=>response.json())
      .then((data)=>setRecords(data))
      .catch((err)=>console.log(err))
  }

  if (records.length === 0){
    return(
      <div>Currently Loading or an error occured</div>
    )
  } else {
  return (   
    <div> 
      <h1>Here you can see all records</h1>
  <div className='recordsShow'>   
  
    {records.map((record, index)=>(
      <ul className='recordsCard' key={index}> 
      <li><img className='recordCover' src={record.cover} alt="" /></li>
        <li><span>Title:</span> {record.title}</li>
        <li><span>Artist:</span> {record.artist}</li> 
        <li><span>Year:</span> {record.year}</li>
        <li><span>Price:</span> {record.price}</li>
      </ul>
    ))}
  </div>  
  </div>
  );
}
}

export default Records;
