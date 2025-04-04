import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { todoReducer } from './reducers/todoReducer';
import { thunk } from 'redux-thunk';
import { filterReducer } from './reducers/filterReducer';

const reducer = combineReducers({
	todos: todoReducer,
	filters: filterReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
