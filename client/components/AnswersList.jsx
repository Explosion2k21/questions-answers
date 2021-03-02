import React from 'react';
import moment from 'moment';
import axios from 'axios';

class AnswersList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            bolean: true
        }
        this.onSubmit= this.onSubmit.bind(this)
    }
    // this function to update the count of helpfulness for each answer
    onSubmit(id) {
        console.log(id)
        axios.put(`/updateAnswer/${id}`).then((res) => {
            console.log('res', res)
            this.setState({ bolean: false })
        })
        // calling the fetch function to update dinamically without refreshing the page
         this.props.fetch()
    }
    
  
     
    render() {
        return (
            <div className="answers-style">
                <div>
                <h4>A: {this.props.answers.body}</h4>
                </div>
           <div className="answers-details">
           <p>by {this.props.answers.answerer_name},</p>
             <p>{moment(this.props.answers.date).format('ll')} | </p>
             {this.state.bolean? <div><span > Helpful? <a className="help" onClick={() => { this.onSubmit(this.props.answers.id) }}>Yes({this.props.answers.helpfulness})</a> </span></div>:<div><span > Helpful? <a className="help">Yes({this.props.answers.helpfulness})</a> </span></div>}
             
           </div>
           
            </div>
        )
    }
}
export default AnswersList