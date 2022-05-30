import { call, put, takeLatest } from 'redux-saga/effects';
import certificateI from '../../about/interface/certificate_interface';
import IEducation from '../../about/interface/education_Interface';
import portafolioI from '../../service/entities/portafolio_Interface';
import { getCertificateRemote, getDataRemote, getPortafolioRemote } from '../data/datasource_remote';
import { GET_CERTIFICATE, GET_EDUCATION, GET_PORTAFOLIO, INYECT_CERTIFICATE, INYECT_EDUCATION, INYECT_PORTAFOLIO } from './general_action';


function* getEducation(_:any):any{
	var educations:IEducation[] =[]

	try {
		var results = yield call(getDataRemote)
		results.forEach((docm:any)=>{
			educations.push({
				id: docm.id,
				date: docm.data().date,
				name: docm.data().name,
				institucion: docm.data().institucion,
			})
		})
		yield put({type: INYECT_EDUCATION, payload:educations });
	} catch (error) {
	}
}

function* getCertificate(_:any):any{
	var certificates:certificateI[] =[]

	try {
		var results = yield call(getCertificateRemote)
		results.forEach((docm:any)=>{
			certificates.push({
				id: docm.id,
				name: docm.data().name,
				organization: docm.data().organization,
				dateStar: docm.data().dateStar,
			})
		})
		yield put({type: INYECT_CERTIFICATE, payload:certificates });
	} catch (error) {
	}
}

function* getPortafolio(_:any):any{
	var portafolios:portafolioI[] =[]

	try {
		var results = yield call(getPortafolioRemote)
		results.forEach((docm:any)=>{
			portafolios.push({
				id: docm.id,
				title: docm.data().title,
				date: docm.data().date,
				detail: docm.data().detail,
				tecnologies: docm.data().tecnologies,
				img: docm.data().img,
			})
		})
		yield put({type: INYECT_PORTAFOLIO, payload:portafolios });
	} catch (error) {
	}
}

export default function* Saga(){
	yield takeLatest( GET_EDUCATION, getEducation);
	yield takeLatest( GET_CERTIFICATE, getCertificate);
	yield takeLatest( GET_PORTAFOLIO, getPortafolio);
}
