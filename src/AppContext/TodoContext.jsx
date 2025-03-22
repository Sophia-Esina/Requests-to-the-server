import { useState } from 'react';
import {
	useRequestAddTodoForm,
	useRequestDeleteTodoForm,
	useRequestGetTodoForm,
	useRequestUpdateTodoForm,
} from '../hooks/index';
import { TodoContext } from './TodoContext';

export const TodoProvider = ({ children }) => {
	const { todos, setRefreshTodos } = useRequestGetTodoForm();
	const { requestAddTodoForm, isCreating, todoItem, setTodoItem } =
		useRequestAddTodoForm(setRefreshTodos);
	const { requestUpdateTodoItem: requestUpdateTodoForm } =
		useRequestUpdateTodoForm(setRefreshTodos);
	const { requestDeleteTodoForm, isDeleting } =
		useRequestDeleteTodoForm(setRefreshTodos);

	const [searchTerm, setSearchTerm] = useState('');
	const [isSorted, setIsSorted] = useState(false);

	const filteredTodos = todos.filter((todo) =>
		todo.text.toLowerCase().includes(searchTerm.toLowerCase()),
	);

	const sortedTodos = isSorted
		? [...filteredTodos].sort((a, b) => a.text.localeCompare(b.text))
		: filteredTodos;

	return (
		<TodoContext
			value={{
				todos,
				requestAddTodoForm,
				isCreating,
				todoItem,
				setTodoItem,
				requestUpdateTodoForm,
				requestDeleteTodoForm,
				isDeleting,
				setSearchTerm,
				isSorted,
				setIsSorted,
				sortedTodos,
			}}
		>
			{children}
		</TodoContext>
	);
};
