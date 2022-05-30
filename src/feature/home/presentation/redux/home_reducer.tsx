import { IJECT_DATA } from "./home_action"


export interface initialI{
	data:[],
	loading:false,
	error:null
}

const initialData:initialI ={
	data:[],
	loading:false,
	error:null
}
export function homeReducer(state = initialData,  action:any){

	switch (action.type) {
		case IJECT_DATA:{
			return {
				...state,
				loading:true,
				data: action.payload
			}
		}
		default:
			return state
	}

}
export default homeReducer