import React from 'react';
import './nith.css';
import paiyen from './assets/phot.jpg';

import oral from'./assets/orl.jpeg';
import brain from'./assets/tech.jpg';
    const Swetha = () =>{
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
          <section class="header quiz--narrow">
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
                <div>

<img src={paiyen}  className="hand"alt='star'></img>
<p className='marker'>A quiz is a game or competition in which someone tests your knowledge by asking you questions. 
We'll have a quiz at the end of the show. Synonyms: competition, test, quiz show, panel game More Synonyms of quiz.</p>
 <img src={oral}  className="vaaipechu"alt='oral'></img>
 <h1 className='thalaipu'>Oral quiz</h1>
<p className='solliparu'>Oral quizzes serve a number of purposes. When students are not reading their 
reading assignments, the teacher may give them written quizzes to motivate the class to do their homework.
Depending on the class, the students may not be motivated by low grades to do their reading</p>
<img src={brain}  className="yosipa"alt='brain'></img>
<p className='senjukaami'>Speed!! Speed!! Speed!! Battle of Brains is a Technical Quiz game of questions and answers on all topics of TECHNICAL knowledge
 that is played by technical students. The game is typically played with a lockout buzzer s ystem between some numbers of tea ms, most commonly teams of 
 two players each. A moderator reads questions to the teams, whose players endeavor to buzz in first with the correct answer, scoring points for their team
</p>

        </div>
         </div>
           </nav>
            </section>
            </div>
            )
            
            }
export default Swetha ;
       
