import styled from "styled-components"
import portafolioI from "../../entities/portafolio_Interface"

function PortafolioCard(props:any){
	const item:portafolioI = props.props

	console.log('img',item.img)
	return <PortafolioCardCont>
		<section>
			<ImgCont src={item.img}></ImgCont>
		</section>
		<section>
			<h1>{item.title }</h1>
			<h6>{item.date}</h6>
			<h6>{item.tecnologies}</h6>
			<p>{item.detail}</p>
		</section>
	</PortafolioCardCont>
}

export default PortafolioCard

const PortafolioCardCont = styled.div`
	width: 100% ;
	display:flex;
	gap:10px;
	/* align-items:; */
	background: rgba(255,255,255,0.1);
	backdrop-filter:blur(20px);
	border:solid 1px rgba(255,255,255,0.2);
	padding: 10px;
	box-shadow: 0 10px 20px 5px rgba(0,0,0,0.05);
	border-radius:5px;
	section{
		:nth-child(1){
			width: 60% ;
		}
		:nth-child(2){
			width: 40% ;
			padding-top: 15px ;
			display: flex;
			flex-direction: column;
			gap: 10px ;
		}
	}
	p{
		text-align: justify	 ;
	}
	@media (max-width: 600px) {
		
		section{
			:nth-child(1){
				width: 40%;
			}
			:nth-child(2){
				width: 60%;
			}
		}
	}
`
const ImgCont = styled.img`
	width: 100%;
	height: 400px;
	border-radius: 10px ;
	@media (max-width: 600px) {
		height: 150px;
	}
`
