// Include the Main React Dependencies
var React = require('react');
var ReactDOM = require('react-dom');

// This code renders a simple "Hello World".
// ReactDOM takes in two parameters (a single HTML div or element and the HTML target where it will be rendered)
// The code here will run through webpack and be compiled into plain Javascript 
// The compiled code will be appended into the index.html file in the id called "app"
ReactDOM.render(

	<div>

		<h1>Hey Look A Me! I'm a header!</h1>
		<h2>Things I like</h2>

//!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
<button type="button" className="btn btn-primary">Primary</button>

//!-- Secondary, outline button -->
<button type="button" className="btn btn-secondary">Secondary</button>

//!-- Indicates a successful or positive action -->
<button type="button" className="btn btn-success">Success</button>

//!-- Contextual button for informational alert messages -->
<button type="button" className="btn btn-info">Info</button>

//!-- Indicates caution should be taken with this action -->
<button type="button" className="btn btn-warning">Warning</button>

//!-- Indicates a dangerous or potentially negative action -->
<button type="button" className="btn btn-danger">Danger</button>

//!-- Deemphasize a button by making it look like a link while maintaining button behavior -->
<button type="button" className="btn btn-link">Link</button>

		<ul>
			<li>milk</li>
			<li>goat's milk</li>
			<li>rat milk</li>
			<li>chalk water</li> </ul>
	 </div>,
	 document.getElementById('app')

)