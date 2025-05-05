import React from 'react';
import './nith.css';
import auto from './assets/ai.jpg';

import agri from'./assets/agri.jpg';
import google from'./assets/goo.jpg';
const Umas = () =>{
    return(
<div>
      <div className='container'>
          <div class="col">
          <h2 class="a">CHANDUBHAI S. PATEL DEPARTMENT OF INFORMATION TECHNOLOGY</h2>
          <h3 class="a">[AN AUTONOMOUS INSTITUTION|AFFILIATED TO CHARUSAT UNIVERSITY,CHANGA</h3>
          <h4 class="a">APPROVED BY AICTE|ACCREDITED BY NAAC]</h4>
          <h5 class="a">COIMBATORE-641042</h5>
        </div>
      </div>
      <section class="header koiya--narrow">
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
            <div> <img src={auto}  className="seimurai"alt='murai'></img>
     
           </div>
  <p className='seimuraiapdina'>Test Automation Hackathon is a social event for testers and everybody, who loves testing. 
 Test Automation Hackathon is organized in the way of competition between small groups of people (up to 3) to demonstrate ability to 
solve test automation task, test design and quality assurance in a very limited time.</p>
 <img src={agri}  className="vivasayam"alt='sayam'></img>
 <p className='payir'>The aim of this event is to catalyze solutions that can reduce input use (particularly water) and transform farm returns. 
   Participants shall develop ideas and build prototypes to solve key challenges faced by farmers in water usage and sustainability.</p>
<h4 className='prize'>FIRST PRICE 50,000</h4>
<p className='payir payir--narrow'>Google has announced its Girl Hackathon Girl Hackathon is a program for women students in computer science and allied courses across India.
It has been designed to provide a platform for women in the engineering campus space to showcase their coding skills and promote 
creative solutions for real time technical challenges.FIRST PRIZE 1,00,000</p>
<img src={google}  className='vivasayam vivasayam--narrow'alt='gols'></img>
<button className='vada koiya--narrow'>BACK</button>

 </section> 
 </div>
             
   )
 }
  export default Umas;
