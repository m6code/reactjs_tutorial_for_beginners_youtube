# React for Beginners - Codevolution (Youtube)

## Introduction
- React is an opensource library used for building User Interfaces (UI).
- It is responsible only for building UI.
- Created and maintained by Facebook.
- Has huge community support with high demand for skillset.
- It has a component based architeture which allows breakdown down your application into small encapsulated parts which can then be composed to make complex apps
	- Components makes it possible to make reusable code
- React is declarative : tell react what you want and it will build the actual UI.

## HelloWorld
- Install nodejs, vscode or use any editor of your choice.

- To create a project run
	1. `npx create-react-app hello-world`
	2. `cd hello-world`
	3. `npm start`
- To get started edit app.js inside src folder of hello-world.
- what is npx : it is a npm package runner
- install react globally
	1. `npm install create-react-app -g`
	2. `create-react-app <project-name>`

## Folder Structure:
- package.json :- contains the script and dependancies required for the project
- node_modules :- contails all the dependencies required by react when you run npx create-react-app appname
- public/index.html :- is the file that get served up you don't need to edit this file.
- src/index.js :- is the file you work with and edit
- src/app.js :- is the app component which represent the view we see in the browser.
- src/serviceWorker.js :- is for progressive web app.

## Components
- A component represents a part of the user interface.
- The component that carries all other component is known as the root component, and it is the containing component usually called AppComponent.
- Components are reusable.
- Types of Component
	1. Stateless Functional Component : 
		- These are literally js functions 
		- that return html which describe the UI
	2. Stateful Class Component.
		- Class component are regular ES6 libraries that extent the component class from the ReactJS Library.

## Functional Components
This is a javascript funtions that accepts objects of properties known as props. It accepts an input of properties and return the UI.

- Funtional components should be used as much as possible over the class based component
	- Reasons
		- Absence of this
		- Solution without using state
		- Mainly responsible for the UI

## Class Components
- They are basically ES6 Classes, they can optionally recieve props as import and return html.
- They can also maintain a private internal state (maintain info and use it to decribe UI).


- Class Component are:
	- Feature rich
	- Maintain their own private data
	- Complex UI Logic
	- Provide life cycle hooks

## Hooks
Hooks let you use state and other React features without writing a class.


## JSX
JavaScript XML (JSL) - is an extension of the JavaScript language syntax. It allows you write XML-like code for element and components.
	- it has a tag name, attribute and children
	- makes react code simpler and elegant
	- translates to pure JavaScript

## Props
- Props is short for properties
- It is the optional input your component can accept which allows the component to be dynamic.
- We specify props as attributes
- props are immutable
- They get passed to the component
- A parent passes props down to the children
- this.props is used to access props

## State
- State is managed within the component
- State can be changed
- this.state is used to access state

## setState
Use setState to modify a component state.
- Always make use of setState and never modify the state directly.
- Code has to executed after the state has been updated? Place that code in the the callback function which is the second argument to the setState method.
- When you have to update state based on the previous state value, pass in a function as an argument instead of the regular object.