import { useState } from 'react';
import { ref, push } from 'firebase/database';
import { db } from '../firebase';

export default function useRequestAddTodoForm(setRefreshTodos) {
	const [isCreating, setIsCreating] = useState(false);
	const [todoItem, setTodoItem] = useState('');

	const requestAddTodoForm = (event) => {
		event.preventDefault();
		setIsCreating(true);

		const todosDbRef = ref(db, 'TodosList');
		push(todosDbRef, {
			text: todoItem,
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
