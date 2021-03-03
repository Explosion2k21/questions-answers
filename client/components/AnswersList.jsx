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
        axios.put(`http://localhost:3001/questions/updateAnswer/${id}`).then((res) => {
            console.log('res', res)
            this.setState({ bolean: false })
        })
        // calling the fetch function to update dinamically without refreshing the page
         this.props.fetch()
    }
    
  
     
    render() {
        return (
            <div className="answers-style">
                <div style={{marginLeft:"20px"}}>
                <p>A: {this.props.answers.body}</p>
                </div>
                <div className="images">
                    {this.props.answers.photos.map((elem, i)=>{
                        return <img style={{marginLeft: '20px', marginTop:'20px', marginBottom:'20px'}} className="image" src={elem} key={i}/>
                    })}
                </div>
           <div className="answers-details">
           <p style={{marginLeft:"20px"}} className="paragraph">by {this.props.answers.answerer_name},</p>
             <p style={{marginLeft:"10px"}} className="paragraph">{moment(this.props.answers.date).format('ll')} | </p>
             {this.state.bolean? <div><span style={{marginLeft:"10px"}} className="span"> Helpful? <a style={{marginLeft:"10px"}} href="#" className="help" onClick={() => { this.onSubmit(this.props.answers.id) }}>Yes({this.props.answers.helpfulness}) | </a> </span></div>:<div><span style={{marginLeft:"10px"}} className="span"> Helpful? <a href="#" className="help">Yes({this.props.answers.helpfulness}) | </a> </span></div>}
             <a style={{marginLeft:"10px"}} href="#" className="help">Report</a>
             
           </div>
           
            </div>
        )
    }
}
export default AnswersList