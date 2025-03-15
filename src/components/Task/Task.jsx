import { useParams } from 'react-router-dom';
import {
	useRequestDeleteTodoForm,
	useRequestGetTodoForm,
	useRequestUpdateTodoForm,
} from '../../hooks';
import styles from './Task.module.css';
import BackButton from '../BackButton/BackButton';

export default function Task() {
	const { id } = useParams();
	const { todos, setRefreshTodos } = useRequestGetTodoForm();
	const currentTodo = todos.find((todo) => todo.id === id);
	const { requestUpdateTodoItem } = useRequestUpdateTodoForm(setRefreshTodos);
	const { requestDeleteTodoForm, isDeleting } =
		useRequestDeleteTodoForm(setRefreshTodos);

	if (!currentTodo)
		return (
			<div>
				<p>Задача не найдена</p>
				<BackButton />
			</div>
		);

	return (
		<div className={styles.container}>
			<div className={styles.itemTitle}>
				<h2>{currentTodo.text}</h2>
				<div className={styles.buttonContainer}>
					<button
						className={styles.updateButton}
						onClick={() => {
							const newText = prompt(
								'Измените текст дела:',
								currentTodo.text,
							);
							if (newText) {
								requestUpdateTodoItem(currentTodo.id, newText);
							}
						}}
					>
						Изменить
					</button>
					<button
						className={styles.deleteButton}
						onClick={() => {
							requestDeleteTodoForm(currentTodo.id);
						}}
						disabled={isDeleting}
					>
						Удалить
					</button>
					<BackButton />
				</div>
			</div>
		</div>
	);
}
