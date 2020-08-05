import React from 'react';

const Questionbox = ({ question, options }) => {
    return (
        <div className="questionBox">
            <div className="question">{question}</div>
        </div>
    )
}

export default Questionbox;