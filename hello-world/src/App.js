//import React from 'react';
import React, { Component } from 'react';
// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';
// eslint-disable-next-line
import Greet from './components/Greet';
// eslint-disable-next-line
import { WelcomeNamed } from './components/Greet';
// eslint-disable-next-line
import Welcome  from './components/Welcome';
// eslint-disable-next-line
import Hello from './components/Hello';
// eslint-disable-next-line
import Message from './components/Message';
// eslint-disable-next-line
import Counter from "./components/Counter";
// eslint-disable-next-line
import FunctionClick from "./components/FunctionClick";
// eslint-disable-next-line
import ClassClick from "./components/ClassClick";
// eslint-disable-next-line
import EventBind from "./components/EventBind";

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

      <EventBind/>

     {/* <FunctionClick/>
      <ClassClick/>

      <Counter/>
      <Message/>
      <Hello/
      <Greet name="Benjamin Sharia" heroName="M6tem"> 
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
      */}
      
    
    </div>
    );
  }
}

export default App;
