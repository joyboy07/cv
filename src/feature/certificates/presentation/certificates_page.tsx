import './style/certificate.css'
import CertificateWidget from './widgets/certificate-widget'
import DataCertificates from './../data/local/certificate_data_local'
import GoBack from './../../../app/component/go-back'
import Title from './../../../app/component/title'

let dataCertificates = new DataCertificates()

const CertificatesPage =() => {
	return (
	<div className='certificates-page'>
		<div className='cont'>
				<GoBack/>
				<Title name='Certificados'/>
				<Certificates/>
		</div>
	</div>
	)
}
const Certificates =() => {
	return <div>
		{
			dataCertificates.getCertificagtes().map(function(certificates, index){
				return(
					<CertificateWidget key={index} pros={certificates} institute={certificates.institute} years={certificates.years} url={certificates.url}/>
				)
			},this)
		}
	</div>
}
export default CertificatesPage