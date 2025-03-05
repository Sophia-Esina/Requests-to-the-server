import { useState } from 'react';
import { ref, remove } from 'firebase/database';
import { db } from '../firebase';

export default function useRequestDeleteTodoForm(setRefreshTodos) {
	const [isDeleting, setIsDeleting] = useState(false);

	const requestDeleteTodoForm = (id) => {
		setIsDeleting(true);

		const deleteTodoDbRef = ref(db, `TodosList/${id}`);

		remove(deleteTodoDbRef)
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
