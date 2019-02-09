import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Sam's Portfolio Page
          </p>
          <a
            className="App-link"
            href="https://samjs.tk"
            target="_blank"
            rel="noopener noreferrer"
          >
            Home
          </a>
        </header>
      </div>
    );
  }
}

export default App;
