import React from 'react'
import avatar from './gary.jpg'

function About() {
  return (
    <div id="about" className="section about" >
      <div className="center">
        <div className="row justify-content-center">
          <div className = "col-md-2 col-sm-12 m-3 text-center" >
             <img
              className= "avatar p-3 mt-5"
              src= {avatar}
              alt="Gary Cordero"
            />
          </div>
          <div className = "col-md-6 col-sm-12">
            <h4 className="resume-title p-3"><span>About Me</span></h4>
            <p className="message p-3"> Full stack web developer with strengths in Ruby, C#, Java and JavaScript frameworks and a strong foundation in software engineering and object oriented programming concepts with experience in retail sales and business operations. </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
