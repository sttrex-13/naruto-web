import React from 'react';
import '../styles/cutscene.css'

const Cutscene = ({ content, onNext }) => {
  return (
    <div className="cutscene" onClick={onNext}>
      <h2>{content}</h2>
      <div className='desc-blink'>
      <p>Click to continue</p>
      </div>
    </div>
  );
};

export default Cutscene;