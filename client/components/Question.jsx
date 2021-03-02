import React from 'react'
import axios from 'axios';
import AnswersList from './AnswersList.jsx'


class Question extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            boli: true
        }
        this.onSubmit = this.onSubmit.bind(this)
        // this.fetchAnswers= this.fetchAnswers.bind(this)

    }
    // fetchAnswers(question_id) {
    //     console.log('aaaa', question_id)
    //     axios.get(`/answers/${question_id}`).then((result) => {
    //       console.log('aaaa', result)
    //       // this.setState({
    //       //   answers: result.data.results
    //       // })
    //     })
    //   }
    //   componentDidMount() {
    //     this.fetchAnswers()
    //   }
    onSubmit(question_id) {
        console.log(question_id)
        axios.put(`/update/${question_id}`).then((res) => {
            console.log('res', res)
            this.setState({ boli: false })
        })
        this.props.fetch()
    }

    render() {
        // let answers=[]
        // for(let key in this.props.questions.answers){
        //     answers.push(this.props.questions.answers[key])
        // }
        return (
        <div className='question'>
            <h2>Q: {this.props.questions.question_body}</h2>
            {this.state.boli ? <div><span > Helpful? <a className="h" onClick={() => { this.onSubmit(this.props.questions.question_id) }}>Yes({this.props.questions.question_helpfulness})</a></span></div> :
                <div><span > Helpful? <a className="haa" >Yes({this.props.questions.question_helpfulness})</a></span></div>}
                 {/* {answers.map((answer, index)=>{
                    return <AnswersList answers={answer} key={index}/>
                 })} */}
            
        </div>)
    }
}

export default Question
