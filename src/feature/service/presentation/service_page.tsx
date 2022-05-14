import styled from 'styled-components'
import { colorWhite } from '../../../core/theme/color'
import ServiceCard from './components/service-card'
import './style/home.css'

const ServicePage =() => {
	return (
		<ServiceCont>
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