import React, { useContext, useState } from "react";
import UrlContext from "../urlContext/urlContext";

const Home = () => {
	const urlContext = useContext(UrlContext);
	const { setShortUrl } = urlContext;

	const [longUrl, setUrl] = useState("");

	const onSubmit = (e) => {
		e.preventDefault();
		if (longUrl === "") {
			console.log("Please Enter a URL");
		} else {
			setShortUrl({ longUrl: longUrl });
		}
	};
	return (
		<div>
			<h1>Home</h1>
			<form onSubmit={onSubmit}>
				<input
					type='text'
					onChange={(e) => setUrl(e.target.value)}
					placeholder='Enter URL'
					value={longUrl}
				/>
				<input type='submit' value='Submit' />
			</form>
		</div>
	);
};

export default Home;
