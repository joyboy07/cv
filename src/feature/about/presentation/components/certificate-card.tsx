import styled from "styled-components"
import { colorWhite } from "../../../../core/theme/color"
import certificateI from "../../interface/certificate_interface"

function CertificateCard(props:any){
	const item:certificateI = props.props
	return < CertificateCont>
		<Lineal>
			<div></div>
			<div></div>
		</Lineal>
		<Data>
			<h3>{item.name }</h3>
			<h6> {item.dateStar}</h6>
			<h4>{item.organization}</h4>
		</Data>
	</ CertificateCont>
}

export default CertificateCard

const  CertificateCont = styled.div`
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
			background: ${colorWhite} ;
		}
		:nth-child(2){
			height: 100%;
			width: 2px ;
			top: 16px;
			position: absolute;
			border-radius: 3px;
			background: ${colorWhite} ;
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
		color: ${colorWhite} ;
		border-bottom: 1px solid ${colorWhite};
		padding-bottom: 6px ;
	}
`
