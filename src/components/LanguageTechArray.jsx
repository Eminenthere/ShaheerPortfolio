import { TechArray } from '../data'
import '../styles/LanguageTechArray.css'

const LanguageTechArray = () => {
  return (
    <section className='lang-tech-grid'>
      {TechArray.map((skill) => {
        return (
          <div key={skill.id} className='lang-tech-card-container'>
            <div className='tech-detail-container'>
              <p className='text-20-600'>{skill.techTitle}</p>
              <p className='text-16-400'>{skill.techInfo}</p>
            </div>
            <img src={skill.techIcon} alt={skill.techInfo} />
          </div>
        )
      })}
    </section>
  )
}

export default LanguageTechArray
