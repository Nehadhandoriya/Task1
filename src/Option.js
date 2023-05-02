import React from 'react';
import './Option.css';
import window from './Photos/window.png';
import mac from './Photos/mac_logo-removebg.png';
import android from './Photos/android-removebg.png';
import {useNavigate} from "react-router-dom";

function Option() {
  const navigate = useNavigate();
  return (
    <div>
     <div className='number'>
      <span className='num1'>1</span>
      <span className='num2'>2</span>
     </div>
        
     <h3>Select Your Operating System</h3>

    <div className='box'>
      <div className='options'><img src={window} className='window' alt='Windows'/>
      <span>Windows</span></div>
     <div className='options'> <img src={mac} className='mac' alt='macOS' ></img>
     <span>macOS</span></div>  
  <div className='options'><img src={android} className='android' alt='android'/>
  <span>Android</span></div>
     </div>
     
     <div><button className='btn1' onClick={()=>navigate("/Price")}>Continue</button></div>
     <hr></hr>
     <div><button className='btn2' onClick={()=>navigate(-1)} >Close</button></div>
   
    </div>
  )
}

export default Option;