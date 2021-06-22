import './style/briefcase.css'
import { useHistory } from "react-router-dom";
import { Button } from '@material-ui/core';
import Briefcase from './widgts/briefcase-widget'
import DataBreafcase from './../data/local/briefcase_data_local'
import IBriefcase from '../entities/briefcase_entity';

let dataBreafcase = new DataBreafcase()

const ExperiencePage =() => {
	return (
	<div className="experience-page">
		<div className='cont'>
			<GoBack/>
			<Title/>
			<Briefcases/>
		</div>
	</div>
	)
}

const GoBack =() => {
	let history = useHistory();
	function goBack() {
		history.push("/");
	}
	return <div style={{paddingTop:'70px', paddingBottom:'30px'}}>
		<Button variant="outlined" style={{color:'#ccc', borderColor:'#ccc', borderRadius:'0'}} onClick={goBack} > Volver </Button>
	</div>
}

const Title =() => {
	return <div className ='title'>
		<h1 style={{marginBottom:'10px'}}>Experience</h1>
	</div>
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