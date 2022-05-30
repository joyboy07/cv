import { all } from 'redux-saga/effects'
import homeSaga from './home_saga '




export default function* rootSaga(){
	yield all([
		homeSaga()
	])
}