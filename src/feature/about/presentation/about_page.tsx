import styled from 'styled-components'
import { colorIntermedio, colorMenu, colorWhite } from '../../../core/theme/color'
import EducationCard from './components/education-card'
import ExperienceCard from './components/experience-card'
import './style/home.css'

const AboutPage =() => {
	return (
		<AboutCont>
			<h1>About Me</h1>
			<h1>i'm sajid ali and web developer</h1>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat itaque, tempore dolorum repellendus assumenda accusantium minus nam eveniet ipsum unde harum, voluptatem culpa? Aliquid obcaecati, repellat dolorum nihil eaque ratione?</p>
			<DataPersonal>
				<ul>
					<li><span>Birthday:</span> 2 mayo 1999</li>
					<li><span>linkeding:</span> 2 mayo 1999</li>
					<li><span>degre:</span> 2 mayo 1999</li>
					<li><span>City:</span> rowardpine</li>
				</ul>
				<ul>
					<li><span>age:</span> 26 </li>
					<li><span>email:</span> julio.porlles.pardo@gmail.com</li>
					<li><span>Phone:</span> 2 mayo 1999</li>
					<li><span>Frelancer:</span> Disponible</li>
				</ul>

			</DataPersonal>
			<h2>Tecnologias</h2>
			<GeneralCont>
				<Education>
					<h2 style={{marginLeft:'15px'}}>Educacion</h2>
					<EducationCard></EducationCard>
					<EducationCard></EducationCard>
				</Education>
				<Experience>
					<h2 style={{marginLeft:'15px'}}>Experiencia</h2>
					<ExperienceCard></ExperienceCard>
					<ExperienceCard></ExperienceCard>
				</Experience>
			</GeneralCont>
		</AboutCont>
	)
}
const AboutCont = styled.div`
	width: 77%;
	margin: 0px 25px 0px 45px ;
	color: ${colorWhite};
`
const DataPersonal = styled.div`
	display: flex;
	gap:20px;
	margin: 30px 0px;
	ul{
		text-decoration:none ;
		display: flex ;
		gap:20px;
		flex-direction: column;
		li{
			display: flex ;
			gap:10px;
			padding: 0px 20px ;
			padding-bottom: 10px ;
			border-bottom: 1px solid ${colorIntermedio};
			span{
				font-weight: bold ;
			}
		}
	}
`

const GeneralCont = styled.div`
	width: 100%;
	display: flex ;
	gap: 20px ;
	section{
		width: 50%;
		border-radius: 10px ;
		border: 2px solid ${colorIntermedio} ;
	}
`

const Education = styled.section`
	background: ${colorMenu};
	padding: 10px 0px 25px 0px;
	height:100% ;
`
const Experience = styled.section`
	background: ${colorMenu};
	padding: 10px 0px 25px 0px;
	height:100% ;
`
//! components

export default AboutPage