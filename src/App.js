import './App.scss';
import vid from './components/bg.mp4'
import bg from './components/background.jpg'
import Header from './components/layout/header'
import Typical from 'react-typical'

function App() {
  return (
    <>
    <Header/>
    <div id="home" className="section home" >
      <video playsInline={true} autoPlay={true} muted={true} className="video" poster={bg} loop={true} style={{objectFit:"cover"}}> 
        <source src={vid} type="video/mp4" style={{objectFit:"cover" }} />
      </video>
      <div className="overlay center">
        <h1 className="">Gary Cordero</h1>
        <p className="message">
          Full-Stack Web Developer  
        </p>
      <div className="skillset">
        <p className="skills text-center"> | Ruby | Ruby on Rails | JavaScript | Reactjs | CSS | Bootstrap | Java | </p>
      </div>
      <hr className="divisor"/> 
          <div className="social">
            {/*linkedin*/}
            <a href ="https://www.linkedin.com/in/gary-a-cordero-rosa-048552145/" rel="noreferrer" target="_blank">
              <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            </a>
            {/*Github*/}
            <a href ="https://github.com/Gary1690" rel="noreferrer" target="_blank">
              <i className="fa fa-github" aria-hidden="true"></i>
            </a>
             {/*Medium*/}
            <a href ="https://medium.com/@garycordero1690" rel="noreferrer" target="_blank">
              <i className="fa fa-medium" aria-hidden="true"></i>
            </a>
             {/*Email*/}
            <a href ="mailto:garycordero1690@gmail.com" rel="noreferrer" target="_blank">
              <i className="fa fa-envelope-o" aria-hidden="true"></i>
            </a>
          </div>
    </div>
  </div>

    <section id="about" style={{height:"100vh",backgroundColor:"red"}}>
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
