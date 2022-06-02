import styled from "styled-components"
import { colorPrimary } from "../../../../core/theme/color"

function ExperienceCard(){
	return < ExperienceCardCont>
		<Lineal>
			<div></div>
			<div></div>
		</Lineal>
		<Data>
			<h3>Mecánica automotriz jorge chumpitaz</h3>
			<h4>RUC: 101573083331</h4>
			<p> Cargo: Desarrollador </p>
			<p> 01-05-2020 a 30-08-2020</p>
		</Data>
	</ ExperienceCardCont>
}

export default ExperienceCard

const  ExperienceCardCont = styled.div`
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
