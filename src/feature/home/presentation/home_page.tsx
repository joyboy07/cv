import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import MenuComponet from '../../../core/navegation/menu_component'
import { colorPrimary, colorWhite } from '../../../core/theme/color'
import { getCertificateAction, getDataAction, getExperienceWordAction, getPortafolioAction } from '../../../general/redux/general_action'

const HomePage =() => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getDataAction())
		dispatch(getCertificateAction())
		dispatch(getPortafolioAction())
		dispatch(getExperienceWordAction())

	}, [dispatch])
	return (
		<Reductor>
				<nav>
					<MenuComponet/>
				</nav>
				<aside>
					<Outlet />
				</aside>
		</Reductor>
	)
}

export const Reductor = styled.div`
	width: 100%;
	height: 100vh;
	display: grid;
	grid-template-columns: 25% 75% ;
	@media (max-width: 600px) {
		display:block;
	}
`;

export const HomeCont = styled.div`
	display: flex;
	position: relative;
	height: 100vh;
	@media (max-width: 600px) {
		height: 90vh;
	}
	section{
		:nth-child(1){
			height:100%;
			width: 100%;
			display:flex;
			flex-direction: column;
			justify-content: center;
			gap:12px ;
			/* margin-left: 40px ; */
			padding: 0px 40px;
			color: ${colorWhite};
			button{
				text-transform: none;
				margin-top: 60px ;
				font-size: 17px;
				background: ${colorPrimary};
				border-radius: 20px ;
				padding: 5px 30px ;
			}
			h1{
				font-size:70px ;
				span{
					animation: h1Animate;
					animation-duration: 1s;
					color: ${colorPrimary};
					font-family: 'Shadows Into Light', cursive;
				}
			}
			h2{
				text-align: justify ;
				span{
					animation: h1Animate;
					animation-duration: 1s;
					color: ${colorPrimary};
					font-family: 'Shadows Into Light', cursive;
				}
			}
			@keyframes h1Animate{
				0%{
					transform: scale(0);
					opacity: 0;
				}
				50%{
					transform: scale(0);
					opacity: 50%;
				}
				100%{
					transform: translateX(10);
					opacity: 100%;
				}
			}
		}
		:nth-child(2){
			position: absolute;
			width: 100%;
			height:100%;
			display: flex;
			justify-content:  center;
			align-items: center;
			z-index: -1;
			opacity:   10%;
		}
	}
	@media (max-width: 600px) {
        width: 100% ;
		section{
			:nth-child(1){
				width: 100%;
				gap:40px;
				align-items: center ;
			}
			:nth-child(2){
				display: none;
			}
		}
	}
`

export const Buttons = styled.div`
	display: flex ;
	gap:15px;

`


export default HomePage