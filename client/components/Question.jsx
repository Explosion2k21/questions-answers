import React from 'react'

function Question({ questions}) {
    return (
        <div className='question'>
            <h2>Q: {questions.question_body}</h2>
            <span > Helpful? <a href="#">Yes({questions.question_helpfulness})</a></span>
        </div>
    )
}

export default Question
