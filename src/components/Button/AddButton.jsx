import { useTodoContext } from '../../AppContext/useTodoContext';
import styles from './Button.module.css';

export function AddButton() {
	const { requestAddTodoForm, isCreating } = useTodoContext();
	return (
		<button
			className={styles.AddButton}
			onClick={requestAddTodoForm}
			disabled={isCreating}
		>
			Добавить
		</button>
	);
}
