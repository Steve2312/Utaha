import React from "react";
import ReactDOM from 'react-dom';
import Practice from "../screens/Practice";

function Card({data, correct}) {
    return (
        <div className="card">
            <div className="index" style={{backgroundColor: correct ? "var(--correct)" : "var(--incorrect)"}}><i className={correct ? "fas fa-check" : "fas fa-times"}></i></div>
            <div className="left">
                <div className="metadata">
                    <span className="title">{data.questions.join("; ")}</span>
                    <span className="text">{data.answers.join("; ")}</span>
                </div>
            </div>

            <div className="right">
                <div className="metadata">
                    <span className="subject">Your Answer:</span>
                    <span className="text">{data.userinput}</span>
                </div>
            </div>
        </div>
    );
}

export default Card;