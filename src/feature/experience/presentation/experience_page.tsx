import './style/experience.css'
import { useHistory } from "react-router-dom";
import { Button } from '@material-ui/core';
import ExperienceWidget from './widgts/experience-widget'

const ExperiencePage =() => {
	return (
	<div className="experience-page">
		<div className='cont'>
			<GoBack/>
			<Title/>
			<ExperienceWidget/>
			<ExperienceWidget/>
			<ExperienceWidget/>
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

export default ExperiencePage