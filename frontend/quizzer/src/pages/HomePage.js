import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const code = e.target.elements.code.value;
    // Add logic to verify the code or any other form submission logic here
    if (code) {
      navigate('/existing-quiz'); // Navigate to the existing quiz page
    }
  };

  return (
    <div className='general-div'>
      <form onSubmit={handleSubmit}>
        <div className='main-form'>
          <label className='form-label'>
            Enter quiz code to join:
            <input type="text" name="code" />
          </label>
          <input className='form-input' type="submit" value="Submit" />
        </div>
      </form>
      <Link to="/new-quiz">
        <button className='general-button'>New Quiz</button>
      </Link>
      <Link to="/login">
        <button className='general-button'>Login</button>
      </Link>
    </div>
  );
};

export default HomePage;


