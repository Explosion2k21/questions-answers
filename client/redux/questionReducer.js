
const intialState = { questions: [] , filtredQuestions:[]}

const questionsReducer = (state = intialState, action) => {
    switch (action.type) {
        case "GET_QUESTIONS":
           return Object.assign({}, state, {
                questions: action.payload,
                filtredQuestions:action.payload.slice(0,4)
              })
        case "LOAD_MORE_QUESTIONS":
            return Object.assign({}, state, {
                filtredQuestions:state.questions
              })

        default:
            return state;
    }
}
export default questionsReducer
