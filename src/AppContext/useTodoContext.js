import { useContext } from 'react';
import { TodoContext } from './TodoContext';

export const useTodoContext = () => {
	return useContext(TodoContext);
};
