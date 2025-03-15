import { useState } from 'react';
import { useRequestAddTodoForm, useRequestGetTodoForm } from '../../hooks';
import styles from './MainPage.module.css';
import Search from '../Search/Search';
import Sort from '../Sort/Sort';
import { Link } from 'react-router-dom';

export default function MainPage() {
	const { todos, setRefreshTodos } = useRequestGetTodoForm();
	const { requestAddTodoForm, isCreating, todoItem, setTodoItem } =
		useRequestAddTodoForm(setRefreshTodos);

	const [searchTerm, setSearchTerm] = useState('');
	const [isSorted, setIsSorted] = useState(false);

	const filteredTodos = todos.filter((todo) =>
		todo.text.toLowerCase().includes(searchTerm.toLowerCase()),
	);

	const sortedTodos = isSorted
		? [...filteredTodos].sort((a, b) => a.text.localeCompare(b.text))
		: filteredTodos;

	return (
		<>
			<form onSubmit={requestAddTodoForm}>
				<input
					type="text"
					placeholder="Введите название дела"
					value={todoItem}
					onChange={(event) => setTodoItem(event.target.value)}
				/>
				<button className={styles.button} disabled={isCreating}>
					Добавить
				</button>
			</form>
			<Search onSearch={setSearchTerm} />
			<Sort onSort={() => setIsSorted(!isSorted)} isSorted={isSorted} />
			<ol>
				{sortedTodos.map(({ id, text }) => (
					<li key={id} className={styles.itemTitle}>
						<Link to={`/task/${id}`}>
							{text.length > 38 ? `${text.substring(0, 38)}...` : text}
						</Link>
					</li>
				))}
			</ol>
		</>
	);
}
