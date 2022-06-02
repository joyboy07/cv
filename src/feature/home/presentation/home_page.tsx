import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import images from '../../../assets/images'
import { colorPrimary, colorWhite } from '../../../core/theme/color'
import { getDataAction } from '../../../general/redux/general_action'
import './style/home.css'

const HomePage =() => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getDataAction(''))
		console.log('X')
	}, [])
	
	return (
		<HomeCont>
			<section>
				<h1 >Hola soy <span>Julio </span></h1>
				{/* <h1>Soy <span>Desarrollador full stack</span></h1> */}
				<h2>Un <span>Full Stack Developer jr</span> y me gusta realizar sistemas que ayuden a las personas en sus actividades y también en gusta estar aprendiendo nuevas cosas.</h2>
				<Buttons >
					<ButtonRun><p>CV Descargar</p></ButtonRun>
				</Buttons>
			</section>
			<section>
				<ImgLogo src='https://firebasestorage.googleapis.com/v0/b/cv-juliopp.appspot.com/o/joyboy2.png?alt=media&token=a45d0a91-2eca-4169-8d35-a496adc6471a' />
			</section>
		</HomeCont>
	)
}

const ImgLogo = styled.img`
		/* background-image: url(${images.udemy}); */
		background-size: cover;
		/* background-color: #fff; */
		border-radius: 10px;
		border: none;
		width: 100%;
		height: 100% ;
	`

export const HomeCont = styled.div`
	width: 77%;
	display: flex;
	position: relative;
	section{
		:nth-child(1){
			height:100%;
			width: 60%;
			display:flex;
			flex-direction: column;
			justify-content: center;
			gap:12px ;
			margin-left: 40px ;
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
`

export const Buttons = styled.div`
	display: flex ;
	gap:15px;
`

const ButtonRun = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	overflow: hidden;
	border-radius: 10px;
	padding: 0px 15px ;
	height: 50px ;
	cursor: pointer ;
	::before{
		content: '';
		position: absolute;
		width: 30px;
		height: 250%;
		background: linear-gradient(#DAA622 , #0A52BF );
		animation: movers;
		animation-duration: 4s;
		animation-iteration-count: infinite;
		animation-timing-function: ease;

	}
	@keyframes movers{
		0%{
			transform: rotate(0deg);
		}
		100%{
			transform: rotate(360deg);
		}
	}
	::after{
		content: '';
		position: absolute;
		inset: 3px;
		background: #fff;
		border-radius: 30px;
	}
	p{
		position: relative;
		color: ${colorPrimary};
		/* font-size:10px; */
		font-weight: 600;
		z-index: 10;
		padding: 10px;
	}

	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;


`


export default HomePage