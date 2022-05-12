import { Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import IEducation from '../entities/education_Interface'
import Iskills from '../entities/skill_entity'
import xd from './../data/local/home_data_local'
import './style/home.css'
import EducationWidget from './widget/education-widget'
import Skill from './widget/skil-widget'

let xdp = new xd()
const HomePage =() => {
	return (
		<h1>hoi</h1>
		// <div className = 'home-page' >
		// 	<ImgUser/>
		// 	<br />
		// 	<Buttons/>
		// 	<br />
		// 	<div className ='child'>
		// 		<Education/>
		// 		<Skills/>
		// 	</div>
		// 	<Juegos>
		// 		<h2>02</h2>
		// 	</Juegos>
		// </div>
	)
}
export const Juegos = styled.div`
	background: #1c1;
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

const Education =() => {
	return <div >
		<h3 style={{color:"White"}}>EDUCATION</h3>
		<div>
			{
				xdp.EducationAll().map(function(params:IEducation, index) {
					return(
						<EducationWidget key={index}
							fromTo={params.date}
							institute={params.edication}
							career={params.centro}
						/>
					)
				},this)
			}
		</div>
	</div>
}

const Skills =() => {
	return <div>
		<div className='title-skill'>
			<h3>HABILIDADES</h3>
			<div>
				{
					xdp.fintLAll().map(function( xd:Iskills, index){
						return(
							<Skill key={index} title={xd.name}  width={xd.progress}/>
						)
					}, this)
				}
			</div>
		</div>
	</div>
}

export default HomePage