import styled from 'styled-components'
import { colorWhite } from '../../core/theme/color'

function Lineas() {
	return (
		<LineasCont>
			<div></div>
			<div></div>
		</LineasCont>
	)
}

export default Lineas


const LineasCont = styled.div`
	display:flex;
	flex-direction: column;
	margin-bottom: 25px ;
	gap: 7px ;
	div{
		:nth-child(1){
			background-color: ${colorWhite};
			height: 5px;
			width: 120px;
		}
		:nth-child(2){
			background-color: ${colorWhite};
			height: 5px;
			width: 60px;
		}
	}
`