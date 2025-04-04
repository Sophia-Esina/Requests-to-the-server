export const getTodo = () => (dispatch) => {
	return fetch('http://localhost:3000/todoList', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	})
		.then((response) => response.json())
		.then((data) => dispatch({ type: 'GET_TODO', payload: data }))
		.catch((error) => console.error('Error fetching todo list:', error));
};

export const addTodo = (todoText) => (dispatch) => {
	const newTodo = { text: todoText };
	return fetch('http://localhost:3000/todoList', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(newTodo),
	})
		.then((response) => response.json())
		.then((data) => dispatch({ type: 'ADD_TODO', payload: data }))
		.catch((error) => console.error('Error adding todo:', error));
};

export const updateTodo = (id, newText) => (dispatch) => {
	const updatedTodo = { id, text: newText };
	return fetch(`http://localhost:3000/todoList/${id}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(updatedTodo),
	})
		.then((response) => response.json())
		.then((data) => dispatch({ type: 'UPDATE_TODO', payload: data }))
		.catch((error) => console.error('Error updating todo:', error));
};

export const deleteTodo = (id) => (dispatch) => {
	return fetch(`http://localhost:3000/todoList/${id}`, {
		method: 'DELETE',
	})
		.then(() => dispatch({ type: 'DELETE_TODO', payload: { id } }))
		.catch((error) => console.error('Error deleting todo:', error));
};
