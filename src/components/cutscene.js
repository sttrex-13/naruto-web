import React from 'react';

const Cutscene = ({ image, onNext }) => {
  return (
    <div className="cutscene">
      <h2>Cutscene</h2>
      <img src={image} alt="Cutscene" />
      <button onClick={onNext}>Next</button>
    </div>
  );
};

export default Cutscene;