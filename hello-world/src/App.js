//import React from 'react';
import React, { Component } from 'react';
// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import { WelcomeNamed } from './components/Greet';
import Welcome  from './components/Welcome';
import Hello from './components/Hello';

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
        <WelcomeNamed/>
        <Hello/>
        </div>
      );
  }
}

export default App;
