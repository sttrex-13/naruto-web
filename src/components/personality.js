import React, { useState } from 'react';
import '../styles/personality.css';

const Personality = ({ character, attributes, onPlayAgain }) => {
  const [topic, setTopic] = useState('');
  const [detail, setDetail] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const onClickShowDetail = (topic, detail) => {
    setTopic(topic);
    setDetail(detail);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className={`personality`}>
      <div className={`body ${isOpen ? 'modal-open' : ''}`}>
      <h1>CHARACTER</h1>
      <div className='character'>
        <img src={character.image} alt={character.name} />
        <h3>{character.name}</h3>
      </div>
      <div className="attributes">
        {character.personality.traits.map((attr, index) => (
          <div key={index} className="attribute" onClick={() => onClickShowDetail(attr.trait_name, attr.description)}>
            <h4>{attr.trait_name}</h4>
          </div>
        ))}
      </div>
      <button onClick={onPlayAgain} className='btn-playagain'>Summary</button>
      </div>
      {isOpen && (
        <div className='modal-attributes'>
          <div className='background'>
            <div className='close' onClick={closeModal}>X</div>
            <h1>{topic}</h1>
            <hr style={{ width: "80%" }} />
            <h2>{detail}</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Personality;
