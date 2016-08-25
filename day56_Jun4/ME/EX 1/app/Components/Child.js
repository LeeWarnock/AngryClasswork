// Include React 
var React = require('react');

// Create the Child component
// Notice how the Child uses .createClass
// Notice how it uses a render function which specifies what will be displayed by the component
var Child = React.createClass({

	render: function(){

		return(
			<h1>I'm a Child!</h1>
		)
	}
});

// Export the componen back for use in other files
module.exports = Child;