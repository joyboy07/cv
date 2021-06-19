
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import './style/briefcase.css'
import BriefcaseWidget from './widgets/briefcase-widget'

const BriefcasePage =() => {
	return (
	<div className='briefcase-page'>
		<div className='cont' >
			<GoBack/>
			<Title/>
			<BriefcaseWidget/>
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
		<h1 style={{marginBottom:'10px'}}>Portafolio</h1>
	</div>
}

export default BriefcasePage