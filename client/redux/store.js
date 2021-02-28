import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import questionsReducer from './questionReducer';



 const store = createStore(questionsReducer, applyMiddleware(thunk))

 export default store