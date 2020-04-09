//import React from 'react';
import React, { Component } from 'react';
// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import { WelcomeNamed } from './components/Greet';
import Welcome  from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';

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
      <Message/>
      {/*</Greet name="Benjamin Sharia" heroName="M6tem"> 
        <p> This is a child props </p>
      </Greet>
      <Greet name="John" heroName="Dalai">
        <button>Action</button>
      </Greet>
      <Greet name="Doe" heroName="Shazam"/>
      <Greet name="Riley" heroName="Beasty"/>

      <Welcome name="John" heroName="Dalai"/>
      <Welcome name="Doe" heroName="Shazam"/>

      <WelcomeNamed/>
      <Hello/>
    */}
    </div>
    );
  }
}

export default App;
