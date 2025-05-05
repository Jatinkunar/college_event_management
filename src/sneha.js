import React from 'react';
import './register.css';

import bg from'./assets/frant.jpg'; 
const Sne = () =>{
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
     <section class="back">
        <nav>   
          <div class="nav-links">
            <ul>
              <li><a href="/">HOME</a></li>
              <li><a href="technical">TECHNICAL EVENTS</a></li>
              <li><a href="quizs">NON-TECHNICAL EVENTS</a></li>
              <li><a href="workshop">WORKSHOP</a></li>
              <li><a href="workshop">REGISTER</a></li>
              <li><a href="">CONTACT</a></li>
              <li><a href="about">ABOUT</a></li>
            </ul>
           </div>
            </nav>
            </section>
            <div>
        <body >
        <div class="main">
            <div class="register">
                <h2>REGISTRATION FORM</h2>
                <form id="register" method="post">
                    <label>First Name<span>*</span></label>
                    <input type="text" name="fname" placeholder="Enter your first name" required/><br/><br/>
                    <label>Last Name<span>*</span></label>
                    <input type="text" name="lname" placeholder="Enter your last name" required/><br/><br/>
                    <label>DOB<span>*</span></label>
                    <input type="date" name="date" required/><br/><br/>
                    <label>Email<span>*</span></label>
                    <input type="text" name="email" placeholder="Enter your email id" required/><br/><br/>
                    <label>Mobile No<span>*</span></label>
                    <input type="number" name="phone" 
                     required/><br/> <br />
                    <label>Gender<span>*</span></label>
                    <br />
                    <input type="radio" name="gender" class="radio-button"required/><label
                    className='gender'>Male</label> <br />
                    <input type="radio" name="gender" class="radio-button"required/><label>Female</label><br />
                    <input type="radio" name="gender" class="radio-button"required/><label>Others</label>
                    <br /> <br />
                    
                    <label>Address<span>*</span></label>
                    <input type="text" name="address" placeholder="Enter your address" required/><br/><br/>
                    <label>City</label><br/>
                    <select>
                        <option value="" hidden>Please select your city</option>
                        <option value="Coimbatore">Coimbatore</option>
                        <option value="Dindigul">Dindigul</option>
                        <option value="Kallakurichi">Kallakurichi</option>
                        <option value="KanyaKumari">KanyaKumari</option>
                        <option value="Madurai">Madurai</option>
                        <option value="Nagapattinam">Nagapattinam</option>
                        <option value="Pollachi">Pollachi</option>
                        <option value="Puducherry">Puducherry</option>
                        <option value="Salem">Salem</option>
                        <option value="Tiruppur">Tiruppur</option>
                        <option value="Trichy">Trichy</option>
                    </select><br/><br/>
                    <label>Country</label><br/>
                    <select>
                        <option value="" hidden>Please select your country</option>
                        <option value="Afghanistan">Afghanistan</option>
                        <option value="Africa">Africa</option>
                        <option value="Argentina">Argentina</option>
                        <option value="Australia">Australia</option>
                        <option value="Brazil">Brazil</option>
                        <option value="Canada">Canada</option>
                        <option value="Colombia">Colombia</option>
                        <option value="Germany">Germany</option>
                        <option value="India">India</option>
                        <option value="Nepal">Nepal</option>
                    </select><br/><br/>
                    <label>State</label><br/>
                    <select>
                        <option value="" hidden>Please select your state</option>
                        <option value="Assam">Assam</option>
                        <option value="Bengalore">Bengalore</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Goa">Goa</option>
                        <option value="Himachal pradesh">Himachal pradesh</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Rajesthan">Rajesthan</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Uttrakand">Uttrakand</option>
                    </select><br/><br/>
                    <label>College<span>*</span></label><br/>
                    <select>
                        <option value="" hidden>Please select your college</option>
                        <option value="Sri Achievers Institute Of Engineering and Technology">Sri Achievers Institute Of Engineering and Technology,Coimbatore</option>
                        <option value="PSNA College Of Engineering and Technology">PSNA College Of Engineering and Technology,Dindigul</option>
                        <option value="A.K.T. Memorial College Of Engineering and Technology">A.K.T. Memorial College Of Engineering and Technology</option>
                        <option value="Marthandam College Of Engineering">Marthandam College Of Engineering,KanyaKumari</option>
                        <option value="Thiagarajar College Of Engineering">Thiagarajar College Of Engineering,Madurai</option>
                        <option value="A.V.C College Of Engineering">A.V.C College Of Engineering,Nagapattinam</option>
                        <option value="Dr.Mahalingam College Of Engineering and Technology">Dr.Mahalingam College Of Engineering and Technology,Pollachi</option>
                        <option value="Pondicherry Engineering College">Pondicherry Engineering College,Puducherry</option>
                        <option value="Sona College Of Technology">Sona College Of Technology,Salem</option>
                        <option value="Sasurie College Of Engineering">Sasurie College Of Engineering,Tiruppur</option>
                        <option value="National Institute Of Technology">National Institute Of Technology,Tirchy</option>
                      
                    </select><br/><br/>
                    <label>Events<span>*</span></label><br/>
                    <select>
                         <option value="" hidden>Technical events</option>
                         <option value="" >Hackathon</option>
                         <option value="" >Workshop</option>
                    </select><br/><br/>
                    <select><br/>
                         <option value="" hidden>Non Technical events</option>
                         <option value="" >Quiz</option>
                    </select><br/><br/>
                    <label>Language<span>*</span></label><br/>
                    <input type="Checkbox" name="gender" required/><label>English</label><br/>
                    <input type="Checkbox" name="gender" required/><label>Tamil</label><br/>
                    <input type="Checkbox" name="gender" required/><label>Other Language</label><br/><br/>
                    <input type="Submit" value="Submit" name="Submit" id="Submit"   ></input><br/>
                   
                </form>
            </div>
        </div>
        </body>
      </div>









            </div>
            
 
 
                        
   )
 }
  export default Sne;