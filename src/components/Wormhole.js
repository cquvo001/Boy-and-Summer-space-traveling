import React from 'react'
import './VideoStyles.css';
import WormholeVideo from '../assets/Wormhole.mp4';
import Pod9 from '../assets/Boy Summer 9.PNG';


const Wormhole = () => {
  return (
    <div className='hero'>
    <video autoPlay loop muted id='video'>
      <source src={WormholeVideo} type='video/mp4' />
    </video>

    <div>
      <h1 >Wormhole is really interesting, right? Let's have a look Boy and Summer.</h1>
      <p >  SUMMER told: " I want to look inside a wormhole".</p>
      <p > BOY replied: " Me too... it sounds great. Can you see anything inside..."</p>
     
    </div>
    <div>
    <img src={Pod9} className='img' alt='' />
    </div>
  </div>
  )
}

export default Wormhole;
