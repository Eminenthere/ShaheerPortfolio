import { designData } from '../data'
import { VisitBtn, SecondaryBtn } from './'
import { WatchIcon, DesignIcon } from '../assets/staticIcons'

//CSS
import '../styles/TabContent.css'
const DesignProjects = () => {
  return (
    <section className='project-grid'>
      {designData.map((item) => {
        const { id, img, link, title, tag1, tag2, tag3, source, duration } =
          item
        return (
          <div className='project-card-container' key={id}>
            <div className='project-img-container'>
              <img className='project-img' src={img} alt={title} />
              <div className='project-overlay'></div>
              <VisitBtn value={'Visit Design'} link={link} alt={'Arrow Icon'} />
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

                <SecondaryBtn
                  icon={DesignIcon}
                  value={'Dribbble'}
                  link={source}
                />
              </div>
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default DesignProjects
