export const defaultState = {
	currentPlayer: 'X',
	isGameEnded: false,
	isDraw: false,
	field: new Array(9).fill(''),
};

export function reducer(state = defaultState, action) {
	const { type, payload } = action;
	switch (type) {
		case 'currentPlayer':
			return { ...state, currentPlayer: payload };
		case 'isGameEnded':
			return { ...state, isGameEnded: payload };
		case 'isDraw':
			return { ...state, isDraw: payload };
		case 'field':
			return { ...state, field: payload };
		case 'reset':
			return defaultState
		default:
			return state;
	}

}
