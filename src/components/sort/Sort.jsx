export default function Sort({ onSort, isSorted }) {
	return (
		<button onClick={onSort}>
			{isSorted ? 'Сортировка по алфавиту: ВКЛ' : 'Сортировка по алфавиту: ВЫКЛ'}
		</button>
	);
}
