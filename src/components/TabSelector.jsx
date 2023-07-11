import PropTypes from 'prop-types'
import { useState } from 'react'
import { DevelopmentProjects, DesignProjects } from './'

//CSS
import '../styles/TabSelector.css'

const TabSelector = ({ tabSelector1, tabSelector2 }) => {
  const [activeTab, setActiveTab] = useState('tab1')

  const handleDevelopment = () => setActiveTab('tab1')

  const handleDesigning = () => setActiveTab('tab2')

  return (
    <>
      <ul className='select-btn-wrapper'>
        <li
          className={`text-18-500 ${
            activeTab === 'tab1' ? 'tab-btn-active' : ''
          }`}
          onClick={handleDevelopment}
        >
          {tabSelector1}
        </li>
        <li
          className={`text-18-500 ${
            activeTab === 'tab2' ? 'tab-btn-active' : ''
          }`}
          onClick={handleDesigning}
        >
          {tabSelector2}
        </li>
      </ul>

      <div className='selected-projects'>
        {activeTab === 'tab1' ? <DevelopmentProjects /> : <DesignProjects />}
      </div>
    </>
  )
}

TabSelector.propTypes = {
  tabSelector1: PropTypes.string,
  tabSelector2: PropTypes.string,
}

export default TabSelector
