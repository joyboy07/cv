import { useEffect } from 'react'
import styled from 'styled-components'
import Lineas from '../../../app/component/lineas'
import { colorWhite } from '../../../core/theme/color'

const PortafolioPage =() => {

	const getData = async() =>{
	}
	useEffect(() => {
	}, [])
	

	return (
		<PortafolioCont>
			<h1>Portafolio</h1>
			<Lineas></Lineas>
		</PortafolioCont>
	)
}
const PortafolioCont = styled.div`
	width: 77%;
	margin: 25px 25px 0px 45px ;
	color: ${colorWhite};
`

export default PortafolioPage