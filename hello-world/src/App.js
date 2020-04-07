//import React from 'react';
import React, { Component } from 'react';
// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import { Welcome } from './components/Greet';

// function App() {
//   return (
//     <div className="App">
//       <Greet/>
//     </div>
//   );
// }

class App extends Component{
  render(){
    return (
        <div className="App">
        <Greet/>
        <Welcome/>
        </div>
      );
  }
}

export default App;
