
import './App.css'; 
import {  Routes, Route} from "react-router-dom";
import Navigation from './components/Navigation'; 
import Records from './pages/Records' 
import RecordsAdd from './pages/RecordsAdd'
 


function App() {
  return ( 
    
    <div className="App">  
    <Navigation/>
<Routes> 
    <Route path="/records" element={<Records/>}></Route>   

    <Route path="/records-formular" element={<RecordsAdd/>}></Route>  

</Routes> 
    </div> 
   
  );
}

export default App;
