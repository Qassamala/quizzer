import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Quiz App</h1>
      <Link to="/new-quiz">
        <button>Start a New Quiz</button>
      </Link>
      <Link to="/existing-quiz">
        <button>Enter an Existing Quiz</button>
      </Link>
      <Link to="/login">
        <button>Login</button>
      </Link>
    </div>
  );
};

export default HomePage;

