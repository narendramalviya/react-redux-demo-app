import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import User from "./components/User";
class App extends Component {
	componentDidMount() {
		//
	}
	render() {
		return (
			<div className="App">
				<User />
			</div>
		);
	}
}

export default connect()(App);
