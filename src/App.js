import React, { Component } from 'react';
import './App.css';
import Home from './components/Home'
import {Route, Switch} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">

          <Home />



      </div>
    );
  }
}

export default App;
