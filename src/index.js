import React from "react"
import ReactDOM from 'react-dom'
import "./assets/style.css"
import { Component } from 'react'
import quizService from "./quizService";

class Quiz extends Component {
    render() {
        return (
            <div className="container">
                <div className="title">Quiz</div>
            </div>
        );
    }
}

state = {
    questionBank: []
};

ReactDOM.render(<Quiz />, document.getElementById("root"))
