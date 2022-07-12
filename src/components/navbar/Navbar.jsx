import React, {useState} from 'react'
import { RiMenu3Line, RiMenuLine} from 'react-icons/ri'
import logo from '../../assets/logo.svg'
import './Navbar.scss'
import { motion } from "framer-motion"
const Menu = () => (
  <React.Fragment>
    <p><a href="#home">Home</a></p>
    <p><a href="#wgpt3">What is GPT?</a></p>
    <p><a href="#possibility"> Possibility</a></p>
    <p><a href="#features">Case Studies</a></p>
    <p><a href="#blog">Library</a></p>
  </React.Fragment>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign In</p>
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          type='button'>
            Sign Up
        </motion.button>
      </div>
      <div className="gpt3__navbar-menu">
       {toggleMenu 
        ? <RiMenuLine 
            color="#fff" 
            size={27} 
            onClick = {() => 
              setToggleMenu(false)}
            />
        : <RiMenu3Line 
            color="#fff" 
            size={27}
            onClick = {() => 
              setToggleMenu(true)} 
            />
        }
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <Menu />
              <div className="gpt3__navbar-menu_container-links-sign">
                <p>Sign In</p>
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  type='button'>
                    Sign Up
                </motion.button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar