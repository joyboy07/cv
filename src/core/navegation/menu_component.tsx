import { faHome, faList, faUser } from '@fortawesome/free-solid-svg-icons';
import * as React from 'react';
import { useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
import menuI from '../interface/menu_interface';
import { colorIntermedio, colorMenu, colorPrimary, colorSecon, colorTers, colorWhite, fbAppbar } from '../theme/color';

const MenuComponet = () => {
    const [menu, setMenu] = useState('home')
    const [listMenu, setlistMenu] = useState<menuI[]>([])

    let history = useHistory();
    const { url } = useRouteMatch();
    React.useEffect(() => {
        var xds = (window.location.href).split('/')
        setMenu(xds[xds.length - 1])
        setlistMenu([
            { name: 'Inicio', ruta: '', icono: faHome },
            { name: 'Sobre Mi', ruta: 'about', icono: faUser },
            { name: 'Portafolio', ruta: 'service', icono: faList },
            // { name: 'Poyectos', ruta: 'portafolio', icono: faBriefcase },
            // { name: 'Contacto', ruta: 'contact', icono: faContactCard },
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
                    <li key={item.name}  className={  menu == item.ruta ? 'active ' : 'desactive'} onClick={() => changeMenu(item.ruta)} >
                        <a>{item.name}</a>
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
    /* background-color: ${colorMenu} ; */
    /* border-right: 2px solid ${colorIntermedio}; */
    display: flex ;
    align-items: center ;
    justify-content: center ;
    .active{
        transform: translateX(70px);
        background: ${colorSecon};
        transition: 2s;
        ::before{
            background: ${colorPrimary} ;
        }
        ::after{
                background: ${colorTers} ;
            }
    }
    .desactive{
        background: #3e3f46;
    }
    ul{
        position:  relative;
        transform:  skewY(-15deg);
        text-decoration:none ;
        display: flex ;
        flex-direction: column;
        gap: 20px ;
        color: ${colorWhite};
        li{
			
            position: relative;
            list-style: none ;
            width: 200px ;
            background: ${colorIntermedio} ;
            padding: 25px ;
            cursor: pointer;
            a{
                text-decoration: none;
                color: #999;
                /* display: block ; */
                /* text-transform: uppercase; */
				z-index: 11 ;
                letter-spacing: 0.1em ;
				transform: skewX(45deg) ;
				position: absolute;
                top: -30px ;
            }
            ::before{
                content: '';
                position: absolute;
                width: 40px;
                height: 100%;
                background: ${fbAppbar};
                top: 0 ;
                left: -40px;
                transform-origin: right ;
                transform: skewY(45deg) ;
                transition: 0.5s;

            }
            :hover::before{
                background: ${colorPrimary} ;
            }
            ::after{
                content: '';
                position: absolute;
                top: -40px ;
                left: 0;
                width: 100%;
                height: 40px;
                background: ${colorMenu};
                transform-origin: bottom ;
                transform: skewX(45deg) ;
                transition: 0.5s;
				box-shadow: -120px  100px 30px rgba(255,255,255,0.1);
            }
            :last-child::after{
                box-shadow: -120px 12   0px 40px rgba(0,0,0,0.5)
            }
            :hover::after{
                background: ${colorTers} ;
            }
            :hover{
                background: ${colorSecon};
                transform: translateX(70px);
                transition: 2s;
            }
            

        }
        .active{
            color: ${colorPrimary};
        }
        .desactive{
        }
    }
`;
