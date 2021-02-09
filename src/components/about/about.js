import React, {useEffect} from 'react'
import avatar from './gary.jpg'
import {Col,Row} from 'react-bootstrap'


function About() {

  useEffect(() => {
   
  });

  return (
    <div id="about" className="section about" >
        <div className="center">
          <Row className="w-100">
            <Col xs={12} md={12} lg={4}>
              <div className="d-flex align-items-center w-100 h-100">
                <img src={avatar} className="avatar" alt="gary" />
              </div>
            </Col>
            <Col  xs={12} md={12} lg={8}>
              <h1 className="about-title"><span>About</span></h1>
              <p className="about-message">Full-stack web developer with strengths in Ruby, Java, and JavaScript frameworks. Strong foundation in software engineering and object-oriented programming concepts with experience in retail sales and business operations. </p>
              <br/>
              <p className="about-message">I might be a perfect fit!</p>
              <div className="text-sm-center">
              <a 
               className="btn btn-outline-light m-1 ml-3"
               href="https://docs.google.com/document/d/1q2vDrJvbcp9e4Hxtn4meJs2ygh6rB1OLUxf5qya5hUs/preview"
               target="_blank"
               rel="noreferrer"
               > 
                <i className="fa fa-eye" aria-hidden="true"/> <span>View</span> Resume
              </a>
              <a 
              className="btn btn-outline-light m-1"
              href="https://docs.google.com/document/d/1q2vDrJvbcp9e4Hxtn4meJs2ygh6rB1OLUxf5qya5hUs/export?format=pdf"
              > 
              <i className="fa fa-download" aria-hidden="true"/> <span>Download</span> Resume
              </a>
              </div>
            </Col>
          </Row>
        </div>
    </div>
  )
}

export default About
