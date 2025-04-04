import { addTodo, deleteTodo, getTodo, updateTodo } from './actions';
import styles from './App.module.css';
import Search from './components/search/Search';
import Sort from './components/sort/Sort';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function App() {
	const dispatch = useDispatch();
	const [newTodoText, setNewTodoText] = useState('');
	const todos = useSelector((state) => state.todos);
	const { searchTerm: searchInput, isSorted } = useSelector((state) => state.filters);

	useEffect(() => {
		dispatch(getTodo());
	}, [dispatch]);

	const onAddTodo = (event) => {
		event.preventDefault();
		if (newTodoText.trim()) {
			dispatch(addTodo(newTodoText));
			setNewTodoText('');
		}
	};

	const onUpdateTodo = (id, newText) => {
		dispatch(updateTodo(id, newText));
	};

	const onDeleteTodo = (id) => {
		dispatch(deleteTodo(id));
	};

	const filteredTodos = todos.filter((todo) =>
		todo.text.toLowerCase().includes(searchInput.toLowerCase()),
	);

	const sortedTodos = isSorted
		? [...filteredTodos].sort((a, b) => a.text.localeCompare(b.text))
		: filteredTodos;

	return (
		<div className={styles.app}>
			<form onSubmit={onAddTodo}>
				<input
					type="text"
					placeholder="Введите название дела"
					value={newTodoText}
					onChange={(event) => setNewTodoText(event.target.value)}
				/>
				<button className={styles.button} onClick={onAddTodo}>
					Добавить
				</button>
			</form>
			<Search />
			<Sort />
			<ol>
				{sortedTodos.map(({ id, text }) => (
					<li key={id} className={styles.itemTitle}>
						{text}
						<div>
							<button
								className={styles.button1}
								onClick={() => {
									const newText = prompt('Измените текст дела:', text);
									if (newText) {
										onUpdateTodo(id, newText);
									}
								}}
							>
								Изменить
							</button>
							<button
								className={styles.button2}
								onClick={() => {
									onDeleteTodo(id);
								}}
							>
								Удалить
							</button>
						</div>
					</li>
				))}
			</ol>
		</div>
	);
}
