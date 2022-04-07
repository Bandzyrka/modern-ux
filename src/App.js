import React, {useEffect} from 'react'
import './App.scss';
import AOS from "aos";
import "aos/dist/aos.css";
import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers'
import { Cta, Brand, Navbar } from './components'


const App = () => {
  useEffect(() => {
    AOS.init({
      disable: false, 
      startEvent: 'DOMContentLoaded', 
      initClassName: 'aos-init', 
      animatedClassName: 'aos-animate', 
      useClassNames: false, 
      disableMutationObserver: false,
      debounceDelay: 50, 
      throttleDelay: 99, 
      offset: 120, 
      delay: 200, 
      duration: 1500, 
      easing: 'ease-in-out', 
      once: true, 
      mirror: false, 
      anchorPlacement: 'top-bottom',
    });
    AOS.refresh();
  }, []);
  return (
    <div className="App">
      <div className="gradient__background">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features/>
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
    )
}

export default App;
