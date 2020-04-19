import React from "react";
import "./App.css";
import UrlState from "./urlContext/UrlState";
import Home from "./components/Home";

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
