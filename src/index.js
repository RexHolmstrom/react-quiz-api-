import React from "react"
import ReactDOM from 'react-dom'
import "./assets/style.css"
import { Component } from 'react'
import quizService from "./quizService";
import QuestionBox from '../src/components/Questionbox'

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
                {this.state.questionBank.length > 0 && this.state.questionBank.map(({ question, answer, correct, questionId }) => (
                    <QuestionBox
                        question={question}
                        options={answer}
                        key={questionId}
                    />
                ))}
            </div>
        );
    }
}
ReactDOM.render(<Quiz />, document.getElementById("root"))
