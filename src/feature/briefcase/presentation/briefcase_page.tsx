import './style/briefcase.css'
import Briefcase from './widgts/briefcase-widget'
import DataBreafcase from './../data/local/briefcase_data_local'
import IBriefcase from '../entities/briefcase_entity';
import GoBack from './../../../app/component/go-back'
import Title from './../../../app/component/title'

let dataBreafcase = new DataBreafcase()

const ExperiencePage =() => {
	return (
	<div className="experience-page">
		<div className='cont'>
			<GoBack/>
			<Title name='Portafolio'/>
			<Briefcases/>
		</div>
	</div>
	)
}
const Briefcases =() => {
	return (
		<div>
			{
				dataBreafcase.getCertificagtes().map((breafcase:IBriefcase, index) => {
					return(
						<Briefcase key={index} prams= {breafcase}/>
					)
				},this)
			}
		</div>
	)
}

export default ExperiencePage