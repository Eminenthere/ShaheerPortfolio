import PropTypes from 'prop-types'
import React from 'react'
import { NavLinkArray } from '../data'
import '../styles/NavLinks.css'

const NavLinks = () => {
  return NavLinkArray.map((social) => {
    return (
      <a
        key={social.id}
        className='nav-link'
        target='_blank'
        rel='noopener noreferrer'
        href={social.link}
      >
        <img src={social.icon} alt={social.name} />
      </a>
    )
  })
}

NavLinks.propTypes = {
  icon: PropTypes.any,
  link: PropTypes.string,
}

export default NavLinks
