export default (state, action) => {
	switch (action.type) {
		case "SET_LOADING":
			return {
				...state,
				loading: true,
			};
		case "SET_URL":
			return {
				...state,
				url: action.payload,
				loading: false,
			};
		default:
			return state;
	}
};
