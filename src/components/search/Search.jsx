import { useEffect } from 'react';
import debounce from '../../utils/debounce';
import styles from './Search.module.css';
import { useTodoContext } from '../../AppContext/useTodoContext';

export default function Search() {
	const { setSearchTerm } = useTodoContext();

	const debouncedSearch = debounce((value) => {
		setSearchTerm(value);
	}, 1000);

	const handleChange = (e) => {
		debouncedSearch(e.target.value);
	};

	useEffect(() => {
		return () => {
			debouncedSearch.cancel();
		};
	}, [debouncedSearch]);

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
