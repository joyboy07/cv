import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import './style/certificate.css'
import CertificateWidget from './widgets/certificate-widget'
import DataCertificates from './../data/local/certificate_data_local'

let dataCertificates = new DataCertificates()

const CertificatesPage =() => {
	return (
	<div className='certificates-page'>
		<div className='cont'>
				<GoBack/>
				<Title/>
				<Certificates/>
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
const Certificates =() => {
	return <div>
		{
			dataCertificates.getCertificagtes().map(function(certificates, index){
				return(
					<CertificateWidget key={index} logo={certificates.logo} institute={certificates.institute} years={certificates.years} url={certificates.url}/>
				)
			},this)
		}
	</div>
}


export default CertificatesPage