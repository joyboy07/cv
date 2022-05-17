import { collection, getDocs } from "firebase/firestore"
import { useEffect } from 'react'
import styled from 'styled-components'
import Lineas from '../../../app/component/lineas'
import { colorWhite } from '../../../core/theme/color'
import db from '../../../db/firebase'
import './style/home.css'

const PortafolioPage =() => {

	const getData = async() =>{

	}

	useEffect(() => {
		console.log(getDocs( collection( db, 'info' )))
	}, [])
	

	return (
		<PortafolioCont>
			<h1>Portafolio</h1>
			<Lineas></Lineas>
		</PortafolioCont>
	)
}
const PortafolioCont = styled.div`
	width: 77%;
	margin: 25px 25px 0px 45px ;
	color: ${colorWhite};
`

export default PortafolioPage