import PropTypes from 'prop-types'
// CSS
import '../styles/HeaderBtn.css'

const DownloadBtn = ({ icon, value, link }) => {
  return (
    <a className='text-18-500 nav-btn' download href={link}>
      {icon} <span>{value}</span>
    </a>
  )
}

DownloadBtn.propTypes = {
  icon: PropTypes.any,
  value: PropTypes.string,
}

export default DownloadBtn
