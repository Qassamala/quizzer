// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NewQuizPage from './pages/NewQuizPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new-quiz" element={<NewQuizPage/>} />
        <Route path="/login" element={<LoginPage/>} />
      </Routes>
    </Router>
  );
}

export default App;

