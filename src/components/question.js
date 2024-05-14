import React, { useState, useEffect } from 'react';

const Question = ({ question, options, onAnswer }) => {
    console.log(question);
  const [answer, setAnswer] = useState('');

  const handleOptionClick = (option) => {
    setAnswer(option);
    onAnswer(option);
  };

  const handleSubmit = () => {
    onAnswer(answer);
  };

  useEffect(() => {
    setAnswer('');
  }, [question]); 

  return (
    <div className="question">
      <h2>{question}</h2>
      {options ? (
        options.map((option, index) => (
          <button key={index} onClick={() => handleOptionClick(option)}>
            {option}
          </button>
        ))
      ) : (
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
      )}
      {!options && <button onClick={handleSubmit}>Answer</button>}
    </div>
  );
};

export default Question;
