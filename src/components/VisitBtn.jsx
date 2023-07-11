import PropTypes from 'prop-types'
import { ArrowIcon } from '../assets/dynamicIcon'
//CSS
import '../styles/VisitBtn.css'

const VisitBtn = ({ value, link }) => {
  return (
    <>
      <button type='button'>
        <a
          className='text-18-500 visit-btn'
          rel='noreferrer'
          target='_blank'
          href={link}
        >
          {value}
          <ArrowIcon />
        </a>
      </button>
    </>
  )
}

VisitBtn.propTypes = {
  value: PropTypes.string,
  link: PropTypes.string,
}

export default VisitBtn
