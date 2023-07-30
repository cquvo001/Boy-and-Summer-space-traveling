import React from 'react';
import './VideoStyles.css';
import MarsVideo from '../assets/mars.mp4';
import Pod from '../assets/Boy Summer 1.PNG';


const Mars = () => {
  return (
    <div className='hero'>
    <video autoPlay loop muted id='video'>
      <source src={MarsVideo} type='video/mp4' />
    </video>

    <div>
      <h1 >Welcome to MARS</h1>
      <p >  BOY and SUMMER on MARS.</p>
      <p> Summer says: " I will fly to Mars"</p>
      <p> Boy says: " Yes, ofcourse, you can fly with Dragon shuttle for sure... but let's wait until... </p>
      <p> 2000 years.... latter... "</p>
    </div>
    <div>
    <img src={Pod} className='img' alt='' />
    </div>
  </div>
  )
}

export default Mars;
