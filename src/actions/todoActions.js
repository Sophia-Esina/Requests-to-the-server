export const getTodo = () => async (dispatch) => {
	try {
		const response = await fetch('http://localhost:3000/todoList');
		const data = await response.json();
		dispatch({ type: 'GET_TODO', payload: data });
	} catch (error) {
		console.error('Ошибка при загрузке списка дел:', error);
	}
};

export const addTodo = (text) => async (dispatch) => {
	const newTodo = { text };
	try {
		const response = await fetch('http://localhost:3000/todoList', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(newTodo),
		});
		const data = await response.json();
		dispatch({ type: 'ADD_TODO', payload: data });
	} catch (error) {
		console.error('Ошибка при добавлении дела:', error);
	}
};

export const updateTodo = (id, newText) => async (dispatch) => {
	const updatedTodo = { text: newText };
	try {
		const response = await fetch(`http://localhost:3000/todoList/${id}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(updatedTodo),
		});
		const data = await response.json();
		dispatch({ type: 'UPDATE_TODO', payload: data });
	} catch (error) {
		console.error('Ошибка при обновлении дела:', error);
	}
};

export const deleteTodo = (id) => async (dispatch) => {
	try {
		await fetch(`http://localhost:3000/todoList/${id}`, {
			method: 'DELETE',
		});
		dispatch({ type: 'DELETE_TODO', payload: { id } });
	} catch (error) {
		console.error('Ошибка при удалении дела:', error);
	}
};
