import React from 'react';
import Question from './Question.jsx';
class QuestionsList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }


    render() {
        return (
            <div className='questionList'>
                {this.props.questions.map((question) => {
                    return < Question questions={question} key={question.question_id} fetch={this.props.fetch} />
                })}
                <button onClick={() => { this.props.handleClick() }}> MORE ANSWERED QUESTIONS</button>
                <button>ADD A QUESTION +</button>
            </div>
        )
    }
}
export default QuestionsList



