import PropTypes from 'prop-types'
// CSS
import '../styles/HeaderBtn.css'

const LogoBtn = ({ icon, value }) => {
  return (
    <button type='button' className='text-18-500 nav-btn logo-btn'>
      {icon} <span>{value}</span>
    </button>
  )
}

LogoBtn.propTypes = {
  icon: PropTypes.any,
  value: PropTypes.string,
}

export default LogoBtn
