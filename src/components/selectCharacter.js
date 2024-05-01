import React, { useState, useEffect } from 'react';
import '../styles/selectCharacter.css';
import next from '../images/next.png';

const SelectCharacter = ({ onNextStep }) => {
  const [characters, setCharacters] = useState([]);
  const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch('/json/character.json');
        if (!response.ok) {
          throw new Error('Failed to fetch characters');
        }
        const data = await response.json();
        setCharacters(data);
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };

    fetchCharacters();
  }, []);

  const nextCharacter = () => {
    setCurrentCharacterIndex((prevIndex) =>
      prevIndex === characters.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousCharacter = () => {
    setCurrentCharacterIndex((prevIndex) =>
      prevIndex === 0 ? characters.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="select-character">
      <h1>WHO DO YOU WHAT TO TALK WITH?</h1>
      <div className="select-section">
        <img src={next} className="next-logo" onClick={previousCharacter} />
        <div className='character'>
          <img src={characters[currentCharacterIndex]?.image} />
        </div>
        <img src={next} className="previous-logo" onClick={nextCharacter} />
      </div>
      <h2>{characters[currentCharacterIndex]?.name}</h2>
      <p><b>Side Story:</b> {characters[currentCharacterIndex]?.sideStory}</p>
      <button onClick={onNextStep} className="btn-select">
        Select
      </button>
    </div>
  );
};

export default SelectCharacter;
