import { developmentData } from '../data'
import { VisitBtn, SecondaryBtn } from './'
import { WatchIcon, GithubIcon, Guard } from '../assets/staticIcons'

//CSS
import '../styles/TabContent.css'

const DevelopmentProjects = () => {
  return (
    <section className='project-grid'>
      {developmentData.map((item) => {
        const { id, img, link, title, tag1, tag2, tag3, source, duration } =
          item
        return (
          <div className='project-card-container' key={id}>
            <div className='project-img-container'>
              <img className='project-img' src={img} alt={title} />
              <div className='project-overlay'></div>
              <VisitBtn value={'Visit Site'} link={link} alt={'Arrow Icon'} />
            </div>

            <div className='project-detail-container'>
              <div className='project-title-tag-container'>
                <p className='text-36-600'>{title}</p>
                <div className='tag-container'>
                  <span className='text-16-400'>{tag1}</span>
                  <div className='tag-point-container'>
                    <div className='bullet-point'></div>
                    <span className='text-16-400'>{tag2}</span>
                  </div>
                  <div className='tag-point-container'>
                    <div className='bullet-point'></div>
                    <span className='text-16-400'>{tag3}</span>
                  </div>
                </div>
              </div>

              <div className='project-buttons'>
                <div className='watch-container'>
                  <SecondaryBtn icon={WatchIcon} value={duration} />
                </div>

                {source ? (
                  <SecondaryBtn
                    icon={GithubIcon}
                    value={'Source Code'}
                    link={source}
                  />
                ) : (
                  <SecondaryBtn icon={Guard} value={'Private Code'} />
                )}
              </div>
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default DevelopmentProjects
