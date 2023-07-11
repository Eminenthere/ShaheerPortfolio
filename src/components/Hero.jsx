import { DownloadIcon, LogoIcon } from '../assets/dynamicIcon'
import { LogoBtn, DownloadBtn } from './'
import { heroIntro } from '../data'
import Resume from '../assets/resume/Shaheer-Resume.pdf'

// CSS
import '../styles/Hero.css'

const Hero = () => {
  return (
    <section className='hero-wrapper'>
      <NavCTAButtons />
      <HeroContent />
    </section>
  )
}

const NavCTAButtons = () => {
  return (
    <nav className='top-btns'>
      <LogoBtn icon={<LogoIcon />} value={'Shaheer.'} />
      <DownloadBtn icon={<DownloadIcon />} value={'Download'} link={Resume} />
    </nav>
  )
}

const HeroContent = () => {
  return (
    <div className='content'>
      <div className='greeting'>
        <p className='text-32-500 hi-gradient'>Hi</p>
        <p className='text-32-500'>👋</p>
        <span className='text-32-500'>
          i’m Shaheer. A self-taught Software Developer
        </span>
      </div>

      <p className='text-48-500'>{heroIntro[0].bio}</p>
    </div>
  )
}

export default Hero
