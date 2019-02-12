	import React, { Component } from 'react';
	import logo from './logo.svg';
	import './App.css';
	import Head from "./Head";
	import AboutHolder from "./AboutHolder";
	import ItemsHolder from "./ItemsHolder";
	import SearchHolder from "./SearchHolder";
	import EditHolder from "./EditHolder";
	import Foot from "./Foot";
	import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';

	class App extends Component {
	  render() {
		return (
		  <Router>
			<div className="Application">
			  <Head />
			  <div id="storage">
				<Route path="/About" component={AboutHolder} />
				<Route path="/Items" component={ItemsHolder} />
				<Route path="/Search" component={SearchHolder} />
				<Route path="/Edit" component={EditHolder} />
			  </div>
			  <Foot />
			</div>
		  </Router>
		);
	  }
	}

	export default App;
