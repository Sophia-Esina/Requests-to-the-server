import { useTodoContext } from '../../AppContext/useTodoContext';
import styles from './Button.module.css';

export function UpdateButton({ text, id }) {
	const { requestUpdateTodoForm } = useTodoContext();
	const handleUpdate = () => {
		const newText = prompt('Измените текст дела:', text);
		if (newText) {
			requestUpdateTodoForm(id, newText);
		}
	};

	return (
		<button className={styles.UpdateButton} onClick={handleUpdate}>
			Изменить
		</button>
	);
}
