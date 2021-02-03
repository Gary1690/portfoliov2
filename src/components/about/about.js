import React, {useEffect} from 'react'
import avatar from './gary.jpg'

function About() {

  useEffect(() => {
   
  });

  return (
    <div id="about" className="section about" >
      <div className="center">
        <div className="d-flex flex-variant">
          <div className = "text-center m-5 " >
             <img
              className= "avatar m-2"
              src= {avatar}
              alt="Gary Cordero"
            />
          </div>
          <div className = "">
            <h4 className="resume-title p-3"><span>About Me</span></h4>
            <p className="message p-3"> Full stack web developer with strengths in Ruby, C#, Java and JavaScript frameworks and a strong foundation in software engineering and object oriented programming concepts with experience in retail sales and business operations. </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
