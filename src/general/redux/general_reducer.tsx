import certificateI from "../../feature/about/interface/certificate_interface"
import IEducation from "../../feature/home/entities/education_Interface"
import portafolioI from "../../feature/portafolio/entities/portafolio_Interface"
import experienceWordI from "../interface/experience_word_inteface"
import { INYECT_CERTIFICATE, INYECT_EDUCATION, INYECT_EXPERIENCE, INYECT_PORTAFOLIO } from "./general_action"


export interface initialI{
	educations:IEducation[],
	certificates:certificateI[],
	portafolios:portafolioI[],
	experienceWords:experienceWordI[],
	loading:false,
	error:null
}

const initialData:initialI ={
	educations:[],
	certificates:[],
	portafolios:[],
	experienceWords:[],
	loading:false,
	error:null
}
export function Reducer(state = initialData,  action:any){

	switch (action.type) {
		case INYECT_EDUCATION:{
			return {
				...state,
				loading:true,
				educations: action.payload
			}
		}
		case INYECT_CERTIFICATE:{
			return {
				...state,
				loading:true,
				certificates: action.payload
			}
		}
		case INYECT_PORTAFOLIO:{
			return {
				...state,
				loading:true,
				portafolios: action.payload
			}
		}
		case INYECT_EXPERIENCE:{
			return {
				...state,
				loading:true,
				experienceWords: action.payload
			}
		}
		default:
			return state
	}

}
export default Reducer