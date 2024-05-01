import React from 'react';
import '../styles/landing.css';
import logo from'../images/logo_akatsuki.png'
const Landing = ({ onNextStep }) => {
  return (
    <div className="landing">
      <div className='logo-text'>
        <img src={logo}/>
        <h1>Akatsuki</h1>
      </div>
      <button onClick={onNextStep} className="btn-next">Next</button>
    </div>
  );
};

export default Landing;
