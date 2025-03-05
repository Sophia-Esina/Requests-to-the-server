import { ref, set } from 'firebase/database';
import { useState } from 'react';
import { db } from '../firebase';

export default function useRequestUpdateTodoForm(setRefreshTodos) {
	const [isUpdating, setIsUpdating] = useState(false);

	const requestUpdateTodoItem = (id, value) => {
		setIsUpdating(true);

		const updateTodoDbRef = ref(db, `TodosList/${id}`);

		set(updateTodoDbRef, {
			text: value,
		})
			.then(() => {
				setRefreshTodos((prev) => !prev);
			})

			.catch((error) => console.error('Error adding todo:', error))
			.finally(() => setIsUpdating(false));
	};
	return { requestUpdateTodoItem, isUpdating };
}
