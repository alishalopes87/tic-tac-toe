export default (state = [], action) => {
	switch (action.type){
		case 'FETCH_BOARD':
			return action.payload
		default:
			return state
	}
};