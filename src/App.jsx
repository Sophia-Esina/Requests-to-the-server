import styles from './App.module.css';
import Search from './components/Search/Search';
import Sort from './components/Sort/Sort';
import { AddButton, DeleteButton, UpdateButton } from './components/Button';
import { useTodoContext } from './AppContext/useTodoContext';

export default function App() {
	const { requestAddTodoForm, todoItem, setTodoItem, sortedTodos } = useTodoContext();

	return (
		<div className={styles.app}>
			<form onSubmit={requestAddTodoForm}>
				<input
					type="text"
					placeholder="Введите название дела"
					value={todoItem}
					onChange={(event) => setTodoItem(event.target.value)}
				/>
				<AddButton />
			</form>
			<Search />
			<Sort />
			<ol>
				{sortedTodos.map(({ id, text }) => (
					<li key={id} className={styles.itemTitle}>
						{text}
						<div>
							<UpdateButton text={text} id={id} />
							<DeleteButton id={id} />
						</div>
					</li>
				))}
			</ol>
		</div>
	);
}
