import React from "react";
import "./nith.css";

import college from "./assets/newyork.jpg";
import thala from "./assets/princy.jpg";
import admission from "./assets/cllge.jpeg";
const Abouts = () => {
  return (
    <div>
      <div className="container">
        <div class="col">
          <h2 class="a">
          CHANDUBHAI S. PATEL DEPARTMENT OF INFORMATION TECHNOLOGY
          </h2>
          <h3 class="a">
            [AN AUTONOMOUS INSTITUTION|AFFILIATED TO CHARUSAT UNIVERSITY,CHANGA
          </h3>
          <h4 class="a">APPROVED BY AICTE|ACCREDITED BY NAAC]</h4>
          <h5 class="a">COIMBATORE-641042</h5>
        </div>
      </div>
      <section class="header oorampo--narrow">
        <nav>
          <div class="nav-links">
            <ul>
              <li>
                <a href="\">HOME</a>
              </li>
              <li>
                <a href="technical">TECHNICAL EVENTS</a>
              </li>
              <li>
                <a href="quizs">NON-TECHNICAL EVENTS</a>
              </li>
              <li>
                <a href="workshop">WORKSHOP</a>
              </li>
              <li>
                <a href="register">REGISTER</a>
              </li>
              <li>
                <a href="">CONTACT</a>
              </li>
              <li>
                <a href="about">ABOUT</a>
              </li>
            </ul>
            <div>
             
              <img src={college} className="goal" alt="goal"></img>
              <img src={thala} className="vaathi" alt="vaathi"></img>
              <img src={admission} className="admission" alt="star"></img>
              
              <div class="details">
                <h4> Dr TRUSHIT UPADYAY B.E,M.E,Ph.d</h4>
                <h3> PRINCIPAL</h3>
              </div>
              <p className="theruchuko">
                The rise of sri achivers to prominence over its thirty five
                years of existence is primarily attributed to its mission to
                accomplish expectations of the society and industry by nurturing
                the students to be competent professionals with integrity,
                besides profound technical knowledge and skill. In rethinking
                education to deal with rapid changes at the dawn of the
                twenty-first century, innovation, technology, and research are
                indispensable tools of education.As we are quite aware,
                education is central to the knowledge-based society that derives
                from human potential. “Learning to Be, and Learning: The
                Treasure Within” have been key sources for education policy
                makers and practitioners internationally. I invite you to
                explore the treasure within you through outstanding teaching,
                choice based credit system, and a wide range of academic
                programs and extra-curricular offerings which sri achivers has.
                Generations of students, staff, alumni, and parents have built
                our reputation, and we continue to grow in the eyes of the
                public. Welcome to SKCT and witness the pathways of learning
                which leads to the mainstream of the knowledge revolution. Come
                and confront confidently the challenges that the future holds in
                store!
              </p>
            </div>
          </div>
        </nav>
      </section>
    </div>
  );
};
export default Abouts;
