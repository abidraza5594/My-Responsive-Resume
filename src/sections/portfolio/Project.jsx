import Card from '../../components/Card'


const Project = ({project}) => {
  return (
    <Card className="portfolio__project">
        <div className="portfolio__project-image">
            <img src={project.image} alt={project.title} />
        </div>
        <h4>{project.title}</h4>
        <p>{project.desc}</p>
        <div className="portfolio__project-cta">
            <a href={project.demo} className="btn sm" target="_blank" rel="noopener noreferrer"> { project.category !== 'certificate' ? "Demo" :"view"}</a>
            {project.category !== 'certificate' ?  <a href={project.github} className="btn sm primary" target="_blank" rel="noopener noreferrer">Github</a> : ""}
            
        </div>
    </Card>
  )
}

export default Project