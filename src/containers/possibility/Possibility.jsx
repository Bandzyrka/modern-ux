import React from 'react'
import './Possibility.scss'
import posibbility from '../../assets/possibility.png'


const Possibility = () => {
  return (
    <div className="gpt3__posibbility section__padding">
      <div className="gpt3__posibbility-image">
        <img src={posibbility} alt="posibbility" />
      </div>
      <div data-aos="fade" data-aos-delay="100" className="gpt3__posibbility-container">
        <p className="gpt3__posibbility-container__title">Request Early Access to Get Started</p>
        <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
      </div>
    </div>
  )
}

export default Possibility