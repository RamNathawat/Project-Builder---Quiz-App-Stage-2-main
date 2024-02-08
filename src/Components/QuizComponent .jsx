import React, { useState } from 'react';
import quizQuestion from '../resources/quizQuestion.json';
import { Link, useNavigate } from 'react-router-dom';

export default function QuizComponent(props) {
  const navigate = useNavigate()


  const next = () => {
    if (props.ind === 14) {
      navigate('/resultPage')
    } else {
      props.setInd((prevInd) => prevInd + 1);
    }
  };

  const previous = () => {
    if (props.ind === 0) {
      alert('There is no previous question!');
      props.setInd(0);
    } else {
      props.setInd((prevInd) => prevInd - 1);
    }
  };

  const quit = () => {
    alert('Are you sure you want to quit ..?');
    props.setInd(0);
    props.setScore(0);
  };

  const answers = (e) => {
    const selectedOption = e.target.textContent;
    const correctAnswer = quizQuestion[props.ind].answer;

    if (selectedOption === correctAnswer) {
      props.setScore((prevScore) => prevScore + 1);
      alert("Correct answers")
    }
    else{
      alert("Wrong answer")
      props.setWrongans((prevScore)=> prevScore+1)
    }
    console.log(props.score)
    next();
  };

  return (
    <div className="innerDiv">
      <h2 className="questionhead">Question</h2>
      <p className="qnNo">{props.ind + 1} of 15 </p>
      <p className="question">{quizQuestion[props.ind].question}</p>
      <div className="buttons" onClick={answers}>
        <button>{quizQuestion[props.ind].optionA}</button>
        <button>{quizQuestion[props.ind].optionB}</button>
        <button>{quizQuestion[props.ind].optionC}</button>
        <button>{quizQuestion[props.ind].optionD}</button>
      </div>
      <div className="downbuttons">
        <button className="previous buttonn" onClick={previous}>
          Previous
        </button>
        <button className="next buttonn" onClick={next}>
          Next
        </button>
        <button className="quit buttonn" onClick={quit}>
          Quit
        </button>
        <Link to="/resultPage">
          <button className="finish buttonn">
            Finish
          </button>
        </Link>
      </div>
    </div>
  );
}
