import Card from '../../components/Card'
import data from './data'
import './experience.css'

const Experience = () => {
  return (
    <section id="experience">
      <h2>My Experience</h2>
      <p>Here's my professional journey and work experience in the tech industry</p>
      <div className="container experience__container" data-aos="fade-up">
        {
          data.map(item => (
            <Card key={item.id} className="experience__item">
              <div className="experience__icon">{item.icon}</div>
              <div className="experience__details">
                <div className="experience__header">
                  <h4>{item.position}</h4>
                  <h5>{item.company}</h5>
                  <small className="experience__duration">{item.duration}</small>
                </div>
                <p className="experience__description">{item.description}</p>
                <div className="experience__technologies">
                  {item.technologies.map((tech, index) => (
                    <span key={index} className="tech__tag">{tech}</span>
                  ))}
                </div>
              </div>
            </Card>
          ))
        }
      </div>
    </section>
  )
}

export default Experience
