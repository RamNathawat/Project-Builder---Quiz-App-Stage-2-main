import React from "react";
import { Link } from "react-router-dom";
import "./components.css";

export default function ResultComponent(props) {

  const correctAns = props.score
  const attemptedQns = props.ind

  const playAgain = () => {
    props.setScore(0);
    props.setInd(0);
    props.wrongAns(0)
    attemptedQns = 0
  }


  return (
    <div className="Main">
      <div className="body">
        <h2 className="resultHead">Result</h2>
        <div className="InnerDiv">
          <h2 className="phrase">You need more practice !</h2>
          <h1 className="score">Your Score is {props.score}</h1>
          <div className="cell">
            <p>Total number of questions</p>
            <p>15</p>
          </div>
          <div className="cell">
            <p>Number of attembted questions</p>
            <p>{attemptedQns}</p>
          </div>
          <div className="cell">
            <p>Number of correct answers</p>
            <p>{correctAns}</p>
          </div>
          <div className="cell">
            <p>Number of wrong answers</p>
            <p>{props.wrongAns}</p>
          </div>
        </div>
        <div className="twobuttons">
          <Link to="/quizPage">
            <button className="playAgain" onClick={playAgain}>
              Play Again
            </button>
          </Link>
          <Link to="/">
            <button className="backToHome" onClick={playAgain} >
              Back To Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
