import React from 'react';
import { Link } from 'react-router-dom';
import './components.css';

export default function HomeComponent() {
  return (
    <div className="Body">
      <h2 className="Quizapp">Quiz App</h2>
      <Link to="/quizPage">
        <button className="PlayButton">Play</button>
      </Link>
    </div>
  );
}
