import React from "react"
import ReactDOM from 'react-dom'
import "./assets/style.css"
import { Component } from 'react'
import quizService from "./quizService";

class Quiz extends Component {
    state = {
        questionBank: []
    };

    getQuestion = () => {
        quizService().then(question => {
            this.setState({
                questionBank: question
            });
        });
    };
    componentDidMount() {
        this.getQuestion();
    }

    render() {
        return (
            <div className="container">
                <div className="title">Quiz</div>
            </div>
        );
    }
}
ReactDOM.render(<Quiz />, document.getElementById("root"))
