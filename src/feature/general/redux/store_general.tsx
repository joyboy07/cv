import { applyMiddleware, combineReducers, createStore } from 'redux';
import reduxSaga from 'redux-saga';
import { Reducer } from './general_reducer';
import rootSaga from './index_saga';

const reducer = combineReducers({
	Reducer
})
const sagaMiddeleware = reduxSaga()
const store = () => {
	return {
		...createStore(reducer, applyMiddleware(sagaMiddeleware)),
		runSaga: sagaMiddeleware.run(rootSaga)
	}
}

export default store