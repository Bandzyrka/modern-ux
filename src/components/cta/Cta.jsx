import React from 'react'
import './Cta.scss'
import {motion} from 'framer-motion'
const Cta = () => {
  return (
    <div data-aos="flip-up" data-aos-delay="600"className="gpt3__cta section__margin">
      <div className="gpt3__cta-content">
        <p>Request Early Access to Get Started</p>
        <h4>Register today & start exploring the endless possiblities.</h4>
      </div>
      <div className="gpt3__cta-btn">
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          type="button">
              Get Started
        </motion.button>
      </div>
    </div>
  )
}

export default Cta