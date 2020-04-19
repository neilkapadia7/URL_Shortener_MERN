import React, { useContext, useState } from "react";
import UrlContext from "../urlContext/urlContext";

const Home = () => {
	const urlContext = useContext(UrlContext);
	const { setShortUrl, loading, url } = urlContext;

	const [longUrl, setUrl] = useState("");

	const onSubmit = (e) => {
		e.preventDefault();
		if (longUrl === "") {
			console.log("Please Enter a URL");
		} else {
			setShortUrl({ longUrl: longUrl });
			setUrl("");
		}
	};

	if (loading === true) {
		return <h1>Loading...</h1>;
	}

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

			{!loading && url !== null ? (
				<a href={url.shortUrl} target='_blank'>
					{url.shortUrl}
				</a>
			) : (
				""
			)}
		</div>
	);
};

export default Home;
