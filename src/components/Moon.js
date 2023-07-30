import React from 'react'
import './VideoStyles.css';
import MoonVideo from '../assets/moon2.mov';
import Pod2 from '../assets/Boy Summer 2.PNG';


const Moon = () => {
  return (
    <div className='hero'>
    <video autoPlay loop muted id='video'>
      <source src={MoonVideo} type='video/mp4' />
    </video>

    <div>
      <h1 >Welcome to the MOON</h1>
      <p >  BOY and SUMMER is on the Moon now.</p>
      <p >  SUMMER said: " Hey A Boy. Let's call to Mr. Neil Amstrong".</p>
      <p >  BOY shouted: " Hey Mr. Am...Strong, you are not the only one person on the moon... we are here ...</p>
     
    </div>
    <div>
    <img src={Pod2} className='img' alt='' />
    </div>
  </div>
  )
}

export default Moon
