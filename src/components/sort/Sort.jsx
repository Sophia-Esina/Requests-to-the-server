import styles from './Sort.module.css';

export default function Sort({ onSort, isSorted }) {
	return (
		<button className={styles.sortButton} onClick={onSort}>
			{isSorted ? 'Сортировка по алфавиту: ВКЛ' : 'Сортировка по алфавиту: ВЫКЛ'}
		</button>
	);
}
