const initialState = { searchTerm: '', isSorted: false };

export const filterReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SEARCH_TERM':
			return { ...state, searchTerm: action.payload };
		case 'TOGGLE_SORT':
			return { ...state, isSorted: !state.isSorted };
		default:
			return state;
	}
};
