import React from 'react';
import './Price.css';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import multiuser from './Photos/multi-user-removebg.png';
import desktop from './Photos/desktop-removebg.png';
import family from "./Photos/family-removebg.png";
import {useNavigate} from "react-router-dom";
function Price() {
  const navigate = useNavigate();
  return (
    <div>
         <div className='number'>
      <span className='num1'>1</span>
      <span className='num2'>2</span>
     </div>
        <h1 className='head'>Our Plans</h1>
<div className='box'>
    <div> 
    <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <h2>Multi-User</h2>
      <h1>&#8377; 699<sup>*</sup> <span>/ year</span></h1>

      <h4><span className='price'>&#8377;2,199</span>  <span className='discount'>
        &#40; 68% OFF &#41;</span></h4>
    
      <p><span className='right'><CheckCircleIcon/></span>3 Devices- 1 Year</p>
      <p><span className='right'><CheckCircleIcon/></span>Web Protection</p>
      <p><span className='right'><CheckCircleIcon/></span>Password Manager</p>
      <p><span className='right'><CheckCircleIcon/></span>Quick Clean & shredder </p>
      
    </div>
    <div class="flip-card-back">
      <h3>Multi-User</h3>
      <img src={multiuser} alt='multiuser' className='multiuser' width="150px"
       height="100px"></img>
      <button className='btn'>Buy Now</button>
    </div>
  </div>
</div>
         </div>

    <div>
    <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front1">
    <h2>Individual</h2>
    <h1>&#8377; 299<sup>*</sup> <span>/ year</span></h1>

<h4><span className='price'>&#8377;1,299</span>  <span className='discount'>
  &#40; 77% OFF &#41;</span></h4>
      
      <p><span className='right'><CheckCircleIcon/></span>3 Devices- 1 Year</p>
      <p><span className='right'><CheckCircleIcon/></span>Web Protection</p>
      <p><span className='right'><CheckCircleIcon/></span>Password Manager</p>
     
    </div>
    <div class="flip-card-back1">
    <h3>Individual</h3>
      <img src={desktop} alt='desktop' className='desktop' width="150px" height='100px'></img>
      <button className='btn'>Buy Now</button>
    </div>
  </div>
</div>
    </div>


    <div>
    <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
    <h2>Family</h2>
    <h1>&#8377; 1,999<sup>*</sup> <span>/ year</span></h1>

<h4><span className='price'>&#8377;4,999</span>  <span className='discount'>
  &#40; 60% OFF &#41;</span></h4>
      <p><span className='right'><CheckCircleIcon/></span>Unlimited Devices - 1 Year</p>
      <p><span className='right'><CheckCircleIcon/></span>Web Protection</p>
      <p><span className='right'><CheckCircleIcon/></span>Password Manager</p>
      <p><span className='right'><CheckCircleIcon/></span>Identify Monitoring</p>
      <p><span className='right'><CheckCircleIcon/></span>Quick Clean & shredder </p>
    </div>
    <div class="flip-card-back">
      <h3>Family</h3>
      <img src={family} alt='family' className='family' width="150px" height='100px'></img>
      <button className='btn'>Buy Now</button>
    </div>
  </div>
</div>
    </div>
</div>

  
<div><button className='btn1'>Continue</button></div>
     <hr></hr>
     <div><button className='btn2' onClick={()=>navigate(-1)} >Close</button></div>

    </div>
  )
}

export default Price;