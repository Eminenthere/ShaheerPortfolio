import {
  WatchIcon,
  LeetCodeIcon,
  ComplexityIcon,
  BigOIcon,
} from '../assets/staticIcons'
import '../styles/DataStructureAlgorithm.css'
import SecondaryBtn from './SecondaryBtn'
import { DataStructureArray } from '../data'

const DataStructureAlgorithm = () => {
  return (
    <section className='dsa-wrapper'>
      <h1 className='text-48-600'>Data Structures & Algorithms</h1>
      <div className='dsa-grid'>
        {DataStructureArray.map((question) => {
          const {
            dsaQuestionTitle,
            dsaQuestion,
            dsaSolution,
            dsaDuration,
            complexity,
            bigO,
            id,
          } = question
          return (
            <div className='dsa-card-container' key={id}>
              <div className='dsa-title-container'>
                <p className='text-36-600'>{dsaQuestionTitle}</p>
                <p>{dsaQuestion}</p>
              </div>

              <div className='buttons-row'>
                <div className='info-tag'>
                  <SecondaryBtn icon={WatchIcon} value={dsaDuration} />
                  <SecondaryBtn icon={ComplexityIcon} value={complexity} />
                  <SecondaryBtn icon={BigOIcon} value={bigO} />
                </div>
                <SecondaryBtn
                  icon={LeetCodeIcon}
                  value={'LeetCode Solution'}
                  link={dsaSolution}
                />
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default DataStructureAlgorithm
