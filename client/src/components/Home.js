import React, { useContext, useState } from "react";
import UrlContext from "../urlContext/urlContext";

const Home = () => {
	const urlContext = useContext(UrlContext);
	const { setShortUrl, loading, url } = urlContext;

	const [longUrl, setUrl] = useState("");
	const [error, setError] = useState(false);

	const onSubmit = (e) => {
		e.preventDefault();
		if (longUrl === "") {
			setError(true);
		} else {
			setShortUrl({ longUrl: longUrl });
			setUrl("");
		}
	};

	return (
		<div>
			<h1>Create Click-Worthy Links</h1>
			<p className='desc'>
				Build and protect your brand using powerful, recognizable short links.
			</p>
			<form onSubmit={onSubmit}>
				<input
					type='text'
					onChange={(e) => setUrl(e.target.value)}
					placeholder='Enter URL'
					value={longUrl}
					required
				/>
				<input type='submit' value='Shorten' />
			</form>
			{error ? <p className='error'>Please Enter The URL</p> : ""}

			{loading ? <h3>Please Wait....</h3> : ""}

			{!loading && url !== null ? (
				<div style={{ marginTop: 40 }}>
					<a href={`url.shortUrl`} target='_blank'>
						{url.shortUrl}
					</a>
				</div>
			) : (
				""
			)}
		</div>
	);
};

export default Home;
