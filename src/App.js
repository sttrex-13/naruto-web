import React, { useState, useEffect } from 'react';
import './App.css';
import Landing from './components/landing';
import SelectCharacter from './components/selectCharacter';

const App = () => {
  const [step, setStep] = useState(0);
  const [hideLanding, setHideLanding] = useState(false);

  useEffect(() => {
    if (step !== 0) {
      setHideLanding(true);
    }
  }, [step]);

  const nextStep = () => {
    setStep(step + 1);
  };

  return (
    <div className="App">
      <div className={`transition ${hideLanding ? 'hidden' : ''}`}>
        <Landing onNextStep={nextStep} />
      </div>
      <div className={`transition ${step !== 1 ? 'hidden' : ''}`}>
        <SelectCharacter onNextStep={nextStep} />
      </div>
      <div className={`transition ${step !== 2 ? 'hidden' : ''} bg-gif`} onClick={nextStep}> CUTSCENE </div>
      <div className={`transition ${step !== 3 ? 'hidden' : ''}`}> Questions 1 </div>
      <div className={`transition ${step !== 4 ? 'hidden' : ''}`}>Text 2</div>
      <div className={`transition ${step !== 5 ? 'hidden' : ''}`}>Question 2</div>
      <button onClick={nextStep} className='btn-next' style={{marginTop: "2rem", width:"50%", display: step < 3? "none" : "" }}>Next</button>
    </div>
  );
};

export default App;
