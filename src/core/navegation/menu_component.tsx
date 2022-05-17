import { faBriefcase, faContactCard, faHome, faList, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
import menuI from '../interface/menu_interface';
import { colorBackgroud, colorIntermedio, colorMenu, colorPrimary, colorWhite } from '../theme/color';

const MenuComponet = () => {
	const [menu, setMenu] = useState('home')
	const [listMenu, setlistMenu] = useState<menuI[]>([])

	let history = useHistory();
	const { url } = useRouteMatch();
	React.useEffect(() => {
		var xds = (window.location.href).split('/')
		setMenu(xds[xds.length - 1])
		setlistMenu([
			{ name: 'Home', ruta: '', icono: faHome },
			{ name: 'About', ruta: 'about', icono: faUser },
			{ name: 'Services', ruta: 'service', icono: faList },
			{ name: 'Portafolio', ruta: 'portafolio', icono: faBriefcase },
			{ name: 'Contact', ruta: 'contact', icono: faContactCard },
		])
	}, [])

	const changeMenu = (data: any) => {
		history.push(`/${data}`);
		setMenu(data)
	}

	return (
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
	);
};
export default MenuComponet;


const MenuCont = styled.div`
	width: 23%;
	height: 100vh;
	position: fixed ;
	top: 0 ;
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
			cursor: pointer;
			display: flex ;
			gap:10px;
			padding: 0px 20px ;
			padding-bottom: 10px ;
			border-bottom: 1px solid ${colorIntermedio};
			:hover{
				color: ${colorBackgroud} ;
			}
			:active{
				transform: scale(.9);
			}

		}
		.active{
			color: ${colorPrimary};
		}
		.desactive{
		}
	}
`;