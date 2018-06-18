import React, { Component } from 'react';
import './App.css';
import Menu from '../Menu'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        
        <Menu />
      </div>
    );
  }
}

export default App;
