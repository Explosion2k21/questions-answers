
import React from 'react';
import QuestionsList from './QuestionsList.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      product_id:"",
      loadMore: false
    }
    this.fetchQuestions = this.fetchQuestions.bind(this)
    this.loadMoreQuestions = this.loadMoreQuestions.bind(this)
    
  }
  //this is a function that fetches questions data using axios
  fetchQuestions() {
    axios.get("/questions").then((result) => {
      console.log(result.data)
      this.setState({
        questions: result.data.results,
        product_id: result.data.product_id
      })
    })
  }
  
  // calling the function that fetches the questions data in componentDidMount that when the page load show up all the questions
  componentDidMount() {
    this.fetchQuestions()
  }
  // this function is to load the remaining questions
  loadMoreQuestions() {
    this.setState({
      loadMore: true
    })
  }


  render() {
    return (
      <div>
        <h1 className='header'>QUESTIONS & ANSWERS</h1>
        {!this.state.loadMore ? <QuestionsList product_id={this.state.product_id} questions={this.state.questions.slice(0, 4)} handleClick={this.loadMoreQuestions} fetch={this.fetchQuestions} /> : <QuestionsList questions={this.state.questions} handleClick={this.loadMoreQuestions} fetch={this.fetchQuestions} />}

      </div>

    )
  }
}
export default App