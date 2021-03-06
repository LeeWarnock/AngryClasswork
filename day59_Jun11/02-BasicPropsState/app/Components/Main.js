// Include React 
var React = require('react');

// Include Child
var Child = require("./Child");

// This is the main component. It includes the banner and button.
var Main = React.createClass({

	// Here we set a generic set of states associated with our Main Component
	getInitialState: function(){
		return {
			name: "Bob",
			age: 64,
			artistry: 94,
			isFuzzy: true,
			img: "http://a2.files.biography.com/image/upload/c_fit,cs_srgb,dpr_1.0,h_1200,q_80,w_1200/MTIwNjA4NjMzOTU5NTgxMTk2.jpg"
		}
	},

	// Here we render the function
	render: function(){

		return(

			<div className="container">

				<div className="row">

					<div className="jumbotron">
						<h1>Bob and Bob II</h1>
						<h2>A lesson on props, states, parents, and children </h2>
					</div>

					<div className="col-md-6">
				
						<div className="panel panel-default">
							<div className="panel-heading">
								<h3 className="panel-title text-center">{this.state.name}</h3>
							</div>
							<div className="panel-body text-center">

								{/* This is where we'll show the click count for the parent*/}
								<h1>This is: {this.state.name}</h1>
								<h2>{this.state.name} is a fantastic artist</h2>
								<hr />
								<h2>Age: {this.state.age}</h2>
								<h2>Fuzziness: {this.state.isFuzzy.toString()}</h2>
								<h2>Artistry: {this.state.artistry}</h2>

							</div>
						</div>
					</div>

					<div className="col-md-6">
				
						<div className="panel panel-default">

							<div className="panel-body text-center">

								<img src={this.state.img} width="100%"/>

							</div>
						</div>
					</div>

					<Child dadsAge={this.state.age} dadsFuzzy={this.state.isFuzzy} dadsArtistry={this.state.artistry}/>

				</div>

			</div>
		)
	}
});

// Export the componen back for use in other files
module.exports = Main;