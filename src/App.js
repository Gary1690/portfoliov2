import './App.scss';
import Layout from './components/layout/layout.js';
import {Navbar, Nav} from 'react-bootstrap';
import {Link,Element} from 'react-scroll';


function App() {
  return (
    <>
    <Navbar  bg="dark" variant="dark" expand="md"  sticky="top" style={{opacity:"0.8",zIndex:"10"}}>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto justify-content-center text-light" style={{ width: "100%" }}>
         <Nav.Item className="m-1">
          <Link activeClass="active" to="test1" spy={true} smooth={true} offset={-50} duration={1000} >
            Test 1
          </Link>
         </Nav.Item>
         <Nav.Item className="m-1"> 
          <Link activeClass="active" to="test2" spy={true} smooth={true} offset={50} duration={1000} >
            Test 2
          </Link>
         </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <section className="pt-5" id="test1" style={{height:"100vh",backgroundColor:"blue"}}>
      <h1>Section 1</h1>
    </section>
    <section id="test2" style={{height:"100vh",backgroundColor:"red"}}>
      <h1>Section 1</h1>
    </section>

    <footer className="footer">
      <p>
        Author: Hege Refsnes <a href="mailto:hege@example.com">hege@example.com</a>
      </p>
    </footer>
    </>

    
  );
}

export default App;
