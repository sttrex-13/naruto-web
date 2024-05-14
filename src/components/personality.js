import React from 'react';

const Personality = ({ character, attributes, onPlayAgain }) => {
  console.log(character);
  return (
    <div className="personality">
      <h2>CHARACTER</h2>
      <h3>{character.name}</h3>
      <div className='character'>
          <img src={character.image} alt={character.name} />
      </div>
      <h3>{character.personality.text}</h3>
      <div className="attributes">
        {character.personality.traits.map((attr, index) => (
          <div key={index} className="attribute">
            <h4>{attr.trait_name}</h4>
            <p>{attr.description}</p>
          </div>
        ))}
      </div>
      <button onClick={onPlayAgain}>Play Again</button>
    </div>
  );
};

export default Personality;
