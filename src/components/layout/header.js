import React,{useState} from 'react'
import {Navbar,Nav} from 'react-bootstrap';
import { Link } from 'react-scroll'

const Header = (props) =>{
  const [transparency,setTransparency] = useState(true)
  
  return(
    <Navbar variant="dark" expand="md"  fixed="top" id={"navBar"} className={transparency ? "zero-opacity" : ""}>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler"/>
      <Navbar.Collapse id="basic-navbar-nav" >
        <Nav className="mr-auto navigation">
          {
            props.navLinks.map( (x,key) => {
              return(
                <Nav.Item key={key} className="m-2">
                  <Link 
                    activeClass="active-link" 
                    to={x.to} 
                    spy={true} 
                    smooth={true} 
                    offset={x.offset} 
                    duration={x.duration}
                    onSetActive={()=>{x.to==='home'&& setTransparency(true)}}
                    onSetInactive={()=>{x.to==='home'&& setTransparency(false)}}
                  >
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