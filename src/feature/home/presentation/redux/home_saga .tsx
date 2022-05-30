import { call, put, takeLatest } from 'redux-saga/effects';
import { getHomeRemote } from '../../data/local/home_data_local';
import { GET_HOME, IJECT_DATA } from './home_action';


function* getHome(_:any):any{
	var campus:[] =[]

	try {
		var results = yield call(getHomeRemote,1)
		console.log(results)
		// results.forEach((docm:any)=>{
		// 	campus.push({
		// 		id: docm.id,
		// 		name: docm.data().name,
		// 		adress: docm.data().adress,
		// 		district: docm.data().district,
		// 		imgUrl: docm.data().imgUrl,
		// 		number: docm.data().number,
		// 		pointLocation: docm.data().name,
		// 	})
		// })
		yield put({type: IJECT_DATA, payload:campus });
	} catch (error) {
	}
}

export default function* campusSaga(){
	yield takeLatest( GET_HOME, getHome);
}
