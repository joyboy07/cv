import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import Lineas from '../../../app/component/lineas'
import { colorIntermedio, colorWhite } from '../../../core/theme/color'
import { getCertificateAction, getDataAction } from '../../../general/redux/general_action'
import certificateI from '../interface/certificate_interface'
import IEducation from '../interface/education_Interface'
import CertificateCard from './components/certificate-card'
import EducationCard from './components/education-card'

const AboutPage =() => {
	const [age, setAge] = useState<number>();
	const dispatch = useDispatch()

	const educations: IEducation[] = useSelector((state: any) => state.Reducer.educations)
	const certificaties: certificateI[] = useSelector((state: any) => state.Reducer.certificates)
	console.log('names realizado',certificaties)
	useEffect(() => {
		if(new Date().getMonth() + 1 >= 5){
			setAge(new Date().getFullYear() - 1996)
		}else{
			setAge((new Date().getFullYear() - 1996) - 1)
		}
	},)
	useEffect(() => {
		dispatch(getDataAction(''))
		dispatch(getCertificateAction(''))
	}, [])

	return (
		<AboutCont>
			<h1>Sobre Mi</h1>
			<Lineas></Lineas>
			{/* <h1>Hola mi nombre es julio y soy Desarrollador full stack jr</h1>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat itaque, tempore dolorum repellendus assumenda accusantium minus nam eveniet ipsum unde harum, voluptatem culpa? Aliquid obcaecati, repellat dolorum nihil eaque ratione?</p> */}
			<DataPersonal>
				<ul>
					<li><span>Fecha de nacimiento:</span> 11 mayo 1996</li>
					<li><span>Direccion:</span> Peru - Lima - huaura - huacho </li>
					<li><span>Linkeding:</span>  <a href="https://www.linkedin.com/in/julio-porlles-pardo/">https://www.linkedin.com/in/julio-porlles-pardo/</a></li>
					<li><span>Pasa tiempo :</span> Sallir con amigos</li>
				</ul>
				<ul>
					<li><span>Edad:</span> {age} </li>
					<li><span>Movil:</span> 970578887</li>
					<li><span>email:</span> julio.porlles.pardo@gmail.com</li>
					<li><span>Frelancer:</span> Disponible</li>
				</ul>

			</DataPersonal>
			<GeneralCont>
				<Education>
					<h2 style={{marginLeft:'15px'}}>Educacion</h2>
					{
						educations.map((item:IEducation) => (
							<EducationCard key={item.id} props={item} />
						))
					}
					{/* <EducationCard></EducationCard> */}
				</Education>
				<Experience>
					<h2 style={{marginLeft:'15px'}}>Certificados</h2>
					{
						certificaties.map((item:certificateI) => (
							<CertificateCard key={item.id} props={item} />
						))
					}
				</Experience>
			</GeneralCont>
		</AboutCont>
	)
}
const AboutCont = styled.div`
	width: 77%;
	margin: 25px 25px 0px 45px ;
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
	@media (max-width: 600px) {
		display: block;
		ul{
			padding-top: 10px ;
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
		/* border: 2px solid ${colorIntermedio} ; */
	}
	@media (max-width: 600px) {
		display: block ;
		section{
			width: 100%;
			margin-top: 20px ;
		}
	}
`

const Education = styled.section`
	background: rgba(255,255,255,0.1);
	backdrop-filter:blur(20px);
	border:solid 1px rgba(255,255,255,0.2);
	box-shadow: 0 10px 20px 5px rgba(0,0,0,0.05);
	border-radius:5px;
	padding: 10px 0px 25px 0px;
	height:100% ;
`
const Experience = styled.section`
	background: rgba(255,255,255,0.1);
	backdrop-filter:blur(20px);
	border:solid 1px rgba(255,255,255,0.2);
	box-shadow: 0 10px 20px 5px rgba(0,0,0,0.05);
	border-radius:5px;
	padding: 10px 0px 25px 0px;
	height:100% ;
`
//! components

export default AboutPage