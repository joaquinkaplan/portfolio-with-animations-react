import { useEffect, useState } from 'react'
// import {
//   faAngular,
//   faCss3,
//   faGitAlt,
//   faHtml5,
//   faJsSquare,
//   faReact,
// } from '@fortawesome/free-brands-svg-icons'
import Homer from '../../assets/images/homer_simpson.jpg'
import Bart from '../../assets/images/bart_simpson.jpg'
import Marge from '../../assets/images/marge_simpson.jpg'
import Lisa from '../../assets/images/lisa_simpson.jpg'
import Maggie from '../../assets/images/maggie_simpson.jpg'
import Abe from '../../assets/images/abe_simpson.jpg'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './about.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <img src={Homer} alt="homer" />
              {/* <FontAwesomeIcon icon={faAngular} color="#DD0031" /> */}
            </div>
            <div className="face2">
              <img src={Bart} alt="bart" />
              {/* <FontAwesomeIcon icon={faHtml5} color="#F06529" /> */}
            </div>
            <div className="face3">
              <img src={Marge} alt="marge" />
              {/* <FontAwesomeIcon icon={faCss3} color="#28A4D9" /> */}
            </div>
            <div className="face4">
              <img src={Lisa} alt="lisa" />
              {/* <FontAwesomeIcon icon={faReact} color="#5ED4F4" /> */}
            </div>
            <div className="face5">
              <img src={Maggie} alt="maggie" />
              {/* <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" /> */}
            </div>
            <div className="face6">
              <img src={Abe} alt="abe" />
              {/* <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" /> */}
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
