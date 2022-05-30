import { all } from 'redux-saga/effects'
import Saga from './general_saga '




export default function* rootSaga(){
	yield all([
		Saga()
	])
}