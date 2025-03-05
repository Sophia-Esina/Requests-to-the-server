import { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../firebase';

export default function useRequestGetTodoForm() {
	const [todos, setTodos] = useState([]);
	const [refreshTodos, setRefreshTodos] = useState(false);
	useEffect(() => {
		const todosDbRef = ref(db, 'TodosList');
		return onValue(todosDbRef, (snapshot) => {
			const loadedTodos = snapshot.val();
			setTodos(loadedTodos || {});
		});
	}, [refreshTodos]);
	return { todos, setTodos, setRefreshTodos };
}
