import { useDispatch, useSelector } from 'react-redux';
import styles from './Sort.module.css';
import { toggleSort } from '../../actions';

export default function Sort() {
	const dispatch = useDispatch();
	const { isSorted } = useSelector((state) => state.filters);

	return (
		<button className={styles.sortButton} onClick={() => dispatch(toggleSort())}>
			{isSorted ? 'Сортировка по алфавиту: ВКЛ' : 'Сортировка по алфавиту: ВЫКЛ'}
		</button>
	);
}
