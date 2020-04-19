import React, { useReducer } from "react";
import UrlContext from "./urlContext";
import UrlReducer from "./urlReducer";
import axios from "axios";

const UrlState = (props) => {
	const initialState = {
		loading: false,
		url: null,
	};

	const [state, dispatch] = useReducer(UrlReducer, initialState);

	const setShortUrl = async (longUrl) => {
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};

		try {
			dispatch({ type: "SET_LOADING" });

			const res = await axios.post("/api/url/shorten", longUrl, config);

			dispatch({ type: "SET_URL", payload: res.data });
		} catch (err) {
			console.log(err.response);
		}
	};

	return (
		<UrlContext.Provider
			value={{
				loading: state.loading,
				url: state.url,
				setShortUrl,
			}}>
			{props.children}
		</UrlContext.Provider>
	);
};

export default UrlState;
