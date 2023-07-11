import { BoxIcon } from '../assets/staticIcons'
import '../styles/DataStructureAlgorithm.css'

const DataStructureAlgorithm = () => {
  return (
    <section className='dsa-wrapper'>
      <div className='dsa-grid'></div>

      <div className='dsa-card-container'>
        <div className='dsa-title-container'>
          <img src={BoxIcon} alt='Algorithm and DataStructure icon' />
          <p className='text-36-600'>Two Sum</p>
          <p>
            Given an array of integers nums and an integer target, return
            indices of the two numbers such that they add up to target.
          </p>
        </div>
      </div>
    </section>
  )
}

export default DataStructureAlgorithm
