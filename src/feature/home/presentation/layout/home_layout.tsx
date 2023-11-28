import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { colorBackgroud, colorPrimary, colorWhite } from '../../../../core/theme/color'

const HomeLayout =() => {

	const navigate = useNavigate()
	function pushpdf() {
		navigate('/pdf')
	}
	return (
		<HomeCont>
			<section>
				<h1 >¡Hola, Soy <span>Julio</span>!</h1>
				<h2 >Desarrollador Full Stack | Apasionado por la Innovación Tecnológica</h2>
				<h3>Un <span>Full Stack Developer </span> y me gusta realizar sistemas que ayuden a las personas en sus actividades y también me gusta estar aprendiendo nuevas cosas.</h3>
				<h2 >Lo Que Ofrezco:</h2>
				<ul>
					<li>Desarrollador Full Stack Jr con enfoque en la innovación.</li>
					<li>Educación sólida y certificaciones respaldando mi experiencia.</li>
					<li>Descarga mi CV en PDF y explora mi portafolio para ver mis proyectos.</li>
				</ul>
				<h2>Mi Misión:</h2>
				<h3>Creo en el poder de la tecnología para mejorar nuestras vidas. Cada línea de código que escribo tiene un propósito: facilitar las actividades diarias y contribuir a un mundo más conectado.</h3>
				<h2>Acompáñame en mi Viaje:</h2>
				<h3>Descubre no solo mis habilidades técnicas sino también mi dedicación al aprendizaje continuo. ¡Bienvenido a mi viaje de desarrollo!</h3>
				<Buttons >
					<ButtonRun onClick={pushpdf}><p>Descargar CV</p></ButtonRun>
				</Buttons>
			</section>
			<section>
				<ImgLogo src='https://firebasestorage.googleapis.com/v0/b/cv-juliopp.appspot.com/o/joyboy2.png?alt=media&token=a45d0a91-2eca-4169-8d35-a496adc6471a' />
			</section>
		</HomeCont>
	)
}


const ImgLogo = styled.img`
		background-size: cover;
		border-radius: 10px;
		border: none;
		width: 100%;
		height: 100% ;
	`

const HomeCont = styled.div`
	display: flex;
	position: relative;
	height: 100vh;
	@media (max-width: 600px) {
		height: 90vh;
	}
	section{
		:nth-child(1){
			height:100%;
			width: 80%;
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
				color: ${colorBackgroud};
				text-align: justify ;
				font-weight: 900;
			}
			h3{
				text-align: justify ;
				span{
					animation: h1Animate;
					animation-duration: 1s;
					color: ${colorBackgroud};
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


export default HomeLayout