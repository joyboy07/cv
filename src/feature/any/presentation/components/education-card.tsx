import styled from "styled-components"
import { colorPrimary } from "../../../../core/theme/color"

function EducationCard(){
	return <EducationCardCont>
		<Lineal>
			<div></div>
			<div></div>
		</Lineal>
		<Data>
			<h3>2005 - 2012</h3>
			<h4>ingenieria informatica</h4>
			<p>Universidad nacional jose faustino sanchez carrion</p>
		</Data>
	</EducationCardCont>
}

export default EducationCard

const EducationCardCont = styled.div`
	display:flex;
`

const Lineal = styled.div`
	display: flex ;
	flex-direction: column;
	align-items: center ;
	position: relative;
	width: 10% ;
	div{
		:nth-child(1){
			height: 15px;
			width: 15px;
			top: 14px;
			position: absolute ;
			border-radius: 50% ;
			background: ${colorPrimary} ;
		}
		:nth-child(2){
			height: 100%;
			width: 2px ;
			top: 16px;
			position: absolute;
			border-radius: 3px;
			background: ${colorPrimary} ;
		}
	}
`
const Data = styled.div`
	margin: 10px 0px;
	width: 90% ;
	display: flex ;
	flex-direction: column ;
	gap: 10px;
`
