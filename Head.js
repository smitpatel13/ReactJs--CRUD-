	import React, { Component } from 'react';
	import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
	import logo from './icon1.jpg';

	class Head extends Component {
		render() {
			return (
				<div id="head">
				<img src={logo} />
					<NavLink to="/About">About</NavLink>
					<NavLink to="/Items">Items</NavLink>
					<NavLink to="/Search">Search</NavLink>
					<NavLink to="/Edit">Edit</NavLink>
				</div>
			);
		}
	}

	export default Head;
