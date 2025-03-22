import { useTodoContext } from '../../AppContext/useTodoContext';
import styles from './Button.module.css';

export function DeleteButton({ id }) {
	const { requestDeleteTodoForm, isDeleting } = useTodoContext();
	return (
		<button
			className={styles.DeleteButton}
			onClick={() => requestDeleteTodoForm(id)}
			disabled={isDeleting}
		>
			Удалить
		</button>
	);
}
