
import React from 'react';
import QuestionsList from './QuestionsList.jsx';
import Question from './Question.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      loadMore: false
    }
    this.fetchQuestions = this.fetchQuestions.bind(this)
    this.loadMoreQuestions= this.loadMoreQuestions.bind(this)
  }
  fetchQuestions() {
    axios.get("/questions").then((result) => {
      console.log(result.data.results)
      this.setState({
        questions: result.data.results
      })
    })
  }
  componentDidMount() {
    this.fetchQuestions()
  }
  loadMoreQuestions() {
    this.setState({
      loadMore: true
    })
  }
  
  render() {
    return (
      <div>
       {!this.state.loadMore? <QuestionsList questions={this.state.questions.slice(0,4) } handleClick={this.loadMoreQuestions} />: <QuestionsList questions={this.state.questions} handleClick={this.loadMoreQuestions}/>}
       
      </div>
      
    )
  }
}
export default App