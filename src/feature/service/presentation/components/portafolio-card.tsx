import styled from "styled-components"
import { colorIntermedio, colorMenu } from "../../../../core/theme/color"
import portafolioI from "../../entities/portafolio_Interface"

function PortafolioCard(props:any){
	const item:portafolioI = props.props

	console.log('img',item.img)
	return <PortafolioCardCont>
		<ImgCont src={item.img}></ImgCont>
		<h3>{item.title }</h3>
		<h6>{item.date}</h6>
		<h6>{item.tecnologies}</h6>
		<p>{item.detail}</p>
	</PortafolioCardCont>
}

export default PortafolioCard

const PortafolioCardCont = styled.div`
	width: 40% ;
	display:flex;
	flex-direction: column ;
	gap:10px;
	overflow: hidden;
	align-items:center ;
	background:${colorMenu};
	border-radius: 10px ;
	border: 2px solid ${colorIntermedio};
	p{
		text-align: justify	 ;
	}
`
const ImgCont = styled.img`
	width: 100%;
	height: 300px;
`
