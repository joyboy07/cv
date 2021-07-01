import './style/experience.css'
import ExperienceWidget from './widgts/experience-widget'
import DataExperience from './../data/local/experience_data_local'
import GoBack from './../../../app/component/go-back'
import Title from './../../../app/component/title'

let dataExperience = new DataExperience()
const ExperiencePage =() => {
	return (
	<div className="experience-page">
		<div className='cont'>
			<GoBack/>
			<Title name='Experiencia'/>
			<Experience/>
		</div>
	</div>
	)
}
const Experience =() => {
	return(
		<div>
			{
				dataExperience.getCertificagtes().map(function(expereince, index){
					return(
						<ExperienceWidget key={index} name={expereince.name} ruc={expereince.ruc} years={expereince.years} cargo={expereince.cargo} url={expereince.url} />
					)
				})
			}
		</div>
	)
}
export default ExperiencePage