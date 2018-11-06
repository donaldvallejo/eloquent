import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    let chessboard = () => {
      let str = "";
      for (let i = 1; i <= 9; i++) {
        if (i % 2 === 0) 
          str += "#";
         else if (i % 1 === 0) 
          str += " ";
         else if (i === 9) 
          str += "/n";
        
        for (let i = 1; i <= 9; i++) {
          
          console.log(str);         
        }
      }  
    }
    chessboard();

    var size = 8; 

var board = "";

for (var y = 0; y < size; y++) {   
  for (var x = 0; x < size; x++) { 
    if ((x + y) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n";
}

console.log(board);


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
