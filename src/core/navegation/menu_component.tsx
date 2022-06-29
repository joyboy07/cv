import { faHome, faList, faUser } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import BurguerButton from '../../app/component/BurguerButton';
import menuI from '../interface/menu_interface';
import { colorIntermedio, colorMenu, colorPrimary, colorWhite, fbAppbar } from '../theme/color';

const MenuComponet = () => {
    const [menu, setMenu] = useState('home')
    const [listMenu, setlistMenu] = useState<menuI[]>([])

    const [clicked, setClicked] = useState(false)
    const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
        setClicked(!clicked)
    }

    let history = useNavigate();
    useEffect(() => {
        var xds = (window.location.href).split('/')
        setMenu(xds[xds.length - 1])
        setlistMenu([
            { name: 'Inicio', ruta: 'home', icono: faHome },
            { name: 'Sobre Mi', ruta: 'about', icono: faUser },
            { name: 'Portafolio', ruta: 'service', icono: faList },
            // { name: 'Poyectos', ruta: 'portafolio', icono: faBriefcase },
            // { name: 'Contacto', ruta: 'contact', icono: faContactCard },
        ])
    }, [])

    const changeMenu = (data: any) => {
        history(`${data}`);
        setMenu(data)
        setClicked(false)
    }

    return (
    <MenuCont>
        <CenterCont>
            <BurguerButton clicked={clicked}  handleClick={handleClick}/>
        </CenterCont>

        <ul className={  clicked ? 'activelo ' : 'desactivelo'} >
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
    @media (max-width: 600px) {
        ul{
            display: flex;
            flex-direction: column;
            justify-content: center ;
            align-items:  center;
            gap: 10px ;
            height: 0px;
            overflow: hidden;
            li{
                list-style: none ;
                a{
                    font-size:30px ;
                    font-weight: bold ;
                    color:${colorWhite} ;
                    border-bottom: 1px solid ${colorWhite} ;
                }
            }
        }
        .activelo{
            animation-name: example;
            animation-duration: 2s;
            animation-fill-mode: forwards;
        }
        .desactivelo{
            height: 0;
            animation-name: reversess;
            animation-duration: 2s;
            animation-fill-mode: forwards;
        }
        @keyframes example {
            from {height:0 ;}
            to {height: 90vh;}
        }
        @keyframes reversess {
            from {height: 90vh ;}
            to {height: 0;}
        }
    }
    @media (min-width: 600px) {
        width: 23%;
        height: 100vh;
        position: fixed ;
        top: 0 ;
        z-index: 10;
        display: flex ;
        align-items: center ;
        justify-content: center ;
        .active{
            transform: translateX(70px);
            background: rgba(255,255,255,0.1);
            backdrop-filter:blur(20px);
            transition: 2s;
            ::before{
                background: rgba(255,255,255,0.1);
                backdrop-filter:blur(20px);
            }
            ::after{
                background: rgba(255,255,255,0.1);
                backdrop-filter:blur(20px);
            }
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
                    z-index: 11 ;
                    letter-spacing: 0.1em ;
                    transform: skewX(45deg) ;
                    position: absolute;
                    font-weight: bold ;
                    color:${colorWhite} ;
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
                    background: rgba(255,255,255,0.1);
                    backdrop-filter:blur(20px);
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
                    box-shadow: -120px  100px 30px rgba(0,0,0,0.7);
                }
                :hover::after{
                    background: rgba(255,255,255,0.1);
                    backdrop-filter:blur(20px);
                }
                :hover{
                    background: rgba(255,255,255,0.1);
                    backdrop-filter:blur(20px);
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
    }
`;

const CenterCont = styled.div`
    display: flex;
    justify-content: center ;
    @media (min-width: 600px) {
        display: none;
    }
`;
