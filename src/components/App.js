import React,{Component} from 'react';
import {Provider} from 'react-redux';
import {configureStore} from '../store';
import '../index.css';
import Main from './main';

import {BrowserRouter as Router} from 'react-router-dom';

const store=configureStore();

class App extends Component{
  render(){
    return(
  <Provider store={store}>
    <Router>
      <div>
        <Main/>
        
      </div>
    </Router>
  </Provider>
  )
  }
}

export default App;
