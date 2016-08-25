// Include React 
var React = require('react');

// Create the Adder Component
var Adder = React.createClass({

	// Adder has a state that follows the number of clicks
	getInitialState: function(){
		return {
			number: 0
		}
	},

	render: function(){

		return(

			<div className="panel panel-default">
				<div className="panel-heading">
					<h3 className="panel-title">Adder</h3>
				</div>
				<div className="panel-body text-center">

					{/* Adder will use it's own parents number ("child") with its own state.
					*/}
					<h1>{this.state.number + this.props.number}</h1>

				</div>
			</div>
		)
	}
});

// Export the componen back for use in other files
module.exports = Adder;