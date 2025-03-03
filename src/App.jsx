import styles from './App.module.css';
import useRequestGetTodoForm from './components/getTodoForm/useRequestGetTodoForm';
import useRequestAddTodoForm from './components/addTodoForm/useRequestAddTodoForm';
import useRequestUpdateTodoForm from './components/updateTodoForm/useRequestUpdateTodoForm';
import useRequestDeleteTodoForm from './components/deleteTodoForm/useRequestDeleteTodoForm';
import Search from './components/search/Search';
import Sort from './components/sort/Sort';
import { useState } from 'react';

export default function App() {
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
		<div className={styles.app}>
			<form onSubmit={requestAddTodoForm}>
				<input
					type="text"
					placeholder="Введите название дела"
					value={todoItem}
					onChange={(event) => setTodoItem(event.target.value)}
				/>
				<button
					className={styles.button}
					onSubmit={requestAddTodoForm}
					disabled={isCreating}
				>
					Добавить
				</button>
			</form>
			<Search onSearch={setSearchTerm} />
			<Sort onSort={() => setIsSorted(!isSorted)} isSorted={isSorted} />
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
										requestUpdateTodoForm(id, newText);
									}
								}}
							>
								Изменить
							</button>
							<button
								className={styles.button2}
								onClick={() => {
									requestDeleteTodoForm(id);
								}}
								disabled={isDeleting}
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
