import backend from '../apis/backend';
//Action creator

export const fetchBoard = () => async dispatch => {
	const response = await backend.get('/');

	dispatch({ type: 'FETCH_BOARD', payload: response.data })
}


// export const selectSquare = (symbol, index) => {
// 	// Return an action

// 	return {
// 		type: 'SQUARE_SELECTED',
// 	};
// };

