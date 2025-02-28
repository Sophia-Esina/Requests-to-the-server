import { useEffect } from 'react';
import styles from './App.module.css';
import { useState } from 'react';

export default function App() {
	const [todos, setTodos] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		fetch('https://jsonplaceholder.typicode.com/todos')
			.then((loadedData) => loadedData.json())
			.then((loadedTodos) => setTodos(loadedTodos))
			.finally(() => setIsLoading(false));
	}, []);

	return (
		<div className={styles.app}>
			{isLoading ? (
				<div className={styles.loader} />
			) : (
				todos.map(({ id, title, completed }, index) => (
					<div key={id} className={styles.itemTitle} data-index={index + 1}>
						<span>{title}</span>
						<span className={styles.completedItem}>
							{completed ? 'Completed' : 'Not Completed'}
						</span>
					</div>
				))
			)}
		</div>
	);
}
