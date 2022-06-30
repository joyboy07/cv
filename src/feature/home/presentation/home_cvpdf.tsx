import { PDFViewer } from '@react-pdf/renderer'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import experienceWordI from '../../../general/interface/experience_word_inteface'
import { getCertificateAction, getDataAction, getExperienceWordAction, getPortafolioAction } from '../../../general/redux/general_action'
import certificateI from '../../about/interface/certificate_interface'
import IEducation from '../../about/interface/education_Interface'
import portafolioI from '../../portafolio/entities/portafolio_Interface'
import DocuPdf from './components/docu_pdf'

function HomeCvpdf() {
const dispatch = useDispatch()
const educations: IEducation[] = useSelector((state: any) => state.Reducer.educations)
const certificaties: certificateI[] = useSelector((state: any) => state.Reducer.certificates)
const portafolios: portafolioI[] = useSelector((state: any) => state.Reducer.portafolios)
const experienceWordIs: experienceWordI[] = useSelector((state: any) => state.Reducer.experienceWords)
console.log('data',experienceWordIs)

useEffect(() => {
	if(educations.length == 0){
		dispatch(getDataAction())
		dispatch(getCertificateAction())
		dispatch(getPortafolioAction())
		dispatch(getExperienceWordAction())
	}
}, [])

return (
		<PDFViewer style={{ width: "100%", height: "100vh" }}>
			<DocuPdf education={educations} certificaties={certificaties} portafolios={portafolios} experienceWordIs={experienceWordIs} />
		</PDFViewer>
	)
}

export default HomeCvpdf