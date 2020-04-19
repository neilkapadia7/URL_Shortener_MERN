import React from "react";
import "./App.css";
import UrlState from "./urlContext/UrlState";
import Home from "./components/Home";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import GetPage from "./components/GetPage";

const App = () => {
	return (
		<UrlState>
			<div className='App'>
				<Home />
			</div>
		</UrlState>
	);
};

export default App;
