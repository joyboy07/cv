import { Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { colorPrimary, colorWhite } from '../../../core/theme/color'
import './style/home.css'

const HomePage =() => {
	return (
		<HomeCont>
			<section>
				<h1>Hello, mi name is  <span>julio porlles</span></h1>
				<h1>I'm a <span>Desarrollador full stack</span></h1>
				<h1>I'm a web Desing with extensive experiencie for over 10 years. My expertise is to create and website, desing, graphic desing, and many more... </h1>
				<button>More About Me</button>
			</section>
			<section></section>
		</HomeCont>
	)
}
export const HomeCont = styled.div`
	width: 70%;
	display: flex;
	section:nth-child(1){
		height:100%;
		width: 60%;
		display:flex;
		flex-direction: column;
		justify-content: center;
		gap:12px ;
		margin-left: 40px ;
		color: ${colorWhite};
		button{
			margin-top: 60px ;
			width: 180px ;
			font-size: 17px;
			background: ${colorPrimary};
			border-radius: 20px ;
			padding: 10px 0px;
		}
		h1{
			font-size:30px ;
			span{
				color: ${colorPrimary};
			}
		}
	}
	section:nth-child(2){
		/* background: #c11; */
		width: 40%;
		height:100%;
	}


`
export const Juegos = styled.div`
	width: 300px;
	height: 400px;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	overflow: hidden;
	border-radius: 20px;
	::before{
		content: '';
		position: absolute;
		width: 150px;
		height: 140%;
		background: linear-gradient(#00ccff, #d400d4);
		animation: animate 4s linear infinite;
	}
	::after{
		content: '';
		position: absolute;
		inset: 4px;
		background: #1c1;
		border-radius: 16px;
	}
	h2{
		position: relative;
		color: #fff;
		font-size: 10em;
		z-index: 10;

	}
	
	@keyframes animate{
		0%{
			transform: rotate(0deg);
		}
		100%{
			transform: rotate(360deg);
		}
	}

`

const ImgUser = () => {
	let history = useHistory();
	function goBack( name:String ) {
		console.log('entre')
		const win:any = window.open("/cvPdf", "_blank");
		win.focus();

		// history.push( `${name}`);
	}
	return <div className = 'user'>
		<div className='photo' >
			<div />
		</div>
		<div className = 'info'>
			<h4> Desarrollador front-end</h4>
			<div>
				<h1> Julio Porlles Pardo </h1>
				{/* <Button > Descargar CV</Button> */}
				<Button > <a onClick={() => goBack('/cvPdf')} >Descargar CV</a></Button>
			</div>
			<p > Egresado de Ingeniería Informática con más de 1 año de experiencia. Proactivo, responsable, organizado y dinámico. Experiencia trabajando en equipo y ex-miembro de la comunidad estudiantil UNJFSC. </p>
		</div>
	</div>
}
const Buttons =() => {
	let history = useHistory();
	function goBack( name:String ) {
		history.push( `${name}`);
	}
	return <div className='buttons'>
		<Button type="button" onClick={() => goBack('/briefcase')}>MI PORTOFOLIO</Button>
		<Button type="button" onClick={() => goBack('/certificate')} >CERTIFICADOS</Button>
		<Button type="button" onClick={() => goBack('/experience')} >EXPERIENCIA</Button>
	</div>
}

// const Education =() => {
// 	return <div >
// 		<h3 style={{color:"White"}}>EDUCATION</h3>
// 		<div>
// 			{
// 				xdp.EducationAll().map(function(params:IEducation, index) {
// 					return(
// 						<EducationWidget key={index}
// 							fromTo={params.date}
// 							institute={params.edication}
// 							career={params.centro}
// 						/>
// 					)
// 				},this)
// 			}
// 		</div>
// 	</div>
// }

// const Skills =() => {
// 	return <div>
// 		<div className='title-skill'>
// 			<h3>HABILIDADES</h3>
// 			<div>
// 				{
// 					xdp.fintLAll().map(function( xd:Iskills, index){
// 						return(
// 							<Skill key={index} title={xd.name}  width={xd.progress}/>
// 						)
// 					}, this)
// 				}
// 			</div>
// 		</div>
// 	</div>
// }

export default HomePage