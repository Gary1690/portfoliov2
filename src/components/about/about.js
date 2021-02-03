import React, {useEffect} from 'react'
import avatar from './gary.jpg'
import {Col,Row} from 'react-bootstrap'
import './about.scss'

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
            </Col>
          </Row>
        </div>
    </div>
  )
}

export default About
