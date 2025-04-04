import debounce from '../../utils/debounce';
import styles from './Search.module.css';
import { useDispatch } from 'react-redux';
import { searchTerm } from '../../actions';
import { useCallback } from 'react';

export default function Search() {
	const dispatch = useDispatch();
	let inputValue = '';

	const debouncedSearch = useCallback(
		debounce((value) => {
			dispatch(searchTerm(value));
		}, 1000),
		[dispatch],
	);

	const handleChange = (e) => {
		inputValue = e.target.value;
		debouncedSearch(inputValue);
	};

	return (
		<form className={styles.form}>
			<input
				className={styles.input}
				placeholder="Поиск..."
				type="text"
				onChange={handleChange}
			/>
		</form>
	);
}
