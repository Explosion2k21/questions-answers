import React from 'react'
import Question from './Question.jsx'
import { connect } from 'react-redux';
import { fetchQuestions , loadMore} from '../redux/actions'

const url ="https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/qa/questions?product_id=11005"
const mapStateToProps = (state) => {
    return ({
        questions: state.filtredQuestions
    })

}
const mapDispatchToProps = (dispatch) => {
    return ({
        fetchQuestions: (url) => dispatch(fetchQuestions(url)),
        loadMore: ()=> dispatch(loadMore())

    })
}
class QuestionsList extends React.Component {
    componentDidMount() {
        this.props.fetchQuestions(url)
        
    }
    render() {
        return (
            <div className='questionList'>
                {this.props.questions.map((question) => {
                    return < Question questions={question} key={question.question_id} />
                })}
                <button onClick={()=>{this.props.loadMore()}}> MORE ANSWERED QUESTIONS</button>
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(QuestionsList)




