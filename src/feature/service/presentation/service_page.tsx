import styled from 'styled-components'
import Lineas from '../../../app/component/lineas'
import { colorWhite } from '../../../core/theme/color'
import ServiceCard from './components/service-card'
import './style/home.css'

const ServicePage =() => {
	return (
		<ServiceCont>
				<h1>Servicios</h1>
				<Lineas></Lineas>
				<ServiceCard></ServiceCard>
		</ServiceCont>
	)
}
const ServiceCont = styled.div`
	width: 77%;
	margin: 25px 25px 0px 45px ;
	color: ${colorWhite};
`

export default ServicePage