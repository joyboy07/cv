import { PDFViewer } from '@react-pdf/renderer'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCertificateAction, getDataAction, getPortafolioAction } from '../../../general/redux/general_action'
import certificateI from '../../about/interface/certificate_interface'
import IEducation from '../../about/interface/education_Interface'
import portafolioI from '../../portafolio/entities/portafolio_Interface'
import DocuPdf from './components/docu_pdf'

function HomeCvpdf() {
const dispatch = useDispatch()
const educations: IEducation[] = useSelector((state: any) => state.Reducer.educations)
const certificaties: certificateI[] = useSelector((state: any) => state.Reducer.certificates)
const portafolios: portafolioI[] = useSelector((state: any) => state.Reducer.portafolios)

useEffect(() => {
	if(educations.length == 0){
		dispatch(getDataAction())
		dispatch(getCertificateAction())
		dispatch(getPortafolioAction())
	}
}, [])

return (
		<PDFViewer style={{ width: "100%", height: "100vh" }}>
			<DocuPdf education={educations} certificaties={certificaties} portafolios={portafolios} />
		</PDFViewer>
	)
}

export default HomeCvpdf