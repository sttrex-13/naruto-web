import React, { useState, useEffect } from 'react';
import './App.css';
import Landing from './components/landing';
import SelectCharacter from './components/selectCharacter';
import Cutscene from './components/cutscene';
import Question from './components/question';
import Personality from './components/personality';

const App = () => {
  const [step, setStep] = useState(0);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [contentIndex, setContentIndex] = useState(0);

  const nextStep = () => setStep((prev) => prev + 1);

  const handleSelectCharacter = (character) => {
    setSelectedCharacter(character);
    setContentIndex(0);
    nextStep();
  };

  const nextContent = () => setContentIndex((prevIndex) => prevIndex + 1);

  const playAgain = () => {setStep(0)}

  const renderContent = () => {
    if (step === 2 && selectedCharacter && selectedCharacter.sequence) {
      const content = selectedCharacter.sequence[contentIndex];
      if (!content) return <Personality character={selectedCharacter} onPlayAgain={playAgain}/>;

      if (content.type === 'cutscene') {
        return <Cutscene content={content.content} onNext={nextContent} />;
      }

      if (content.type === 'question') {
        return (
          <Question
            question={content.content.question}
            options={content.content.options}
            collect={content.collect}
            onAnswer={nextContent}
          />
        );
      }
    }
    return null;
  };

  return (
    <div className="App">
      {step === 0 && <Landing onNextStep={nextStep} />}
      {step === 1 && <SelectCharacter onSelectCharacter={handleSelectCharacter} />}
      {step === 2 && renderContent()}
    </div>
  );
};

export default App;
