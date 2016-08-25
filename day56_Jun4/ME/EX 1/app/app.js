// Include the Main React Dependencies
var React = require('react');
var ReactDOM = require('react-dom');

// We need to include all of the components we're utilizing
// Include the Child Component
var Child = require('./Components/Child.js')
var Parent = require('./Components/Parent.js')
var Grandparent = require('./Components/Grandparent.js')


ReactDOM.render(

	/*Here we dump all of the components into a single main-container*/
	/*Again, treat them like they are any other HTML elements.*/

	<div className='main-container'>
	<div classname='title'>
		<h1>Warmup</h1>
		<h3>Components and Sub-Components</h3>	
	</div>

		<Child />
		<Parent />
		<Grandparent />

	</div>,
	document.getElementById('app')
)