import React from 'react'
import './Footer.scss'
import logo from '../../assets/logo.svg'
import {motion} from 'framer-motion'
const Footer = () => {
  return (
    <div className="gpt3__footer">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">Do you want to step in to the future before others</h1>
        <motion.button 
        type="button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}>
        Request Early Access
        </motion.button>
        
      <div className="gpt3__footer-content">
        <div className="gpt3__footer-content__logo">
          <img src={logo} alt="logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className="gpt3__footer-content-container">
    
        <div className="gpt3__footer-content__links">
          <h5>Links</h5>
          {
            links.map(link => <p key={link}>{link}</p>)
          }
        </div>
        <div className="gpt3__footer-content__info">
          <h5>Company</h5>
          {
            company.map(link => <p key={link}>{link}</p>)
          }
        </div>
        <div className="gpt3__footer-content__contact">
          <h5>Contact</h5>
          {
            contact.map(link => <p key={link}>{link}</p>)
          }
        </div>   
      </div>
      </div>
      <div className="gpt3__footer-foot">
        <p>© 2022 GPT-3. All rights reserved.</p>
      </div>
      </div>
    </div>
  )
}

export default Footer

const links = ['Overons', 'Social Media', 'Counters', 'Contact']
const company = ['Terms & Conditions', 'Privacy Policy', 'Most Asked Questions']
const contact = ['Crechterwoord K12 182 DK Alknjkcb', '085-132567', 'info@payme.net']