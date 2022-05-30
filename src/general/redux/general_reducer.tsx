import certificateI from "../../feature/about/interface/certificate_interface"
import IEducation from "../../feature/about/interface/education_Interface"
import portafolioI from "../../feature/service/entities/portafolio_Interface"
import { INYECT_CERTIFICATE, INYECT_EDUCATION, INYECT_PORTAFOLIO } from "./general_action"


export interface initialI{
	educations:IEducation[],
	certificates:certificateI[],
	portafolios:portafolioI[],
	loading:false,
	error:null
}

const initialData:initialI ={
	educations:[],
	certificates:[],
	portafolios:[],
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
		default:
			return state
	}

}
export default Reducer