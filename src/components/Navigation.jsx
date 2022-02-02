import React from 'react'; 
import './navigation.css'
import {  Link } from "react-router-dom";  

function Navigation() {
  return (  
    <div className='navBarParent'>
  <div className='navBar'>  

  <Link className='linkRecords' to='/Home'>Home</Link>  

    <Link className='linkRecords' to='/records'>Records</Link> 

    <Link className='linkRecords' to='/records-formular'>Records Add</Link> 

    <Link className='linkRecords' to='/records-delete'>Records Delete</Link>  
  </div>   
  </div>
  );
}

export default Navigation;
