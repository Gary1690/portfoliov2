import React from 'react';
import {Card,Tooltip,OverlayTrigger} from 'react-bootstrap';
import projectList from './projects-list';



const Projects = () => {
  return (
    <div id="projects" className="section projects" >
      <div className="center">
        <h3 className="resume-title text-center text-white m-5">Projects</h3>
        <div className="d-flex flex-variant">
          {projectList.map( (x,index)=> {
            return (
              <Card key={index} style={{ width: '18rem',color:'black',margin:"1em" }}>
                <div className="d-none d-md-block">
                  <Card.Img variant="top" src={x.image}/>
                </div>
                <Card.Body>
                  <Card.Title>{x.name}</Card.Title>
                  <Card.Text>
                    {x.desc}
                  </Card.Text>
                </Card.Body>
                <Card.Body>
                  {x.demo && <CardButton icon={"fa fa-youtube-square"} url={x.demo} tooltip={"Demo"}/> }
                  {x.repo.backend && <CardButton icon={"fa fa-file-code-o"} url={x.repo.backend} tooltip ={"Backend"}/> }
                  {x.repo.frontend && <CardButton icon={"fa fa-code"} url={x.repo.frontend} tooltip ={"Frontend"}/> }
                </Card.Body>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}

const CardButton = (props) =>{
  return (
    <OverlayTrigger
    placement="top"
    overlay={<Tooltip id="button-tooltip-2">{props.tooltip}</Tooltip>}
  >
    {({ ref, ...triggerHandler }) => (
       <a className="card-icon" {...triggerHandler} id="card-icon" href ={props.url} aria-describedby="tooltip" rel="noreferrer" target="_blank">
        <i className={props.icon} aria-hidden="true" ref={ref}></i>
       </a>
    )}
  </OverlayTrigger>
  )
}

export default Projects


{/* <div className="d-flex flex-variant">
  {projectList.map( (x,index)=> {
    return (
        <Card key={index} style={{ width: '18rem',color:'black',margin:"1em" }}>
          <div className="d-none d-md-block">
            <Card.Img variant="top" src={x.image}/>
          </div>
          <Card.Body>
            <Card.Title>{x.name}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          </Card.Body>
          <Card.Body>
            {x.demo && <CardButton icon={"fa fa-youtube-square"} url={x.demo} tooltip={"Demo"}/> }
            {x.repo.backend && <CardButton icon={"fa fa-file-code-o"} url={x.repo.backend} tooltip ={"Backend"}/> }
            {x.repo.frontend && <CardButton icon={"fa fa-code"} url={x.repo.frontend} tooltip ={"Frontend"}/> }
          </Card.Body>
        </Card>
    )
  })}
</div> */}