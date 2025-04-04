import { createStore, combineReducers, applyMiddleware } from 'redux';
import { todoReducer } from './reducer';
import { thunk } from 'redux-thunk';

const reducer = combineReducers({
	todoReducer,
});

export const store = createStore(reducer, applyMiddleware(thunk));
