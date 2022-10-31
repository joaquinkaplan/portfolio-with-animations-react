import React from 'react'
import error from '../../assets/images/error.jpg'

const Error = () => {
  return (
    <div className="stage-cube-cont">
      <div className="cubespinner">
        <div className="face1">
          <img src={error} alt="homer" />
          {/* <FontAwesomeIcon icon={faAngular} color="#DD0031" /> */}
        </div>
        <div className="face2">
          <img src={error} alt="bart" />
          {/* <FontAwesomeIcon icon={faHtml5} color="#F06529" /> */}
        </div>
        <div className="face3">
          <img src={error} alt="marge" />
          {/* <FontAwesomeIcon icon={faCss3} color="#28A4D9" /> */}
        </div>
        <div className="face4">
          <img src={error} alt="lisa" />
          {/* <FontAwesomeIcon icon={faReact} color="#5ED4F4" /> */}
        </div>
        <div className="face5">
          <img src={error} alt="maggie" />
          {/* <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" /> */}
        </div>
        <div className="face6">
          <img src={error} alt="abe" />
          {/* <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" /> */}
        </div>
      </div>
    </div>
  )
}

export default Error
