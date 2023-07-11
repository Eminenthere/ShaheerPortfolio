import {
  DataStructureAlgorithm,
  Hero,
  LanguageTechnologies,
  Project,
} from './components'
import Lottie from 'lottie-react'
import LoadingBlock from './assets/lottie/loadingblocks.json'
import { useEffect, useState } from 'react'
// CSS
import './App.css'

function App() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setInterval(() => {
      setLoading(true)
    }, 1500)
    setLoading(false)
  }, [])
  return (
    <>
      {loading ? (
        <div>
          <Hero /> <Project /> <LanguageTechnologies />
          <DataStructureAlgorithm />
        </div>
      ) : (
        <section className='lottie-load'>
          <Lottie className='lottie-animation' animationData={LoadingBlock} />
        </section>
      )}
    </>
  )
}

export default App
