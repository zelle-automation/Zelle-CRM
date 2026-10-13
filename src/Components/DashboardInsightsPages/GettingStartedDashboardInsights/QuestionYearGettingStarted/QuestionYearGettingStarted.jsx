import React, { useState, useEffect } from 'react';
import './QuestionYearGettingStarted.css';

function QuestionYearGettingStarted({ onComplete }) {
  const [answers, setAnswers] = useState({});

  const questions = [
    { id: 'q1', text: "Is your business a registered legal entity?" },
    { id: 'q2', text: "Do you manage physical inventory or stock?" },
    { id: 'q3', text: "Do you provide services to international clients?" },
    { id: 'q4', text: "Is your business currently generating revenue?" },
    { id: 'q5', text: "Do you have a dedicated team for operations?" }
  ];

  const handleSelect = (qId, val) => {
    setAnswers({ ...answers, [qId]: val });
  };

  useEffect(() => {
    if (Object.keys(answers).length === questions.length) {
      onComplete();
    }
  }, [answers, questions.length, onComplete]);

  return (
    <div className='QuestionYearGettingStarted_Main'>
      <div className='QuestionnaireContainer_ZELLEONE'>
        
        <div className='QuestionHeader_ZELLEONE'>
          <h2>Quick Questionnaire</h2>
          <p>Help us setup your profile by answering these simple questions.</p>
        </div>

        <div className='QuestionList_ZELLEONE'>
          {questions.map((q) => (
            <div key={q.id} className='QuestionItem_ZELLEONE'>
              <p className='QuestionText_ZELLEONE'>{q.text}</p>
              <div className='OptionGroup_ZELLEONE'>
                <button 
                  className={`OptionBtn_ZELLEONE ${answers[q.id] === 'yes' ? 'Active_ZELLEONE' : ''}`}
                  onClick={() => handleSelect(q.id, 'yes')}
                >
                  Yes
                </button>
                <button 
                  className={`OptionBtn_ZELLEONE ${answers[q.id] === 'no' ? 'Active_ZELLEONE' : ''}`}
                  onClick={() => handleSelect(q.id, 'no')}
                >
                  No
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default QuestionYearGettingStarted;