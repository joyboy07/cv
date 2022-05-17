import { Button } from '@material-ui/core'
import styled from 'styled-components'
import images from '../../../assets/images'
import { colorPrimary, colorWhite } from '../../../core/theme/color'
import './style/home.css'

const HomePage =() => {
	return (
		<HomeCont>
			<section>
				<h1>Hola mi nombre <span>Julio Porlles Pardo</span></h1>
				<h1>Soy <span>Desarrollador full stack</span></h1>
				<h1>I'm a web Desing with extensive experiencie for over 10 years. My expertise is to create and website, desing, graphic desing, and many more... </h1>
				<Buttons >
					<Button>Mas sobre mi</Button>
					<Button>CV Descargar</Button>
				</Buttons>
			</section>
			<section>
				<div style={{ width: '300px' , height: '300px' }}>
					<ImgLogo/>
				</div>
			</section>
		</HomeCont>
	)
}

const ImgLogo = styled.img`
		background-image: url(${images.udemy});
		background-size: cover;
		background-color: #fff;
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
				font-size:30px ;
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