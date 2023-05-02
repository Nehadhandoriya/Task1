import React from 'react';
import Home from './Home';
import Option from './Option';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Price from './Price';
function App() {
  return (
    <div >
       
        <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/Option" element={<Option/>}/>
        <Route exact path="/Price" element={<Price/>}/>
      </Routes>
      </BrowserRouter>
        
      
      
      
    
      
    </div>  );
}

export default App;
