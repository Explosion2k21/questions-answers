import React from 'react';
import QuestionsList from './QuestionsList.jsx';
import { Provider } from 'react-redux';
import store from '../redux/store';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div >
          <QuestionsList />

        </div>
      </Provider>
    );
  }
}