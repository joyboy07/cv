import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import Lineas from '../../../app/component/lineas'
import { colorWhite } from '../../../core/theme/color'
import { getPortafolioAction } from '../../../general/redux/general_action'
import portafolioI from '../entities/portafolio_Interface'
import PortafolioCardCont from './components/portafolio-card'
import './style/home.css'

const ServicePage =() => {
	const dispatch = useDispatch()

	const portafolios: portafolioI[] = useSelector((state: any) => state.Reducer.portafolios)
	console.log(portafolios)

	useEffect(() => {
		dispatch(getPortafolioAction())

	}, [])
	
	return (
		<ServiceCont>
				<h1>Portafolio</h1>
				<Lineas></Lineas>
				<FolderCont>
					{
							portafolios.map((item:portafolioI) => (
								<PortafolioCardCont key={item.id} props={item} />
							))
					}
				</FolderCont>
				{/* <PortafolioCardCont></PortafolioCardCont> */}
		</ServiceCont>
	)
}
const ServiceCont = styled.div`
	width: 77%;
	margin: 25px 25px 0px 45px ;
	color: ${colorWhite};
`

const FolderCont = styled.div`
	display:flex;
	gap: 15px ;
	flex-wrap: wrap ;
`

export default ServicePage