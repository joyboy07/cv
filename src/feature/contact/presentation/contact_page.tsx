import styled from 'styled-components'
import Lineas from '../../../app/component/lineas'
import { colorWhite } from '../../../core/theme/color'
import './style/home.css'

const ContactPage =() => {
	return (
		<ContactCont>
			<h1>Contact</h1>
			<Lineas></Lineas>
		</ContactCont>
	)
}
const ContactCont = styled.div`
	width: 77%;
	margin: 25px 25px 0px 45px ;
	color: ${colorWhite};
`

export default ContactPage