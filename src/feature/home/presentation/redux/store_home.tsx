import { applyMiddleware, combineReducers, createStore } from 'redux';
import reduxSaga from 'redux-saga';
import { homeReducer } from './home_reducer';
import rootSaga from './index_saga';

const reducer = combineReducers({
	homeReducer
})
const sagaMiddeleware = reduxSaga()
const homeStore = () => {
	return {
		...createStore(reducer, applyMiddleware(sagaMiddeleware)),
		runSaga: sagaMiddeleware.run(rootSaga)
	}
}

export default homeStore