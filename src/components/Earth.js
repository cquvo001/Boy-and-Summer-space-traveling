import React from 'react';
import './VideoStyles.css';
import EarthVideo from '../assets/Earth.mov';
import Pod7 from '../assets/Boy Summer 7.PNG';


const Earth = () => {
  return (
    <div className='hero'>
    <video autoPlay loop muted id='video'>
      <source src={EarthVideo} type='video/mp4' />
    </video>

    <div>
      <h1 >Now, it's the time back to EARTH.</h1>
      <p >  BOY and SUMMER on the way back to EARTH.</p>
      <p> Summer says: " A BOY, I want to go home."</p>
      <p> Boy shout: "... Let's back to the Earth now..... yeahhhhhh</p>
      
    </div>
    <div>
    <img src={Pod7} className='img' alt='' />
    </div>
  </div>
  )
}

export default Earth;
