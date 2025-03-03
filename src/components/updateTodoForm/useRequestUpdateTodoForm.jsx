import { useState } from 'react';

export default function useRequestUpdateTodoForm(setRefreshTodos) {
	const [isUpdating, setIsUpdating] = useState(false);
	// const [updateTodo, setUpdateTodo] = useState('');

	const requestUpdateTodoItem = (id, value) => {
		setIsUpdating(true);
		fetch(`http://localhost:3000/todoList/${id}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({ text: value }),
		})
			.then((response) => response.json())
			.then(() => {
				// setUpdateTodo('');
				setRefreshTodos((prev) => !prev);
			})
			.catch((error) => console.error('Error adding todo:', error))
			.finally(() => setIsUpdating(false));
	};
	return { requestUpdateTodoItem, isUpdating };
}
