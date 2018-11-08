import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {

    let min = (x,y) => {
      if(x > y) {
        console.log(y)
      } else if(x < y) {
        console.log(x)
      } else {
        console.log(x,y)
      }
    }
    min(3, 2)

    let isEven = (x) => {
      if(x === 0) {
        console.log("Even!", x)
      } else if (x === 1) {
        console.log("Odd", x)
      } else {
        return isEven(x - 2);
      }
    }
    // console.log(x)
    isEven(50);
    

isEven(50)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
