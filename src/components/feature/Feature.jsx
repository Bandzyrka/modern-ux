import React from 'react'
import './Feature.scss'

const Feature = ({ title, text}) => {
  return (
    <div className="gpt3__features-container__feature">
      <div className="gpt3__features__feature_title">
        <div />
        <h1>{title}</h1>
      </div>
      
      <div className="gpt3__features__feature_text">
        <p>{text}</p>
      </div>
    </div>
)};

export default Feature