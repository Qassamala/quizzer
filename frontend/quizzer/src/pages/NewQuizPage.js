// src/pages/NewQuizPage.js
import React, { useState } from 'react';

const NewQuizPage = () => {
  const [quizTitle, setQuizTitle] = useState('');

  const handleTitleChange = (e) => {
    setQuizTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to start a new quiz (e.g., API call to backend)
    console.log('Starting new quiz with title:', quizTitle);
  };

  return (
    <div>
      <h2>Start a New Quiz</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Quiz Title:
          <input type="text" value={quizTitle} onChange={handleTitleChange} required />
        </label>
        <button type="submit">Start Quiz</button>
      </form>
    </div>
  );
};

export default NewQuizPage;
