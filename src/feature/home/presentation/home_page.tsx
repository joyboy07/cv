import './style/home.css'
import { Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import EducationWidget from './widget/education-widget'
import Skill from './widget/skil-widget'
import xd from './../data/local/home_data_local'
import Iskills from '../entities/skill_entity'

let xdp = new xd()

const homePage =() => {
	return (
		<div className = 'home-page' >
			<ImgUser/>
			<br />
			<Buttons/>
			<br />
			<div className ='child'>
				<Education/>
				<Skills/>
			</div>
		</div>
	)
}

const ImgUser = () => {
	return <div className = 'user'>
		<div className='photo' >
			<div />
		</div>
		<div className = 'info'>
			<h4> Desarrollador front-end</h4>
			<h1> Julio Porlles Pardo </h1>
			<p > Egresado de Ingeniería Informática con más de 1 año de experiencia. Proactivo, responsable, organizado y dinámico. Experiencia trabajando en equipo y ex-miembro de la comunidad estudiantil UNJFSC. </p>
		</div>
	</div>
}
const Buttons =() => {
	let history = useHistory();
	function goBack( name:String ) {
		console.log(name);
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
		<EducationWidget
			fromTo="2015 - 2020"
			institute="Universidad nacional jose faustino sanchez carrion"
			career="Ingenieria informatica"
		/>
		<EducationWidget
			fromTo="2015 - 2020"
			institute="Universidad nacional jose faustino sanchez carrion"
			career="Ingenieria informatica"
		/>
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

export default homePage