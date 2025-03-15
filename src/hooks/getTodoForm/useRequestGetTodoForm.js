import { useEffect, useState } from 'react';

export function useRequestGetTodoForm() {
	const [todos, setTodos] = useState([]);
	const [refreshTodos, setRefreshTodos] = useState(false);

	useEffect(() => {
		fetch('http://localhost:3000/todoList')
			.then((loadedData) => loadedData.json())
			.then((loadedTodos) => setTodos(loadedTodos))
			.catch((error) => console.error('Error fetching todos:', error));
	}, [refreshTodos]);

	return { todos, setTodos, setRefreshTodos };
}
