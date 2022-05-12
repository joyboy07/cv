import { faCalendarCheck, faHandsBound, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
import menuI from '../interface/menu_interface';
import { colorBackgroud, colorIntermedio, colorMenu, colorWhite } from '../theme/color';



const MenuComponet = () => {
	const [menu, setMenu] = useState('home')
	const [listMenu, setlistMenu] = useState<menuI[]>([])

	let history = useHistory();
	const { url } = useRouteMatch();
	React.useEffect(() => {
		var xds = (window.location.href).split('/')
		setMenu(xds[xds.length - 1])
		setlistMenu([
			{ name: 'Home', ruta: 'home', icono: faHome },
			{ name: 'About', ruta: 'audiencias', icono: faHandsBound },
			{ name: 'Services', ruta: 'report', icono: faCalendarCheck },
			{ name: 'Portafolio', ruta: 'report', icono: faCalendarCheck },
			{ name: 'Contact', ruta: 'report', icono: faCalendarCheck },
		])
	}, [])

	const changeMenu = (data: any) => {
		history.push(`${url}/${data}`);
		setMenu(data)
	}

	return (
		<>
			<MenuCont>
				<ul >
					{
						listMenu.map((item: menuI) => (
							<li key={item.name}  className={menu == item.ruta ? 'active' : 'desactive'} onClick={() => changeMenu(item.ruta)} >
								<FontAwesomeIcon aria-disabled icon={item.icono} style={{ fontSize: '25px', }}></FontAwesomeIcon>
								<h3>{item.name}</h3>
							</li>
						))
					}
				</ul >
			</MenuCont>
		</>
	);
};
export default MenuComponet;


const MenuCont = styled.div`
	width: 23%;
	height: 100vh;
	z-index: 10;
	background-color: ${colorMenu} ;
	border-right: 2px solid ${colorIntermedio};
	display: flex ;
	align-items: center ;
	justify-content: center ;
	ul{
		text-decoration:none ;
		display: flex ;
		gap:20px;
		flex-direction: column;
		color: ${colorWhite};
		li{
			display: flex ;
			gap:10px;
			padding: 0px 20px ;
			padding-bottom: 10px ;
			border-bottom: 1px solid ${colorIntermedio};
		}
	}
`;


const ItemsNav = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	/* align-items: center ; */
	/* background-color: #c22 ; */
	text-align:start ;
	height: 100%;
	/* .active{
		background-color:${colorBackgroud};
		color:#E4E6EC ;
	}
	.desactive{
		background-color: #3A3B3C ;
		color: #E4E6EC;
	} */
`;
const AppItem = styled.div`
	cursor: pointer;
	display: flex;
	justify-content: center;
	gap: 10px;
	margin: 8px ;
	align-items: center;
	:active{
		transform: scale(.9);
	}
	:hover{
	
	}
`;