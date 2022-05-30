import { collection, getDocs } from "firebase/firestore";
import { db } from "../../db/firebase";


// class HomeDataLocal{

// 	fintLAll(){
// 		let product:Iskills[] = [
// 			{id:1,name:'Flutter', progress:'80%'},
// 			{id:2,name:'Angular', progress:'50%'},
// 			{id:3,name:'Html', progress:'70%'},
// 			{id:4,name:'css', progress:'60%'},
// 			{id:4,name:'sass', progress:'60%'},
// 			{id:5,name:'Git', progress:'70%'},
// 			{id:5,name:'Gitlab', progress:'80%'},
// 			{id:5,name:'Githab', progress:'80%'},
// 			{id:5,name:'NestJs', progress:'20%'},
// 			{id:5,name:'ReactJS', progress:'30%'},
// 			{id:5,name:'Scrum', progress:'50%'},
// 			{id:5,name:'DesignThinking', progress:'50%'},
// 			{id:5,name:'Dart', progress:'90%'},
// 			{id:5,name:'javacrip', progress:'75%'},
// 			{id:5,name:'figma', progress:'65%'},
// 		];
// 		return product
// 	}
// 	EducationAll(){
// 		let education:IEducation[] = [
// 			{id:1,date:'2015 - 2020', centro:'Ingenieria informatica', edication:'Universidad nacional jose faustino sanchez carrion'},
// 		];
// 		return education
// 	}
// }
// export default HomeDataLocal


export function getDataRemote() {
	return getDocs( collection( db, 'education' ));
}

export function getCertificateRemote() {
	return getDocs( collection( db, 'certificate' ));
}

export function getPortafolioRemote() {
	return getDocs( collection( db, 'portafolio' ));
}