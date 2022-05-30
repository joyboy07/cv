import { Button } from '@material-ui/core'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import images from '../../../assets/images'
import { colorPrimary, colorWhite } from '../../../core/theme/color'
import { getDataAction } from '../../general/redux/general_action'
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
				<h2>Un <span>Full Stack Developer</span> y me gusta realizar sistemas que ayuden a las personas en sus actividades y también en gusta estar aprendiendo nuevas cosas.</h2>
				<Buttons >
					<Button>Mas sobre mi</Button>
					<Button>CV Descargar</Button>
				</Buttons>
			</section>
			<section>
				<div >
					<ImgLogo src='https://www.online-image-editor.com/styles/2019/images/power_girl.png' />
				</div>
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
				:active{
					transform: scale(.9);
				}
			}
			h1{
				font-size:70px ;
				span{
					color: ${colorPrimary};
				}
			}
			h2{
				span{
					color: ${colorPrimary};
				}
			}
		}
		:nth-child(2){
			width: 40%;
			height:100%;
			display: flex;
			justify-content:  center;
			align-items: center;
		}
	}
`

export const Buttons = styled.div`
	display: flex ;
	gap:15px;
`

export default HomePage