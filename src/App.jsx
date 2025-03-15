import { Navigate, Route, Routes } from 'react-router-dom';
import styles from './App.module.css';

import MainPage from './components/MainPage/MainPage';
import Task from './components/Task/Task';
import NotFound from './components/NotFound/NotFound';

export default function App() {
	return (
		<div className={styles.app}>
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/task/:id" element={<Task />} />
				<Route path="/404" element={<NotFound />} />
				<Route path="*" element={<Navigate to="/404" />} />
			</Routes>
		</div>
	);
}
