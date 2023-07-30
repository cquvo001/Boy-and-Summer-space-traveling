import React from 'react'
import './VideoStyles.css';
import SunVideo from '../assets/Sun.mov';
import Pod7 from '../assets/Boy Summer 7.PNG';


const Moon = () => {
  return (
    <div className='hero'>
    <video autoPlay loop muted id='video'>
      <source src={SunVideo} type='video/mp4' />
    </video>

    <div>
      <h1 >We will flight to the Sun.</h1>
      <p >  SUMMER asked: " Hey A Boy. Shell we fly to the Sun?".</p>
      <p > BOY replied: " Ofourse, the Sun is very interesing to explore...</p>
      <p> ... we may ask Mr. Elon Musk for help, then we can lend his Dragon Shuttle to flight that far ...</p>
      <p> Summer shouted out:"Yessss.... it's a really good idea...yahoooooooooooooo...."</p>
     
    </div>
    <div>
    <img src={Pod7} className='img' alt='' />
    </div>
  </div>
  )
}

export default Moon
