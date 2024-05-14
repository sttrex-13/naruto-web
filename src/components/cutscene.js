import React from 'react';
import '../styles/cutscene.css'

const Cutscene = ({ content, onNext }) => {
  return (
    <div className="cutscene" onClick={onNext}>
      <h2>{content}</h2>
    </div>
  );
};

export default Cutscene;