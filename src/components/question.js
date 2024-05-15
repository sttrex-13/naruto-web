import React, { useState, useEffect } from 'react';
import "../styles/question.css"
import { setCookie } from '../cookie';

const Question = ({ question, options, onAnswer , collect }) => {
  const [answer, setAnswer] = useState('');

  const handleOptionClick = (option) => {
    setAnswer(option);
    if(collect){
      setCookie("like", option);
    }
    onAnswer(option);
  };

  const handleSubmit = () => {
    if (collect) {
      setCookie("reason", answer);
    }
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
        {!options && (
          <button onClick={handleSubmit} className='btn-ans' disabled={!answer.trim()}>
            Answer
          </button>
        )}
      </div>
    </div>
  );
};

export default Question;
