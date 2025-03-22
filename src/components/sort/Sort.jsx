import { useTodoContext } from '../../AppContext/useTodoContext';
import styles from './Sort.module.css';

export default function Sort() {
	const { setIsSorted, isSorted } = useTodoContext();
	return (
		<button
			className={styles.sortButton}
			onClick={() => {
				setIsSorted(!isSorted);
			}}
		>
			{isSorted ? 'Сортировка по алфавиту: ВКЛ' : 'Сортировка по алфавиту: ВЫКЛ'}
		</button>
	);
}
