export const initialTodoState = [];

export const todoReducer = (state = initialTodoState, action) => {
	switch (action.type) {
		case 'GET_TODO': {
			return action.payload;
		}
		case 'ADD_TODO': {
			return [...state, action.payload];
		}
		case 'UPDATE_TODO': {
			return state.map((todo) =>
				todo.id === action.payload.id
					? { ...todo, text: action.payload.text }
					: todo,
			);
		}
		case 'DELETE_TODO': {
			return state.filter((todo) => todo.id !== action.payload.id);
		}
		default:
			return state;
	}
};
