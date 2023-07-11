import PropTypes from 'prop-types'

//CSS
import '../styles/SecondaryBtn.css'
const SecondaryBtn = ({ value, icon, link }) => {
  return (
    <>
      <button type='button'>
        <a
          className='text-14-500 secondary-btn'
          rel='noreferrer'
          target='_blank'
          href={link}
        >
          <img src={icon} alt={value} />
          <span>{value}</span>
        </a>
      </button>
    </>
  )
}

SecondaryBtn.propTypes = {
  value: PropTypes.string,
  link: PropTypes.string,
  icon: PropTypes.any,
}

export default SecondaryBtn
