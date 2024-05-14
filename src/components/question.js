import React, { useState, useEffect } from 'react';
import "../styles/question.css"

const Question = ({ question, options, onAnswer }) => {
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
      <div className='question-body'>
      {options ? (
        options.map((option, index) => (
          <button key={index} onClick={() => handleOptionClick(option)} className='option'>
            {option}
          </button>
        ))
      ) : (
        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className='text-box'
        ></textarea>
      )}
      {!options && <button onClick={handleSubmit} className='btn-ans'>Answer</button>}
      </div>
    </div>
  );
};

export default Question;
