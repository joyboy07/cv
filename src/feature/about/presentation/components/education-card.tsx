import styled from "styled-components"
import { colorPrimary } from "../../../../core/theme/color"
import IEducation from "../../interface/education_Interface"

function EducationCard(props:any){
	const item:IEducation= props.props
	return <EducationCardCont>
		<Lineal>
			<div></div>
			<div></div>
		</Lineal>
		<Data>
			<h3>{item.name}</h3>
			<h6>{item.date}</h6>
			<h4>{item.institucion}</h4>
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
	width: 80% ;
	display: flex ;
	flex-direction: column ;
	gap: 10px;
	h3{
		color: ${colorPrimary} ;
		border-bottom: 1px solid ${colorPrimary};
		padding-bottom: 6px ;
	}
`
