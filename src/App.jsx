import React from 'react';
import HomeComponent from './Components/HomeComponent '
import QuizComponent from './Components/QuizComponent ';
import ResultComponent from './Components/ResultComponent';
import { useState } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




export default function App() {

  const [score, setScore] = useState(0);
  const [ind, setInd] = useState(0);
  const [wrongAns, setWrongans] = useState(0)


  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/quizPage" element={<QuizComponent  score={score} setScore = {setScore} ind = {ind} setInd={setInd} wrongAns={wrongAns} setWrongans={setWrongans}/>} />
        <Route path="/resultPage" element={<ResultComponent score={score} setScore = {setScore}  ind = {ind} setInd={setInd} wrongAns={wrongAns} setWrongans={setWrongans}/>} />
      </Routes>
    </Router>
  );
}