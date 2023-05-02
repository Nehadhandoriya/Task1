import React from 'react';
import logo from './img.jpg';
import "./Home.css";
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import {useNavigate} from "react-router-dom";


function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <div >
      <img src={logo} className='Main-image' alt='confused'/>
      </div>
      <div className='head'>
        <p className='p1'>Too many options to <span>choose</span> from</p>
        <p className='p2'>Just Relax <span className='icon'><SelfImprovementIcon/></span></p>
        <p className='p3'>Let us help you find the right plan to protect your devices</p>
        <button className='btn1' onClick={()=>navigate("/Option")}>Take a tour</button>
        <button className='btn2'>Close</button>
      </div>
    </div>
  )
}

export default Home