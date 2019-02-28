import React, { Component } from "react";
import Header from "./layout/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.less";

import PageA from "./test/PageA";
import PageB from "./test/PageB";

const routes = [{ path: "/", component: PageA }, { path: "/test/page-a", component: PageA }, { path: "/test/page-b", component: PageB }];

class App extends Component {
	render() {
		return (
			<Router basename="apps">
				<div id="app">
					<ul>
						<li>
							<Link to="/test/page-a">PageA</Link>
						</li>
						<li>
							<Link to="/test/page-b">PageB</Link>
						</li>
					</ul>
					<hr />
					<Header />
					<Switch>
						{routes.map(route => (
							<Route exact={true} path={route.path} component={route.component as any} key={route.path} />
						))}
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
