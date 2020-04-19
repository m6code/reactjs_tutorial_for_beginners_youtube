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

## Binding Event Handlers

## Methods As Props

## Conditional Rendering
- if/else : 
	- don't work inside the JSX
	- adding if/else statements within the JSX is not valid

- Element variables
	- This a better approach which uses Javascript variables to store elements.
	- Helps render the entire component or just a part of the component.
- Ternary conditional operator
	- Even more simpler, can be used inside the JSX
- Short circuit operator
	- Uses the && logical operator to evaluate both the right hand and left hand side if either the right or left hand side is false nothing with be returned.

## List Rendering
- The map method of the array goes through the array and apply the function (tranformation) to each of the element of the array.

## Lists and Keys
- The key prop is a special attribute you need to include when creating list of elements and it must be unique for each element.
- Key prop are not accessible in the child component. Do not try to use the key prop to render any data in any of your components.
- Keys help react identify which items are changed, removed or added and helps react handles UI change efficiently.
- Keys give the elements a stable identity

## Index as Key Anti-pattern
- Sometimes we can use the index of an array as a key.
- Using the index as a key can cause serious issues in some scenarios
- When to use index as keys
	- The item on your list do not have a unique id.
	- The list is a static list and will not change.
	- The list will never be re-ordered or filtered.

## Styling React Components.
When can use the following options to style react component
- CSS stylesheets
- Inline styling : in react inline style are not specified as string instead they are specified as an object whose key is the camel case version of the style name and the value is usually a string.
- CSS Modules : works from react-script >= 2, the file naming convention to be used for css modules with create-react-app - the filename must be suffixed with .module.css
- CSS in JS Libraries (Styled Components)

## Basics of Form Handling
- Controlled Component
	- To create a controlled component, 
		1. create a component state that will control the value of the imput element
		2. then handle the onChange event

## Components Lifecycle Methods
- Life cycle methods available for a class component can be classified into four phases
	1. Mounting : they are called when an instance of a component is being created and inserted into the DOM. The mounting phase has four methods

			- constructor
			- static getDerivedStateFromProps
			- render and
			- componentDidMount

	2. Updating : called when a component is being re-rendered as a result of changes to either its props or state. During the updating state we have 5 methods

		- static getDerivedStateFromProps
		- shouldComponentUpdate
		- render
		- getSnapshotBeforeUpdate and
		- componentDidUpdate

	3. Unmounting : called when a component is being removed from the DOM. Unmount has just 1 method

		- componentWillUnmount 

	4. Error Handling : called when there is an during rendering, in a lifecycle method or in the constructor of any child component. This has 2 methods

		- static getDerivedStateFromError and
		- componentDidCatch