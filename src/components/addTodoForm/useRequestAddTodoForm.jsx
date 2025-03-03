import { useState } from 'react';

export default function useRequestAddTodoForm(setRefreshTodos) {
	const [isCreating, setIsCreating] = useState(false);
	const [todoItem, setTodoItem] = useState('');

	const requestAddTodoForm = (event) => {
		event.preventDefault();
		setIsCreating(true);

		fetch('http://localhost:3000/todoList', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({ text: todoItem }),
		})
			.then((response) => {
				response.json();
			})
			.then(() => {
				setTodoItem('');
				setRefreshTodos((prev) => !prev);
			})
			.catch((error) => console.error('Error adding todo:', error))
			.finally(() => setIsCreating(false));
	};
	return { requestAddTodoForm, isCreating, todoItem, setTodoItem };
}
