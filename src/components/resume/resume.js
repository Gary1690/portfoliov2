import React from 'react'
import {Row,Col} from 'react-bootstrap'

function Resume() {
  return (
    <div id="resume" className="section resume" >
      <div className="center">
        <Row className="w-100 mt-5">
          <Col sm={12}  md={{span:2,offset:2}} className="resume-left">
              <h3 className="resume-title"><span>EDUCATION</span></h3>
          </Col>
          <Col sm={12} md={8} className="d-flex flex-column">
              <h3 className="resume-title">Flatiron School</h3>
              <div className="description">
                <p className="achievement">Software Engineering Inmersive</p>
                <p className="date"> Aug. 2020 </p>
              </div>
              <br/>
              <h3 className="resume-title">Universidad Autonoma de Santo Domingo</h3>
              <div className="description">
                <p className="achievement">B.S. in Computer Science</p>
                <p className="date"> Oct. 2017 </p>
              </div>
          </Col>
        </Row>
        <hr className="divisor w-75"/>
        <Row className="w-100">
          <Col sm={12}  md={{span:2,offset:2}} className="resume-left">
              <h3 className="resume-title"><span>WORK EXPERIENCE</span></h3>
          </Col>
          <Col sm={12} md={8} className="d-flex flex-column align-items-start">
              <div className="description">
              <h3 className="resume-title">Away</h3>
              <p className="location" > New York, NY</p> 
              </div>
              <div className="description">
                <p className="achievement"> Sales Associate </p> 
                <p className="date"> May 2018 - Oct. 2019</p> 
              </div>
              <br/>
              <div className="description">
                <h3 className="resume-title">Charles Tyrwhitt</h3>
                <p className="location" > New York, NY</p> 
              </div>
              <div className="description">
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
