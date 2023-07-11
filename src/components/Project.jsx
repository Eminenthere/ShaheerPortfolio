import { TabSelector } from './'

//CSS
import '../styles/Project.css'

const Project = () => {
  return (
    <section className='projects-wrapper'>
      <TabSelector
        tabSelector1={'Development Projects'}
        tabSelector2={'Design Projects'}
      />
    </section>
  )
}

export default Project
