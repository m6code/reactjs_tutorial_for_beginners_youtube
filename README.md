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