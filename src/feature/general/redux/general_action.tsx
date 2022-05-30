
export const 	GET_EDUCATION = 'GET_EDUCATION'
export const 	GET_CERTIFICATE = 'GET_CERTIFICATE'
export const 	GET_PORTAFOLIO = 'GET_PORTAFOLIO'

export const 	INYECT_EDUCATION = 'INYECT_EDUCATION'
export const 	INYECT_CERTIFICATE = 'INYECT_CERTIFICATE'
export const 	INYECT_PORTAFOLIO = 'INYECT_PORTAFOLIO'

export const getDataAction = (payload:any) => ({
	type: GET_EDUCATION,
	...payload
})

export const getCertificateAction = (payload:any) => ({
	type: GET_CERTIFICATE,
	...payload
})
export const getPortafolioAction = () => ({
	type: GET_PORTAFOLIO,
})



