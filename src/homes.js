import React from 'react';
import './homess.css';
import bg from'./assets/frant.jpg'; 
import ab from './assets/london.jpg';
import cd from './assets/newyork.jpg';
import ef from './assets/washington.jpg';
import { Link } from 'react-router-dom';
const Homess = () =>{
    return(
<div>
      <div className='container'>
      <title>college event</title>
          <div class="col">
          <h2 class="a">CHANDUBHAI S. PATEL DEPARTMENT OF INFORMATION TECHNOLOGY</h2>
          <h3 class="a">[AN AUTONOMOUS INSTITUTION|AFFILIATED TO CHARUSAT UNIVERSITY,CHANGA</h3>
          <h4 class="a">APPROVED BY AICTE|ACCREDITED BY NAAC]</h4>
          <h5 class="a">COIMBATORE-641042</h5>
        </div>
      </div>
      <section class="pinnadi">
        <nav>   
          <div class="nav-links">
            <ul>
              <li><Link to="/"><a href>HOME</a></Link></li>
              <li><Link to="/technical"><a href>TECHNICAL EVENTS</a></Link></li>
              <li><Link to="/technical"><a href>NON-TECHNICAL EVENTS</a></Link></li>
              <li><Link to="/workshop"><a href>WORKSHOP</a></Link></li>
              <li><Link to="/register"><a href>REGISTER</a></Link></li>
              <li><Link to="/contact"><a href>CONTACT</a></Link></li>
              <li><Link to="/about"><a href>ABOUT</a></Link></li>
            </ul>
            
           </div>
            </nav>
            
<div class="text-box">
          <h1>WORLD'S BIGGEST COLLEGE SYMPOSIUM</h1>
          <p>The Pace Of Progress In The Field Of Science & Technology. The Theme "YOUTH-TECHNOLOGY-FUTURE" Assert The Fact That The Future Of Technology Lies In The Youth </p>
          <a href="" className="hero-btn">visit us to know more</a>
        </div>
        </section>
      <section class="Events">
        <h1>Events Of College Fesitival</h1>
        <p>The Event Seeks To Achive Communication Of Innovative Ideas</p>
        <div class="row">
          <div class="Events-col">
          <h3>EVENTS</h3>
          <p>Discussion within a small group of people that have come together to discuss a specific topic or the latest developments within their specified field.</p>
          </div>
          <div class="Events-col">
          <h3>TECHNICAL</h3>
          <p>Technical Production Management includes the planning, logistics, installation and operation of technical equipment for events, exhibitions, live shows and conferences</p>
          </div>
          <div class="Events-col">
          <h3>NON-TECHNICAL</h3>
          <p>A technical producer has many jobs on an event, however their main responsibility is to ensure that the audience is engaged, motivated and inspired by the event. One of the best ways of achieving this goal is through technology</p>
          </div>
        </div>
        
      </section>
      <section class="Event">
        <h1>Our College Campus</h1>
        <p>The Grand Symposium Events Of Our College</p>
        <div class="row">
          <div class="Event-col">
            <img src={ab } alt=''></img>
            <div class="layer">
            </div>
          
          </div>
          <div class="Event-col">
            <img src={cd } alt=''></img>
            <div class="layer">
            </div>
          </div>
          <div class="Event-col">
            <img src={ef } alt=''></img>
            <div class="layer">

            </div>
          </div>
        </div>
      </section>
     </div>
                 
   )
 }

  export default Homess;
