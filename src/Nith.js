import React from 'react';
import './nith.css';
import logo from'./assets/wlogo.jpg';
import civil from'./assets/civil.jpg';
import electric from'./assets/EEE img.jpg';

// import { Link } from 'react-router-dom';
const Nith = () =>{
    return(
<div>
      <div className='container'>
          <div class="col">
           
          <h2 class="a">CHANDUBHAI S. PATEL DEPARTMENT OF INFORMATION TECHNOLOGY</h2>
          <h3 class="a">[AN AUTONOMOUS INSTITUTION|AFFILIATED TO CHARUSAT UNIVERSITY,CHNAGA</h3>
          <h4 class="a">APPROVED BY AICTE|ACCREDITED BY NAAC]</h4>
          <h5 class="a">COIMBATORE-641042</h5>
        </div>
      </div>
      <section class="header">
        <nav>
        
          <div class="nav-links">
            <ul>
              <li><a href="/">HOME</a></li>
              <li><a href="technical">TECHNICAL EVENTS</a></li>
              <li><a href="quizs">NON-TECHNICAL EVENTS</a></li>
          <li><a href="workshop">WORKSHOP</a></li>
              <li><a href="register">REGISTER</a></li>
              <li><a href="">CONTACT</a></li>
              <li><a href="about">ABOUT</a></li>
            </ul>
          </div>
        </nav>
        </section>
        <div> <img src={logo} className='workshop'  alt='logo'></img>
        </div>
       <h4 className='description'>We usually brief intensive educational program for a relatively small group of
        people that focuses especially on techniques and skills in a particular field.a small establishment 
        where manufacturing or handicrafts are carried on.</h4>
       <div>
       
        <img src={electric}  className="eeeworkman"alt='star'></img>
        <img src={civil} className='civil'  alt='civil'></img>
        </div>
      
       <h4 className='civilname'>We usually brief intensive educational program for a relatively small group of
        people that focuses especially on techniques and skills in a particular field.a small establishment 
        where manufacturing or handicrafts are carried on.</h4>
        <h4 className='current'>Electrical workshop engaged in the repair and maintenance of machinery, 
        equipment and apparatus used for the measurement, generation, transmission, storage and utilisation of electric power</h4>
      
     
        </div>
        
    )
}
export default Nith;