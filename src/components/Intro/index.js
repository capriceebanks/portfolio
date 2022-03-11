import React from 'react';
import './style.css';
import Pic from './Pic.jpeg';
import Stack from '../Stack';

const Intro = () => {
return(
<>
<div id='intro' >
  <div className='text'>
    <h1>Hi, I'm <br /><span>Caprice Ebanks!</span></h1>
    <p>I'm a trainee full-stack web developer based in London. </p>
    <Stack />
  </div>
  <img id='selfie' src={Pic} />
</div>
</>
)};
export default Intro;
