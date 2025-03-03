import { useEffect, useState } from 'react';
import debounce from '../../utils/debounce';
import styles from './Search.module.css';

export default function Search({ onSearch }) {
	const [inputValue, setInputValue] = useState('');

	const debouncedSearch = debounce((value) => {
		onSearch(value);
	}, 1000);

	const handleChange = (e) => {
		setInputValue(e.target.value);
		debouncedSearch(e.target.value);
	};

	useEffect(() => {
		return () => {
			debouncedSearch.cancel();
		};
	}, []);

	return (
		<form className={styles.form}>
			<input
				className={styles.input}
				placeholder="Поиск..."
				type="text"
				value={inputValue}
				onChange={handleChange}
			/>
		</form>
	);
}
