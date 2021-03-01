
import React from 'react';
import Question from './Question.jsx';

function QuestionsList({ questions , handleClick}) {
  
    return (
        <div className='questionList'>
            {questions.map((question) => {
                return < Question questions={question} key={question.question_id} />
            })}
            <button onClick={()=>{handleClick()}}> MORE ANSWERED QUESTIONS</button>
        </div>
    )
}

export default QuestionsList



