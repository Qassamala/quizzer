import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className='general-div'>
      <Link to="/new-quiz">
        <button className='general-button'>New Quiz</button>
      </Link>
      <form>
        <label>
          Enter quiz code to join:
          <input type="text" name="code" />
        </label>
        <Link to="/existing-quiz">
        <input type="submit" value="Submit" />
        </Link>
      </form>
      <Link to="/login">
        <button>Login</button>
      </Link>
    </div>
  );
};

export default HomePage;

