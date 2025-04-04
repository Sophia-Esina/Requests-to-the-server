export const toggleSort = () => {
	return { type: 'TOGGLE_SORT' };
};

export const searchTerm = (term) => {
	return { type: 'SEARCH_TERM', payload: term };
};
