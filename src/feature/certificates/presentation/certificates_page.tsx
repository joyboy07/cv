import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import './style/certificate.css'
import CertificateWidget from './widgets/certificate-widget'

const CertificatesPage =() => {
	return (
	<div className='certificates-page'>
		<div className='cont'>
				<GoBack/>
				<Title/>
				<CertificateWidget/>
				<CertificateWidget/>
				<CertificateWidget/>
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
		<h1 style={{marginBottom:'10px'}}>Certificados</h1>
	</div>
}


export default CertificatesPage