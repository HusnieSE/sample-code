import React, { Component } from 'react';
import './App.css';
import VisibleHeader from './components/header';
import VisibleContainer from './components/container';

class App extends Component {
  render() {
    return (
      <div className="App">
      <VisibleHeader />
      <VisibleContainer />
      </div>
    );
  }
}

export default App;
