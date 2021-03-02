import React from 'react'
import axios from 'axios';
import AnswersList from './AnswersList.jsx'


class Question extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bolean: true,
            load: false
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.loadMoreAnswers= this.loadMoreAnswers.bind(this)

    }
    // this function to update the count of helpfulness for each question
    onSubmit(question_id) {
        console.log(question_id)
        axios.put(`/update/${question_id}`).then((res) => {
            console.log('res', res)
            this.setState({ bolean: false })
        })
        // calling the fetch function to update dinamically without refreshing the page
        this.props.fetch()
    }
    // this function is to load the remaining answers
    loadMoreAnswers(){
        this.setState({
            load: true
        })
    }

    render() {
        // pushing the answers in an array to be able to map over them
        let answers=[]
        for(let key in this.props.questions.answers){
            answers.push(this.props.questions.answers[key]) 
        }
        answers.sort(function(a, b){return b.helpfulness -a.helpfulness})
        const loadMore= this.state.load
        return (<div>
        <div className='question'>
            <h2>Q: {this.props.questions.question_body}</h2>
            {this.state.bolean ? <div><span className="span"> Helpful? <a style={{marginLeft:"10px"}} href="#" className="help" onClick={() => { this.onSubmit(this.props.questions.question_id) }}>Yes({this.props.questions.question_helpfulness})</a></span></div> :
                <div><span className="span"> Helpful? <a style={{marginLeft:"10px"}} href="#" className="help" >Yes({this.props.questions.question_helpfulness})</a></span></div>}
            
        </div>
        <div className='answers'>
            {!loadMore? answers.slice(0,2).map((answer)=>{
           return <AnswersList fetch={this.props.fetch} answers={answer} key={answer.id}/>
        }):  answers.map((answer)=>{
            return <AnswersList fetch={this.props.fetch} answers={answer} key={answer.id}/>
         })}
        </div>
        <div>
           {!this.state.load&&answers.length<3?null :<a style={{marginLeft:"20px"}} className="anchor" onClick={() => { this.loadMoreAnswers() }}> LOAD MORE ANSWERS</a>}
            </div>
        </div>)
    }
}

export default Question
