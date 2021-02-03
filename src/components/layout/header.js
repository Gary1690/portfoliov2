import React from 'react'
import {Navbar,Nav} from 'react-bootstrap';
import { Link } from 'react-scroll'

const Header = (props) =>{
  console.log(props)
  return(
    <Navbar  bg="dark" variant="dark" expand="md"  fixed="top" className="opacity-change">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto navigation">
          {
            props.navLinks.map( (x,key) => {
              return(
                <Nav.Item key={key} className="m-2">
                  <Link activeClass="active-link" to={x.to} spy={true} smooth={true} offset={x.offset} duration={x.duration}>
                    {x.display} 
                  </Link>
                </Nav.Item>
              )
            })
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

Header.defaultProps = {
  navLinks:[
    {
      display:"Home",
      to: "home",
      offset:0,
      duration:1000
    },
    {
      display:"About",
      to: "about",
      offset:0,
      duration:1000
    },
    {
      display:"Resume",
      to: "resume",
      offset:0,
      duration:1000
    },
    {
      display:"Projects",
      to: "projects",
      offset:0,
      duration:1000
    }
  ]
}

export default Header;