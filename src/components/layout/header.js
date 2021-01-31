
import React from 'react'
import {Navbar,Nav,NavDropdown,Container} from 'react-bootstrap';
import { Link } from 'react-scroll'

const Header = () =>{
  return(
    <Navbar  bg="dark" variant="dark" expand="md"  fixed="top" style={{opacity:"0.5",zIndex:"10"}}>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto justify-content-center text-light " style={{ width: "100%",fontSize:"1.5em"}}>
        <Nav.Item className="m-2">
          <Link activeClass="active" to="home" spy={true} smooth={true} offset={-50} duration={1000} >
            Home 
          </Link>
        </Nav.Item>
        <Nav.Item className="m-2">
          <Link activeClass="active" to="about" spy={true} smooth={true} offset={5} duration={1000} >
            About 
          </Link>
        </Nav.Item>
        <Nav.Item className="m-2"> 
          <Link activeClass="active" to="resume" spy={true} smooth={true} offset={50} duration={1000} >
            Resume
          </Link>
        </Nav.Item>
        <Nav.Item className="m-2"> 
          <Link activeClass="active" to="projects" spy={true} smooth={true} offset={50} duration={1000} >
            Projects
          </Link>
        </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header;