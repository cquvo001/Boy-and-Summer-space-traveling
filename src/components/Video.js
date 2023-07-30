import React from 'react';
import {Link} from 'react-router-dom'
import './VideoStyles.css';
import spaceVideo from '../assets/Luna.mp4';
import Pod0 from '../assets/Boy Summer 0.PNG';

const Video = () => {
  return (
    <div className='hero'>
      <video autoPlay loop muted id='video'>
        <source src={spaceVideo} type='video/mp4' />
      </video>
      <div>
        <h1 >Galaxy.Travel</h1>
        <p >BOY & SUMMER space travel.</p>
        <div className='content'>
            <Link to='/mars' className='btn'> MARS</Link>
            <Link to= '/moon' className='btn btn-light'>MOON</Link>
            <Link to= '/sun' className='btn'>SUN</Link>
            <Link to= '/wormhole' className='btn btn-light'>WORMHOLE</Link>
            <Link to= '/earth' className='btn btn-light'>EARTH</Link>
        </div>
        <div>
    <img src={Pod0} className='img' alt='' />
    </div>

      </div>
    </div>
  )
}

export default Video
