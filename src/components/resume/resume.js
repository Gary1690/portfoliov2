import React from 'react'
import {Row,Col} from 'react-bootstrap'
import './resume.scss'

function Resume() {
  return (
    <div id="resume" className="section resume">
      <div className="center">
      <Row className="w-100 mt-5">
          <Col xs={12} md={12} lg={4} className="text-center">
            <h3 className="resume-title"><span>EDUCATION</span></h3>
          </Col>
          <Col  xs={12} md={12} lg={8} className="text-center">
            <div className="text-lg-left px-5">
              <h3 className="resume-title">Flatiron School</h3>
            </div>
            <div className="description px-5">
              <p className="achievement">Software Engineering Inmersive</p>
              <p className="date"> Aug. 2020 </p>
            </div>
            <br/>
            <div className="text-lg-left px-5">
             <h3 className="resume-title">Universidad Autonoma de Santo Domingo</h3>
            </div>
            <div className="description px-5">
              <p className="achievement">B.S. in Computer Science</p>
              <p className="date"> Oct. 2017 </p>
            </div>
          </Col>
        </Row>
        <Row className="w-100 mt-5">
          <Col xs={12} md={12} lg={4} className="text-center">
            <h3 className="resume-title"><span>WORK EXPERIENCE</span></h3>
          </Col>
          <Col  xs={12} md={12} lg={8} className="text-center">
          <div className="description px-5">
              <h3 className="resume-title">Away</h3>
              <p className="location" > New York, NY</p> 
              </div>
              <div className="description px-5">
                <p className="achievement"> Sales Associate </p> 
                <p className="date"> May 2018 - Oct. 2019</p> 
              </div>
              <br/>
              <div className="description px-5">
                <h3 className="resume-title">Charles Tyrwhitt</h3>
                <p className="location" > New York, NY</p> 
              </div>
              <div className="description px-5">
                <p className="achievement" >Key Holder </p> 
                <p className="date" > May 2018 - Oct. 2019</p> 
              </div>
          </Col>
        </Row>
      </div>
        
    </div>
  )
}

export default Resume
