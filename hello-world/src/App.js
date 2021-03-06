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
// eslint-disable-next-line
import ParentComponent from './components/ParentComponent';
// eslint-disable-next-line
import UserGreeting from './components/UserGreeting';
// eslint-disable-next-line
import NameList from './components/NameList';
// eslint-disable-next-line
import Stylesheet from './components/Stylesheet';
// eslint-disable-next-line
import Inline from './components/Inline';
// Regular css stylesheet import
import './appStyles.css';
// Module css stylesheet import
// eslint-disable-next-line
import styles from './appStyles.module.css';
// eslint-disable-next-line
import Form from './components/Form';
// eslint-disable-next-line
import LifeCycleA from './components/LifeCycleA';
// eslint-disable-next-line
import FragmentDemo from './components/FragmentDemo';
// eslint-disable-next-line
import Table from './components/Table';
// eslint-disable-next-line
import ParentComp from './components/ParentComp';
// eslint-disable-next-line
import RefsDemo from './components/RefsDemo';
// eslint-disable-next-line
import FocusInput from './components/FocusInput'
// eslint-disable-next-line
import FRParentInput from './components/FRParentInput';
// eslint-disable-next-line
import PortalDemo from './components/PortalDemo';
// eslint-disable-next-line
import Hero from './components/Hero';
// eslint-disable-next-line
import ErrorBoundary from './components/ErrorBoundary';
// eslint-disable-next-line
import ClickCounterTwo from './components/ClickCounterTwo';
// eslint-disable-next-line
import HoverCounterTwo from './components/HoverCounterTwo';
// eslint-disable-next-line
import User from './components/User';
// eslint-disable-next-line
import CounterRP from './components/CounterRP';
// eslint-disable-next-line
import ComponentC from './components/ComponentC'
// eslint-disable-next-line
import {UserProvider } from './components/userContext'
// eslint-disable-next-line
// eslint-disable-next-line
// eslint-disable-next-line
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
      <UserProvider value="Benjamin">
        <ComponentC />
      </UserProvider>
      {/*<CounterRP 
      render={(count, incrementCount) => ( 
        <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
      />
      <CounterRP 
      render={(count, incrementCount) => ( 
        <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )}
      />
      <ClickCounterTwo />
      <HoverCounterTwo />
      <User render={ (isLoggedIn) => isLoggedIn ? "Benjamin" : "Guest"} />
      

       <ErrorBoundary> <Hero heroName="Batman" /> </ErrorBoundary>
      <ErrorBoundary> <Hero heroName="John Wick" /> </ErrorBoundary>
      <ErrorBoundary> <Hero heroName="Joker" /> </ErrorBoundary>
      

      <PortalDemo/>
      <FRParentInput/>
      <FocusInput/>
      <RefsDemo />
      <ParentComp/>
      <FragmentDemo />
      <Table/>
      <LifeCycleA />
      <Form/>
      <Stylesheet primary={true}/>
      <Inline/>
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
      <NameList/>

      <UserGreeting />
      <ParentComponent/>
      <EventBind/>
      <FunctionClick/>
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
