import { useState } from 'react';

export function useRequestDeleteTodoForm(setRefreshTodos) {
	const [isDeleting, setIsDeleting] = useState(false);

	const requestDeleteTodoForm = (id) => {
		setIsDeleting(true);

		fetch(`http://localhost:3000/todoList/${id}`, {
			method: 'DELETE',
		})
			.then(() => {
				setRefreshTodos((prev) => !prev);
			})
			.catch((error) => console.error('Error deleting todo:', error))
			.finally(() => {
				setIsDeleting(false);
			});
	};
	return { requestDeleteTodoForm, isDeleting };
}
