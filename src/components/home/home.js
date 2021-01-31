import React from 'react'
import vid from './bg.mp4'
import bg from './background.jpg'
import Typical from 'react-typical'

const Home = () => {
  return (
    <div id="home" className="section home" >
      <video playsInline={true} autoPlay={true} muted={true} className="video" poster={bg} loop={true} style={{objectFit:"cover"}}> 
        <source src={vid} type="video/mp4" style={{objectFit:"cover" }} />
      </video>
      <div className="overlay center">
        <h1 className="h1">Gary Cordero</h1>
        <p className="message">
          Full-Stack Web Developer  
        </p>
        <p className="message mt-5">
          <Typical
            loop = {Infinity}
            wrapper = "b"
            steps = {[
              "Think.",
              1000,
              "Solve.",
              1000,
              "Inovate!",
              1000
            ]}
          />
        </p>
        
      <div className="skillset">
        <p className="skills text-center"> | Ruby | Ruby on Rails | JavaScript | Reactjs | Redux | SQL | CSS | Bootstrap | Java | Spring | </p>
      </div>
      <hr className="divisor w-75"/> 
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
  )
}


export default Home;