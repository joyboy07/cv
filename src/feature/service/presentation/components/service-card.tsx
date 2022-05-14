import styled from "styled-components"
import { colorIntermedio, colorMenu } from "../../../../core/theme/color"

function ServiceCard(){
	return <ServiceCardCont>
		<div>imagen</div>
		<h3>hola</h3>
		<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis nostrum tempora earum perspiciatis asperiores corporis dolores cum deleniti eum saepe ex atque labore, commodi aliquid cumque dolorum dignissimos soluta animi!</p>
	</ServiceCardCont>
}

export default ServiceCard

const ServiceCardCont = styled.div`
	width: 200px ;
	display:flex;
	flex-direction: column ;
	gap:10px;
	align-items:center ;
	background:${colorMenu};
	border-radius: 10px ;
	border: 2px solid ${colorIntermedio};
	padding:20px ;
	p{
		text-align: center	 ;
	}
`
