import React from 'react';
import Question from './Question.jsx';
import AddQuestion from './AddQuestion.jsx';
class QuestionsList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show:false
        }
    }
showButton(){
    this.setState({show:true})
}

    render() {
        return (
            <div>
            <div className='questionList'>
                {this.props.questions.map((question) => {
                    return < Question questions={question} key={question.question_id} fetch={this.props.fetch} />
                })}
                
            </div>
            <div style={{display: 'flex'}}>
                <button style={{marginLeft:"95px"}} className="buttons" onClick={() => { this.props.handleClick() }}> MORE ANSWERED QUESTIONS</button>
               <AddQuestion />
                </div>
               
            </div>
        )
    }
}
export default QuestionsList



